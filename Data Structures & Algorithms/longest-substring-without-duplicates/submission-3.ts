class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const seen = new Set<string>()
        let l = 0; let r = 0; let len = 0;
        
        while(r < s.length) {
            const currentChar = s[r]
            // we need to keep removing till things are unique
            while(seen.has(currentChar)) {
                const leftChar = s[l]
                seen.delete(leftChar)
                l++
            }
            seen.add(currentChar)
            r++
            len = Math.max(len, (r-l))
            
        }
        return len
    }
}
