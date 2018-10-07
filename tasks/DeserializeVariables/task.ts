import { readFile } from 'fs';
import { bindNodeCallback, from } from 'rxjs';
import { map, mergeAll, tap } from 'rxjs/operators';
import { findMatch, getInput, getVariable, setVariable, VariableInfo } from 'vsts-task-lib/task';
import { Task } from './util/Task';
import { VariableHelper } from './util/VariableHelper';

class DeserializeVariables extends Task {
    protected async run() {
        const jsonfiles = getInput('jsonfiles', true);

        const files = findMatch(this.variable.getVariable('Agent.ReleaseDirectory'), jsonfiles);
        const rf = bindNodeCallback(readFile);
        console.log('files: ', files);
        await from(files)
            .pipe(
                map(rf),
                mergeAll(),
                map(item => JSON.parse(item.toString()) as VariableInfo[]),
                mergeAll(),
                tap(x => console.log(x.name, x.value))
            )
            .forEach(item => {
                setVariable(item.name, item.value);
            });
    }
}

new DeserializeVariables(new VariableHelper(getVariable)).start();
