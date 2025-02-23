/*
Xiaowan.ts by Alyx Shang.
Licensed under the FSL v1.
*/

/**
 * Reverses the order of the characters in the 
 * supplied string and returns the resulting string.
 * @param {string} subject A string to be reversed.
 * @returns {string} Returns the reversed string.
 */
export function reverseString(
    subject: string,
): string {
    const chars: Array<string> = subject.split('');
    const result: Array<string> = [];
    for (let i = chars.length; i >= 0;i--){
        result.push(chars[i]);
    }
    const res: string = result.join('');
    return res;
}

/**
 * Converts a number of any base to a number of 
 * base 10, given that base's valid digits.
 * @param {string} subject The number of any base.
 * @param {number} base The base the supplied number is in.
 * @param {Array<string>} alphabet The valid digits for that base.
 * @returns {number} Returns the number of base 10.
 */
export function baseToDec(
    subject: string,
    base: number,
    alphabet: Array<string>
): number {
    let sum: number = 0;
    const reversed = reverseString(subject);
    const chars: Array<string> = reversed.split('');
    for (let i: number = 0; i < chars.length; i++){
        for (let x: number = 0;  x < alphabet.length; x++){
            if (chars[i] === alphabet[x]){
                const times: number = parseInt(alphabet[x]);
                sum += ((Math.pow(base,i)) * times)
            }
            else {
                // Do nothing.
            }
        }
    }
    return sum;
}

/**
 * Converts a number of base 10 to a number of 
 * the supplied base, given that base's valid digits.
 * @param {number} subject The number of base 10.
 * @param {number} base The base for the target number.
 * @param {Array<string>} alphabet The valid digits for that base.
 * @returns {string} Returns the number in the desired base.
 */
export function decToBase(
    subject: number,
    base: number,
    alphabet: Array<string>
): string {
    const result: Array<string> = [];
    while (subject / base != 0){
        const to_push: string = alphabet[subject % base];
        result.push(to_push);
        subject = Math.floor(subject / base);
    }
    const res: string = result.join('');
    return res;
}

/**
 * Checks if a number of any base is indeed of the 
 * that base, given the base's valid digits.
 * @param {string} subject The number of any base.
 * @param {Array<string>} alphabet The valid digits for that base.
 * @returns {boolean} Returns `true` or `false` depending on whether
 * the supplied number is in that base.
 */
export function isBase(
    subject: string,
    alphabet: Array<string>
): boolean {
   let result: boolean = true;
   for (let i: number = 0; i < subject.split('').length; i++){
    if (alphabet.includes(subject.split('')[i])){
        // Do nothing.
    }
    else {
        result = false;
    }
   }
   return result;
}

// Exports all
// functions.
export default {
    isBase,
    decToBase,
    baseToDec,
    reverseString
};
