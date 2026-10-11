class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {

       
        // let rows = 0
        // let lr = 0; let rr = matrix.length
        // while(lr < rr) {
        //     let midr = Math.floor((lr + rr)/ 2)
        //     const currentRow = matrix[rows]
        //     if(currentRow[0] <= target && target <= currentRow[currentRow.length-1]) {
        //         // weve found the right row, now we binary search it 
        //          let l = 0; let r = currentRow.length
        //          while(l < r) {
        //             let mid = Math.floor((l + r)/2)
        //             if(currentRow[mid] === target) {
        //                 return true
        //             } else if (target < currentRow[mid]){
        //                 r = mid
        //             } else {
        //                 l = mid + 1
        //             }
        //          }

        //     }
        //     rows++
        // }


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
