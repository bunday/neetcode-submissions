class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const store = new Map<number, number>()
        const result: number[] = []

        for(const num of nums) {
            store.set(num, (store.get(num) ?? 0) + 1)
        }

        const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => [])
        for(const [key, val] of store) {
            bucket[val].push(key)
        }

        for(let i=bucket.length - 1; i > -1 && result.length < k; i--) {
            for(const item of bucket[i]) {
                // if(result.length === k) break
                result.push(item)
            }
            
        }

        return result

    }
}
