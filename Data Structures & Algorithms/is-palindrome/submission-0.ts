class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s=s.trim().replace(/\s/g, "").toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
        console.log(s)
        for(let i=0; i<s.length/2; i++) {
            let j = s.length - 1 - i
            if(s.charAt(i) !== s.charAt(j)) {
                console.log(s.charAt(i), s.charAt(j), i, j)
                return false
            }
        }

        return true
    }
}
