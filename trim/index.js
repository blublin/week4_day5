/* 
Given a string that may have extra spaces at the start and the end,
return a new string that has the extra spaces at the start and the end trimmed (removed)
do not remove any other spaces.
*/

const str1 = " \n \t  hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */

function trim(str) {
    var sInd = 0;
    var eInd = str.length - 1;
    while( str[sInd] == false) {
        sInd++;
        // counting up whitespace from index 0 until we reach a character
    }
    console.log(str[sInd])

    while( str[eInd] == false) {
        eInd--;
        // counting down whitespace from index str.length-1 until we reach a character
    }
    eInd++;
    console.log(str[eInd])

    retStr = str.slice(sInd, eInd)
    return retStr
}
console.log(trim(str1))
