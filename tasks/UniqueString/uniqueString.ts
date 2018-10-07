// tslint:disable:no-var-requires no-require-imports no-magic-numbers
const base32 = require('base32-encode');
const murmurhash3js = require('murmurhash3js');

export function uniqueString(...values: string[]) {
    const hash = murmurhash3js.x86.hash32(values.join(','), 1337);

    return base32(Buffer.from(hash.toString(16), 'hex'), 'Crockford').toLowerCase();
}
