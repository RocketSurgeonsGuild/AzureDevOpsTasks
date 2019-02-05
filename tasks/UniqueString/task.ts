import { getInput, getVariable, setVariable, warning } from 'vsts-task-lib/task';
import { uniqueString } from './uniqueString';
import { Task } from './util/Task';
import { VariableHelper } from './util/VariableHelper';

class UniqueString extends Task {
    protected async run() {
        const variableName = getInput('name', true);
        const seed = parseInt(getInput('seed', true), 10);
        const input = getInput('value', true);

        warning('Variable to save: ' + variableName);
        warning('seed: ' + seed.toString());
        warning('input: ' + input);

        const result = uniqueString(seed, input);
        setVariable(variableName, result);
    }
}

new UniqueString(new VariableHelper(getVariable)).start();
