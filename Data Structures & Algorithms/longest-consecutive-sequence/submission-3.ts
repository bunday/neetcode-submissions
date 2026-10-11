class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums)
        if(nums.length < 2) return nums.length

        let longest = 1
        for(const elem of set) {
            if(!set.has(elem-1)) {
                let current = elem
                while(set.has(current)) {
                    current++
                }
                console.log(elem, current)
                longest = Math.max(longest, current-elem)
            }
            
        }
        return longest
    }
}
