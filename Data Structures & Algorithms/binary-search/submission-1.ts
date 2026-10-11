class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0; let r = nums.length; let mid = 0
        while(l < r) {
            mid = Math.floor((l+r) / 2)
            if(target === nums[mid]) {
                return mid
            } else if (target < nums[mid]) {
                r = mid
            } else {
                l = mid+1
            }
        }
        return -1
    }
}
