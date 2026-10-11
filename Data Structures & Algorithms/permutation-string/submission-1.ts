class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const map = new Map<string, number>()
        for(const char of s1) {
            map.set(char, (map.get(char) ?? 0)+1 )
        }

        
        let index=0; let rightIndex = 0
        while(index<s2.length) {
            let curr = s2[index]
            let copymap = new Map(map)
            let res = false
            rightIndex = index
            while(copymap.has(curr) && copymap.get(curr) > 0) {
                
                copymap.set(curr, copymap.get(curr)-1)
                console.log(index, rightIndex, rightIndex - index + 1)
                if(rightIndex - index + 1 === s1.length) {
                    res = true
                    return res
                }
                rightIndex++
                curr = s2[rightIndex]
            }
            if(res) return res
            index++
        }
        return false
    }
}
