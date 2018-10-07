import { join } from 'path';
import { TaskMockRunner } from 'vsts-task-lib/mock-run';

const tp = join(__dirname, '../task.js');
const tmr = new TaskMockRunner(tp);

tmr.setInput('value', 'abcd');
tmr.setInput('name', 'HelloWorld');
tmr.setInput('seed', '1337');
tmr.setAnswers({});

tmr.run();
