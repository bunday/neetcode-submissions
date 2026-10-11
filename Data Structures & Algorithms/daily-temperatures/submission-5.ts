class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const queue = new Array<number>()
        const res = new Array(temperatures.length).fill(0)

        let cursor = 0

        // while(cursor >= 0) {
        //     const currentTemp = temperatures[cursor]
        //     if(head === -1) {
        //         head++
        //         queue[head] = cursor
        //     } else {
        //         if(temperatures[queue[head]] > currentTemp) {
        //             res[cursor] =  queue[head] - cursor
        //             head++
        //             queue[head] = cursor
        //         } else {
        //             while(head >= 0 && temperatures[queue[head]] <= currentTemp) {
        //                 console.log(temperatures[queue[head]], currentTemp, queue[head], head)
        //                 head--
        //             }
        //             // console.log(queue, head, cursor)
        //             if(head >= 0) {
        //                 res[cursor] =  queue[head] - cursor
        //             }

        //             head++
        //             queue[head] = cursor
        //         }
        //     }
        //     cursor--
        // }

        while(cursor < temperatures.length) {
             const currentTemp = temperatures[cursor]
             while(temperatures.length > 0 && temperatures[queue[queue.length - 1]] < currentTemp) {
                        const val = queue.pop()
                        res[val] = cursor-val
                    
                }
                queue.push(cursor)
        cursor++

        }


        return res
    }
}
