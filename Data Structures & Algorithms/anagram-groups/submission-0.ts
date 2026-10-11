class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = new Map<string, string[]>()

        for(const str of strs) {
            const strMap = new Map<string, number>()
            for(const ch of str) {
                strMap.set(ch, (strMap.get(ch) ?? 0)+1 )
            }
            let key = ""
            let keyMap = [...strMap.keys()].sort((a,b) => a.localeCompare(b))
            for(const k of keyMap) {
                key += k+""+strMap.get(k)
            }
            const current = res.get(key) ?? []
            current.push(str)
            res.set(key,current)
        }

        return [...res.values()]
    }
}
