#load "nuget:?package=Rocket.Surgery.Cake.Library&version=0.8.4";
#addin "nuget:?package=Cake.Npm&version=0.15.0";
#addin Newtonsoft.Json
using Newtonsoft.Json.Linq;

var version = $"{Settings.Version.SemVer}";

Task("copy-util")
    .DoesForEach(GetDirectories("tasks/*"), (directory) => {
        EnsureDirectoryExists(directory.Combine("util"));
        CopyFiles("./util/**/*.ts", directory.Combine("util"));
    });

Task("version")
    .WithCriteria(() => Target.Equals("Publish", StringComparison.OrdinalIgnoreCase) || !BuildSystem.IsLocalBuild)
    .DoesForEach(GetFiles("tasks/*/task.json"), (file) => {
        var json = JObject.Parse(System.IO.File.ReadAllText(file.FullPath));
        json["version"]["Major"] = Settings.Version.Major;
        json["version"]["Minor"] = Settings.Version.Minor;
        json["version"]["Patch"] = Settings.Version.Patch;
        System.IO.File.WriteAllText(file.FullPath, json.ToString());
    });

Task("install").Does(() => { NpmInstall(); });

Task("prettier").Does(() => { NpmRunScript("prettier"); });

Task("build").Does(() => { NpmRunScript("build"); });

Task("lint").Does(() => { NpmRunScript("lint"); });

Task("test").Does(() => { NpmRunScript("test"); });

Task("Default")
    .IsDependentOn("copy-util")
    .IsDependentOn("version")
    .IsDependentOn("install")
    .IsDependentOn("build")
    .IsDependentOn("prettier")
    .IsDependentOn("lint")
    .IsDependentOn("test")
    ;

Task("Publish")
    .IsDependentOn("copy-util")
    .IsDependentOn("version")
    .IsDependentOn("prettier")
    .IsDependentOn("build")
    .Does(() => {
        // wp .\task.js --target node --output task.wp.js --run-dev
        DeleteFiles("*.vsix");
        System.IO.File.WriteAllText("override.json", "{ \"version\": \"" + version + "\" }");
        foreach (var item in GetFiles("*vss-extension.json"))
        {
            NpmRunScript("tfx", new [] { $"extension create --manifest-globs {item.GetFilename()} --overrides-file override.json" });
            // StartProcess("npx", $"tfx extension create --manifest-globs {item.GetFilename()} --overrides-file override.json");
        }
        // foreach (var vsix in GetFiles("*.vsix"))
        // {
        //     DoProcess($"tfx extension publish --vsix {vsix.FullPath} --overrides-file override.json --share-with rocketsurgeonsguild");
        // }
    });

RunTarget(Target);
