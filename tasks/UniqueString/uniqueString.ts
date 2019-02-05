// tslint:disable:no-var-requires no-require-imports no-magic-numbers
// tslint:disable:no-parameter-reassignment
const base32 = require('base32-encode');
const murmurhash3js = require('murmurhash3js');
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');
        if (this.length >= targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search: any, pos: any) {
            pos = !pos || pos < 0 ? 0 : +pos;
            return this.substring(pos, pos + search.length) === search;
        },
    });
}

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
    return result.padStart(7, '0'); //?
}
