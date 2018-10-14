import { readFileSync } from 'fs';
import { findMatch, getInput, getVariable, setVariable, VariableInfo } from 'vsts-task-lib/task';
import { Task } from './util/Task';
import { VariableHelper } from './util/VariableHelper';

class DeserializeVariables extends Task {
    protected async run() {
        const jsonfiles = getInput('jsonfiles', true);

        const files = findMatch(this.variable.getVariable('Agent.ReleaseDirectory'), jsonfiles);
        console.log('files: ', files);

        for (let file of files) {
            const content = readFileSync(file).toString();
            const variables = JSON.parse(content) as VariableInfo[];
            for (let variable of variables) {
                console.log(variable.name, variable.value);
                setVariable(variable.name, variable.value);
            }
        }
    }
}

new DeserializeVariables(new VariableHelper(getVariable)).start();
