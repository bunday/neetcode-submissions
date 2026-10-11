class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {

       
        let rows = 0
        while(rows < matrix.length) {
            const currentRow = matrix[rows]
            if(currentRow[0] <= target && target <= currentRow[currentRow.length-1]) {
                // weve found the right row, now we binary search it 
                 let l = 0; let r = currentRow.length
                 while(l < r) {
                    let mid = Math.floor((l + r)/2)
                    if(currentRow[mid] === target) {
                        return true
                    } else if (target < currentRow[mid]){
                        r = mid
                    } else {
                        l = mid + 1
                    }
                 }

            }
            rows++
        }

        return false
    }
}
