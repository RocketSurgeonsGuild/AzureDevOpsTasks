import { uniqueString } from './uniqueString';

describe('uniqueString', () => {
    it('should work with a single string', () => {
        expect(uniqueString('abcd')).toBe('nvz1js0');
    });
    it('should work with an array', () => {
        expect(uniqueString(...['a', 'b', 'c', 'd'])).toBe('y7ms1d0');
    });
    it('should work with a single string', () => {
        expect(uniqueString(10000, 'abcd')).toBe('mhqte80');
    });
    it('should work with an array', () => {
        expect(uniqueString(123456789, ...['a', 'b', 'c', 'd'])).toBe('fy8j2kg');
    });
    describe('known failing strings...', () => {
        it('update-again', () => {
            expect(uniqueString(`update-again.ReadySelect.Development`)).toBe('0t1bzb8');
            expect(uniqueString(`update-again.ReadySelect.Development`.toLowerCase())).toBe('nrd6n3r');
        });
        it('nuxt-ts', () => {
            expect(uniqueString(`nuxt-ts. ReadySelect.Development.Linux`)).toBe('047m898');
            expect(uniqueString(`nuxt-ts. ReadySelect.Development.Linux`.toLowerCase())).toBe('7g1zbm0');
        });
        it('nuxt-ts2', () => {
            expect(uniqueString(`nuxt-ts.ReadySelect.Development.Linux`)).toBe('d29vvmg');
            expect(uniqueString(`nuxt-ts.ReadySelect.Development.Linux`.toLowerCase())).toBe('f4tx0jg');
        });
        it('master.ReadySelect.Development.Linux', () => {
            expect(uniqueString(`master.ReadySelect.Development.Linux`)).toBe('05w77q8');
            expect(uniqueString(`master.ReadySelect.Development.Linux`.toLowerCase())).toBe('yxq5rcr');
        });
    });
});
