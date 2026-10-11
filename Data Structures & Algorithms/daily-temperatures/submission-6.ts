class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const queue = new Array<number>()
        const res = new Array(temperatures.length).fill(0)

        let cursor = temperatures.length - 1

        while(cursor >= 0) {
            while(queue.length > 0 && temperatures[queue[queue.length-1]] <= temperatures[cursor]){
                queue.pop()
            }
            if (queue.length > 0) {
                res[cursor] = queue[queue.length - 1] - cursor
            }
            queue.push(cursor)
        
            cursor--
        }

    

        return res
    }
}
