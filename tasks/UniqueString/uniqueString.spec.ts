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
});
