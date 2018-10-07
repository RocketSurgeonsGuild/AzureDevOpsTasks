// tslint:disable:unified-signatures

export class VariableHelper {
    public constructor(private readonly _getVariable: (key: string) => string) {}
    public getVariable(value: 'Agent.BuildDirectory'): string;
    public getVariable(value: 'Agent.DeploymentGroupId'): string;
    public getVariable(value: 'Agent.HomeDirectory'): string;
    public getVariable(value: 'Agent.Id'): string;
    public getVariable(value: 'Agent.JobName'): string;
    public getVariable(value: 'Agent.JobStatus'): string;
    public getVariable(value: 'Agent.MachineName'): string;
    public getVariable(value: 'Agent.Name'): string;
    public getVariable(value: 'Agent.ReleaseDirectory'): string;
    public getVariable(value: 'Agent.RootDirectory'): string;
    public getVariable(value: 'Agent.Version'): string;
    public getVariable(value: 'Agent.WorkFolder'): string;
    public getVariable(value: 'Build.ArtifactStagingDirectory'): string;
    public getVariable(value: 'Build.BinariesDirectory'): string;
    public getVariable(value: 'Build.BuildId'): string;
    public getVariable(value: 'Build.BuildNumber'): string;
    public getVariable(value: 'Build.BuildURI'): string;
    public getVariable(value: 'Build.BuildUri'): string;
    public getVariable(value: 'Build.Clean'): string;
    public getVariable(value: 'Build.DefinitionId'): string;
    public getVariable(value: 'Build.DefinitionName'): string;
    public getVariable(value: 'Build.DefinitionVersion'): string;
    public getVariable(value: 'Build.QueuedBy'): string;
    public getVariable(value: 'Build.QueuedById'): string;
    public getVariable(value: 'Build.Reason'): string;
    public getVariable(value: 'Build.Repository.Clean'): string;
    public getVariable(value: 'Build.Repository.Git.SubmoduleCheckout'): string;
    public getVariable(value: 'Build.Repository.LocalPath'): string;
    public getVariable(value: 'Build.Repository.Name'): string;
    public getVariable(value: 'Build.Repository.Provider'): string;
    public getVariable(value: 'Build.Repository.Tfvc.Workspace'): string;
    public getVariable(value: 'Build.Repository.Uri'): string;
    public getVariable(value: 'Build.RequestedFor'): string;
    public getVariable(value: 'Build.RequestedForEmail'): string;
    public getVariable(value: 'Build.RequestedForID'): string;
    public getVariable(value: 'Build.RequestedForId'): string;
    public getVariable(value: 'Build.SourceBranch'): string;
    public getVariable(value: 'Build.SourceBranchName'): string;
    public getVariable(value: 'Build.SourceTfvcShelveset'): string;
    public getVariable(value: 'Build.SourceVersion'): string;
    public getVariable(value: 'Build.SourcesDirectory'): string;
    public getVariable(value: 'Build.StagingDirectory'): string;
    public getVariable(value: 'Build.TriggeredBy.BuildDefinitionName'): string;
    public getVariable(value: 'Build.TriggeredBy.BuildId'): string;
    public getVariable(value: 'Build.TriggeredBy.BuildNumber'): string;
    public getVariable(value: 'Build.TriggeredBy.DefinitionId'): string;
    public getVariable(value: 'Build.TriggeredBy.ProjectID'): string;
    public getVariable(value: 'Build.Type'): string;
    public getVariable(value: 'Common.TestResultsDirectory'): string;
    public getVariable(value: 'Release.AttemptNumber'): string;
    public getVariable(value: 'Release.DefinitionEnvironmentId'): string;
    public getVariable(value: 'Release.DefinitionId'): string;
    public getVariable(value: 'Release.DefinitionName'): string;
    public getVariable(value: 'Release.Deployment.RequestedFor'): string;
    public getVariable(value: 'Release.Deployment.RequestedForId'): string;
    public getVariable(value: 'Release.EnvironmentId'): string;
    public getVariable(value: 'Release.EnvironmentName'): string;
    public getVariable(value: 'Release.EnvironmentUri'): string;
    public getVariable(value: 'Release.ReleaseDescription'): string;
    public getVariable(value: 'Release.ReleaseId'): string;
    public getVariable(value: 'Release.ReleaseName'): string;
    public getVariable(value: 'Release.ReleaseUri'): string;
    public getVariable(value: 'Release.RequestedFor'): string;
    public getVariable(value: 'Release.RequestedForId'): string;
    public getVariable(value: 'System.AccessToken'): string;
    public getVariable(value: 'System.ArtifactsDirectory'): string;
    public getVariable(value: 'System.CollectionId'): string;
    public getVariable(value: 'System.Debug'): string;
    public getVariable(value: 'System.DefaultWorkingDirectory'): string;
    public getVariable(value: 'System.DefinitionId'): string;
    public getVariable(value: 'System.HostType'): string;
    public getVariable(value: 'System.PullRequest.IsFork'): string;
    public getVariable(value: 'System.PullRequest.PullRequestId'): string;
    public getVariable(value: 'System.PullRequest.PullRequestNumber'): string;
    public getVariable(value: 'System.PullRequest.SourceBranch'): string;
    public getVariable(value: 'System.PullRequest.SourceRepositoryURI'): string;
    public getVariable(value: 'System.PullRequest.TargetBranch'): string;
    public getVariable(value: 'System.TeamFoundationCollectionUri'): string;
    public getVariable(value: 'System.TeamFoundationServerUri'): string;
    public getVariable(value: 'System.TeamProject'): string;
    public getVariable(value: 'System.TeamProjectId'): string;
    public getVariable(value: 'System.WorkFolder'): string;

