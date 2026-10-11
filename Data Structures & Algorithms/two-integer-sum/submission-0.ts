class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const store = new Map<number, number>()

        for(let i=0; i<nums.length; i++) {
            const remainder = target - nums[i]
            if(store.has(remainder)) {
                return [store.get(remainder), i]
            }else {
                store.set(nums[i], i)
            }
        }
    }
}
