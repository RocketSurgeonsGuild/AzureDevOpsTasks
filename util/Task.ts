import { setResult, TaskResult } from 'vsts-task-lib/task';
import { VariableHelper } from './VariableHelper';

export abstract class Task {
    public constructor(protected readonly variable: VariableHelper) {

    }
    public async start() {
        try {
            await this.run();
        } catch (e) {
            setResult(TaskResult.Failed, e.toString());
        }
    }

    protected abstract run(): Promise<void>;
}
