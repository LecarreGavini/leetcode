var target = 26;
var nums = [2, 7, 11, 15];

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var i = 0;
    var sum = 0;
    var indicesArrayToSumTarget = getNumberOfAddens(2);
    var newNums = reduceArrayDataWithTarget(nums, target);

    while (indicesArrayToSumTarget[0] < newNums.length) {
        if (indicesArrayToSumTarget[1] < newNums.length) {
            sum = newNums[indicesArrayToSumTarget[0]] + newNums[indicesArrayToSumTarget[1]];
            if (sum == target) {
                break;
            }
            indicesArrayToSumTarget[1]++;
        } else {
            indicesArrayToSumTarget[0]++;
            indicesArrayToSumTarget[1] = 0;
        }
    }

    return indicesArrayToSumTarget;
};

console.log(twoSum(nums, target));


/**
 * @param {number} noOfAddends
 * @return {number[]}
 */
function getNumberOfAddens(noOfAddends) {
    var i = 0;
    var indicesArray = [];
    while (i < noOfAddends) {
        indicesArray.push(i);
        i++;
    }

    return indicesArray;
}

/** 
 * @param {number[]} nums 
 * @param {number} target
 * @return {number[]} 
 */
function reduceArrayDataWithTarget(nums, target) {
    var i = 0;
    var numsValueLessThanTarget = [];
    while (i < nums.length) {
        if (nums[i] < target) numsValueLessThanTarget.push(nums[i]);
        i++;
    }
    return numsValueLessThanTarget;
}