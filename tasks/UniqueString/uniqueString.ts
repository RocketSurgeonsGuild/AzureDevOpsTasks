// tslint:disable:no-var-requires no-require-imports no-magic-numbers
// tslint:disable:no-parameter-reassignment
const base32 = require('base32-encode');
const murmurhash3js = require('murmurhash3js');

export function uniqueString(seed: number, ...values: string[]): string;
export function uniqueString(...values: string[]): string;
export function uniqueString(seed: number | string, ...values: string[]) {
    if (typeof seed === 'string') {
        values = [seed, ...values];
        seed = 1337;
    }
    const hash = murmurhash3js.x86.hash32(values.join(','), seed);

    return base32(Buffer.from(hash.toString(16), 'hex'), 'Crockford').toLowerCase();
}
