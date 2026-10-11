class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack: number[][] = []
        let maxArea = 0
        let i = 0
        while(i < heights.length) {
            let start = i

            while(stack.length > 0 && stack[stack.length-1][1] > heights[i]) {
                const [index, height] = stack.pop()
                maxArea = Math.max(maxArea, height * (i - index))
                start = index
            }
            stack.push([start, heights[i]])

            
            i++
        }
        for (const [index, height] of stack) {
        maxArea = Math.max(maxArea, height * (heights.length - index))
    }
        

        return maxArea
    }
}
