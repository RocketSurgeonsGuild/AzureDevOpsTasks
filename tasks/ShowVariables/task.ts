import { padStart, orderBy, padEnd } from 'lodash';
import { getVariable, getVariables } from 'vsts-task-lib/task';
import { Task } from './util/Task';
import { VariableHelper } from './util/VariableHelper';

class ShowVariables extends Task {
    protected async run() {
        const variables = getVariables();
        const maxSize = variables.reduce((acc, x) => (x.name.length > acc ? acc : x.name.length), 0) + 2;
        console.log('========== Variables ==========');
        orderBy(variables, x => x.name).forEach(({ name, value }) => {
            console.log(`${padEnd(name, maxSize, ' ')}: ${value}`);
        });
    }
}

new ShowVariables(new VariableHelper(getVariable)).start();
