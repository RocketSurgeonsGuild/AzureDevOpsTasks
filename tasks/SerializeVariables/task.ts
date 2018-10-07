import { mkdir, writeFile } from 'fs';
import { join } from 'path';
import { bindNodeCallback } from 'rxjs';
import { command, getInput, getVariable, getVariables } from 'vsts-task-lib/task';
import { Task } from './util/Task';
import { VariableHelper } from './util/VariableHelper';

class SerializeVariables extends Task {
    protected async run() {
        const filenameValue = getInput('filename', true);
        const artifactName = getInput('artifactName', true);
        const prefixValue = getInput('prefixes', true);
        const prefixes = prefixValue.toLowerCase().split(',');
        const variables = getVariables()
            .filter(x => !x.secret)
            .filter(x => prefixes.some(prefix => x.name.toLowerCase().startsWith(prefix)));

        const artifactDirectory = this.variable.getVariable('Build.ArtifactStagingDirectory');
        const folder = artifactName.replace(/\{prefixes\}/ig, prefixValue.split(',').join('-'));
        const metaPath = join(artifactDirectory, folder);
        const metaFilePath = join(metaPath, filenameValue);

        await bindNodeCallback(mkdir)(metaPath).toPromise();
        await bindNodeCallback(writeFile)(metaFilePath, JSON.stringify(variables)).toPromise();

        const data = {
            artifacttype: 'container',
            artifactname: folder,
            containerfolder: folder,
            localpath: metaPath,
        };

        command('artifact.upload', data, metaPath);
    }
}

new SerializeVariables(new VariableHelper(getVariable)).start();
