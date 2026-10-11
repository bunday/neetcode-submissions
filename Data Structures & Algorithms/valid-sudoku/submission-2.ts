class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowset = Array.from({ length: board.length }, () => new Set<string>())
        const colset = Array.from({ length: board[0].length }, () => new Set<string>())
        const gridset = new Map<string, Set<string>>()
        for(let i=0; i< board.length; i++) {
            for(let j=0; j<board[i].length; j++) {
                const current = board[i][j]
                if(current === '.') continue
                const currentRow = rowset[i]
                const currentCol = colset[j]
                const gridIndex = Math.floor(i/3)+"-"+Math.floor(j/3)
                const currentGrid = gridset.get(gridIndex) ?? new Set<string>()
                if(currentRow.has(current) || currentCol.has(current) || currentGrid.has(current)) {
                    return false
                }
                currentRow.add(current)
                currentCol.add(current)
                currentGrid.add(current)
                gridset.set(gridIndex, currentGrid)
            }
        }

        return true
    }
}
