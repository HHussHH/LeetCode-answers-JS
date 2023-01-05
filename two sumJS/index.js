const nums = [11, 7, 2, 15];
const target = 9;


// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i]+nums[i + 1] === target) {
//             return [i, i + 1];
//         }
//     }
// }

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

twoSum(nums, target)


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target)
//                 return [i, j];
//         }
//     }

// };