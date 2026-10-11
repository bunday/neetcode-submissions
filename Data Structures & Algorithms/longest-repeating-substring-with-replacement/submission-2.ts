class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0; let r = 0; const seen = new Map<string, number>(); let len = 0;
        while(r<s.length) {
            seen.set(s[r], (seen.get(s[r]) ?? 0) + 1)
            let need = (r-l+1) - Math.max(...seen.values())
            while(need > k) {
                seen.set(s[l], seen.get(s[l]) -1)
                l++
                need = (r-l+1) - Math.max(...seen.values())
            }
            len = Math.max(len, r-l+1)
            r++
            
        }
        
        

        return len
    }
}
