class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
         let max = Number.NEGATIVE_INFINITY; let res = [];
        // fill to the sliding window
        for(let r=0; r<k; r++) {
            max = Math.max(max, nums[r])
        }
        res.push(max) // get first max
        let l = 1; let r = k;
        while(r<nums.length) {
            if(nums[l-1] >= max || nums[r] > max) {
                // we need to calculate new max after moving right
                const subarray = nums.slice(l,r+1).sort((a,b) => a-b)
                // console.log(l, r, subarray, res)
                max = subarray[subarray.length -1]
            }
            res.push(max)
            l++
            r++
        }

        return res
    }
}
