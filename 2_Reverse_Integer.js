/**
 * Given a 32-bit signed integer, reverse digits of an integer.
Input: 123
Output: 321

Input: -123
Output: -321

Input: 120
Output: 21
 */

var reverse = function(x) {
    var out = 0
    var k = x < 0 ? -1 : 1
    while (x !== 0) {
        let pop = Math.abs(x) % 10
        x = parseInt(x/10)
        out = out * 10 + pop
    }
    var result = out * k 
    return result > 2147483648 || result < -2147483648 ? 0 : out * k
 };


