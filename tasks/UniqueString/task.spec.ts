// tslint:disable:no-magic-numbers no-unused-expression
import { join } from 'path';
import { MockTestRunner } from 'vsts-task-lib/mock-test';

describe('Task', () => {
    describe('UniqueString', () => {
        it('should return a unique value', () => {
            jest.setTimeout(1000);

            const path = join(__dirname, 'tests/pass.test.js');
            const test = new MockTestRunner(path);

            test.run();

            test; /* ? */
            expect(test.failed).toBeFalsy();
            expect(test.warningIssues.length).toBe(0);
            expect(test.errorIssues.length).toBe(0);
            expect(test.stdOutContained('variable=HelloWorld')).toBeTruthy();
            expect(test.stdOutContained(']nvz1js0')).toBeTruthy();
        });
    });
});
