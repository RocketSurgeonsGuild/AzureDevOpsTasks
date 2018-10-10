import {
    getEndpointAuthorization,
    getEndpointUrl,
    getInput,
    getPathInput,
    getVariable,
    setVariable,
} from 'vsts-task-lib/task';
import { Task } from './util/Task';
import { VariableHelper } from './util/VariableHelper';

class ShowVariables extends Task {
    protected async run() {
        const endpointName = getPathInput('name', true);
        const prefix = getInput('prefix', true);

        const endpointUrl = getEndpointUrl(endpointName, true);
        const endpointAuthorization = getEndpointAuthorization(endpointName, true);

        if (endpointUrl) {
            const variableName = `${prefix}.Url`;
            setVariable(variableName, endpointUrl);
            console.log(`${variableName}: ${endpointUrl}`);
        }
        if (endpointAuthorization) {
            if (endpointAuthorization.scheme) {
                const variableName = `${prefix}.Authorization.Scheme`;
                setVariable(variableName, endpointAuthorization.scheme);
                console.log(`${variableName}: ${endpointAuthorization.scheme}`);
            }
            if (endpointAuthorization.parameters) {
                for (const [key, value] of Object.entries(endpointAuthorization.parameters)) {
                    const variableName = `${prefix}.Authorization.${key}`;
                    setVariable(variableName, value, true);
                    console.log(`${variableName}: ${value}`);
                }
            }
        }
    }
}

new ShowVariables(new VariableHelper(getVariable)).start();
