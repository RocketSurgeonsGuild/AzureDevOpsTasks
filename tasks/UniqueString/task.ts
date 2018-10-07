import { getInput, getVariable, setVariable } from 'vsts-task-lib/task';
import { uniqueString } from './uniqueString';
import { Task } from './util/Task';
import { VariableHelper } from './util/VariableHelper';

class UniqueString extends Task {
    protected async run() {
        const variableName = getInput('name', true);
        const result = uniqueString(getInput('value', true));

        setVariable(variableName, result);
    }
}

new UniqueString(new VariableHelper(getVariable)).start();
