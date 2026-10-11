class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let l=0; let r = (matrix.length * matrix[0].length)

        while (l < r) {
            let mid = Math.floor((l+r)/2)
            const cols = matrix[0].length
            let row = Math.floor(mid/cols)
            let col = Math.floor(mid%cols)
            if(matrix[row][col] === target) return true 
            else if(target < matrix[row][col]) r = mid 
            else l = mid + 1
        }

        return false
    }
}
