import { dirname } from 'path';
import { getPathInput, mkdirP, writeFile } from 'vsts-task-lib';
import { command, getBoolInput, getInput, getVariable, getVariables } from 'vsts-task-lib/task';
import { Task } from './util/Task';
import { VariableHelper } from './util/VariableHelper';

class SerializeVariables extends Task {
    protected async run() {
        const filenameValue = getPathInput('filename', true);
        const publishArtifact = getBoolInput('publishArtifact', true);
        const prefixValue = getInput('prefixes', true);

        const prefixes = prefixValue.toLowerCase().split(',');
        const variables = getVariables()
            .filter(x => !x.secret)
            .filter(x => prefixes.some(prefix => x.name.toLowerCase().startsWith(prefix)));

        const metaFilePath = filenameValue.replace(/\{prefixes\}/gi, prefixValue.split(',').join('-'));
        const metaPath = dirname(metaFilePath);

        console.log(`Creating directories for ${metaPath}`);
        mkdirP(metaPath);

        console.log(`Writing metadata out to ${metaFilePath}`);
        writeFile(metaFilePath, JSON.stringify(variables));

        if (publishArtifact) {
            const artifactName = getInput('artifactName', true).replace(
                /\{prefixes\}/gi,
                prefixValue.split(',').join('-')
            );
            const data = {
                artifacttype: 'container',
                artifactname: artifactName,
                containerfolder: artifactName,
                localpath: metaPath,
            };

            command('artifact.upload', data, metaPath);
        }
    }
}

new SerializeVariables(new VariableHelper(getVariable)).start();
