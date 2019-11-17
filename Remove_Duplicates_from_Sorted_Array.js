/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return
    var i = 0
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1    
};

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))
console.log(nums)