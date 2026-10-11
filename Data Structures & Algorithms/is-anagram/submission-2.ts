class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const store = new Map<string, number>()
        // if(s.length !== t.length) return false

        for (const ch of s) {
            store.set(ch, (store.get(ch) ?? 0)+1 )
        }

        for (const ch of t) {
            if(!store.get(ch)) return false
            store.set(ch, (store.get(ch) ?? 0)-1 )
        }

        for(const val of store.values()) {
            if(val !== 0) {
                return false
            }
        }

        console.log(store)
        return true
    }
}
