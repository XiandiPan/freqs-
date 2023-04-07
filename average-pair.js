"use strict";

/** averagePair takes sorted array (nums) and number (targetAvg) and returns
 *  if there is a pair of numbers in nums whose average is targetAvg
 *
 * averagePair([1, 2, 3], 2.5);         // true
 * averagePair([3, 3, 6, 12, 19], 8);   // false
 * averagePair([1, 2, 3], 2);           // true
 * averagePair([], 4);                  // false
 */
function averagePair(nums, targetAvg) {
  // assign left and right pointers
  let left = 0;
  let right = nums.length - 1;

  // while left < right
  while (left < right) {
    // calculate avg
    const avgCheck = (nums[left] + nums[right]) / 2;

    // avg === targetAvg => return true
    if (avgCheck === targetAvg) {
      return true;
      // avg > targetAvg => right--
    } else if (avgCheck > targetAvg) {
      right--;
      // avg < targetAvg => left++
    } else if (avgCheck < targetAvg) {
      left++;
    }
  }

  return false;
}