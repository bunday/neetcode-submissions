class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums)

        let longest = 0
        for(const elem of set) {
            if(!set.has(elem-1)) {
                let current = elem
                while(set.has(current)) {
                    current++
                }
                longest = Math.max(longest, current-elem)
            }
            
        }
        return longest
    }
}