    public getVariable(value: 'GitVersion.Major'): string;
    public getVariable(value: 'GitVersion.Minor'): string;
    public getVariable(value: 'GitVersion.Patch'): string;
    public getVariable(value: 'GitVersion.PreReleaseTag'): string;
    public getVariable(value: 'GitVersion.PreReleaseTagWithDash'): string;
    public getVariable(value: 'GitVersion.PreReleaseLabel'): string;
    public getVariable(value: 'GitVersion.PreReleaseNumber'): string;
    public getVariable(value: 'GitVersion.BuildMetaData'): string;
    public getVariable(value: 'GitVersion.BuildMetaDataPadded'): string;
    public getVariable(value: 'GitVersion.FullBuildMetaData'): string;
    public getVariable(value: 'GitVersion.MajorMinorPatch'): string;
    public getVariable(value: 'GitVersion.SemVer'): string;
    public getVariable(value: 'GitVersion.LegacySemVer'): string;
    public getVariable(value: 'GitVersion.LegacySemVerPadded'): string;
        public getVariable(value: 'GitVersion.AssemblySemVer'): string;
    public getVariable(value: 'GitVersion.AssemblySemFileVer'): string;
    public getVariable(value: 'GitVersion.FullSemVer'): string;
    public getVariable(value: 'GitVersion.InformationalVersion'): string;
    public getVariable(value: 'GitVersion.BranchName'): string;
    public getVariable(value: 'GitVersion.Sha'): string;
    public getVariable(value: 'GitVersion.NuGetVersionV2'): string;
    public getVariable(value: 'GitVersion.NuGetVersion'): string;
    public getVariable(value: 'GitVersion.NuGetPreReleaseTagV2'): string;
    public getVariable(value: 'GitVersion.NuGetPreReleaseTag'): string;
    public getVariable(value: 'GitVersion.CommitsSinceVersionSource'): string;
    public getVariable(value: 'GitVersion.CommitsSinceVersionSourcePadded'): string;
    public getVariable(value: 'GitVersion.CommitDate'): string;
    public getVariable(value: string): string;
    public getVariable(value: string) {
        return this._getVariable(value);
    }

    public getArtifactVariable(alias: string, value: 'BuildId'): string;
    public getArtifactVariable(alias: string, value: 'BuildNumber'): string;
    public getArtifactVariable(alias: string, value: 'BuildURI'): string;
    public getArtifactVariable(alias: string, value: 'DefinitionId'): string;
    public getArtifactVariable(alias: string, value: 'DefinitionName'): string;
    public getArtifactVariable(alias: string, value: 'Repository.Provider'): string;
    public getArtifactVariable(alias: string, value: 'RequestedFor'): string;
    public getArtifactVariable(alias: string, value: 'RequestedForID'): string;
    public getArtifactVariable(alias: string, value: 'SourceBranch'): string;
    public getArtifactVariable(alias: string, value: 'SourceBranchName'): string;
    public getArtifactVariable(alias: string, value: 'SourceVersion'): string;
    public getArtifactVariable(alias: string, value: 'Type'): string;
    public getArtifactVariable(alias: string, value: string) {
        return this._getVariable(`Release.Artifacts.${alias}.${value}`);
    }

    public getEnvironmentStatus(name: string) {
        return this._getVariable(`Release.Environments.${name}.Status`);
    }
}
