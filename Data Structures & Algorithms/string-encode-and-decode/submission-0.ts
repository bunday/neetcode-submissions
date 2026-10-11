class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
		let encoded = ""

		for(const str of strs) {
			encoded+=str.length+"#"+str
		}
		return encoded
	}

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
		let decoded: string[] = []
		while(str.length > 0) {
			let currentWord = str.split('#')[0]
			console.log(currentWord)
			const index = str.indexOf(currentWord)
			console.log(currentWord, index)
			const prefix = index + currentWord.length + 1 // takes care of the number and the #
			const length = Number(currentWord)+prefix
			const word = str.substring(prefix, Number(currentWord)+prefix)
			console.log(prefix, word)
			decoded.push(word)
			str = str.substring(length)
		}
		
		return decoded
	}
}
