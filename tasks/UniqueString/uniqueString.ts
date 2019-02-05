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

    console.log('values: ' + values.join(','));
    const hash = murmurhash3js.x86.hash32(values.join(','), seed);
    console.log('hash: ' + hash);
    let hashStr = hash.toString(16);
    hashStr = hashStr.padStart(Math.ceil(hashStr.length / 2) * 2, '0');
    //Math.max(15/2)
    console.log('hashStr: ' + hashStr);
    let result = base32(Buffer.from(hashStr, 'hex'), 'Crockford').toLowerCase();
    while (result.startsWith('0')) result = result.substring(1);
    return result.padStart(7, '0') //?
}
