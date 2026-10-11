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
		// while(str.length > 0) {
		// 	let currentWord = str.split('#')[0]
		// 	const index = str.indexOf(currentWord)
		// 	const prefix = index + currentWord.length + 1 // takes care of the number and the #
		// 	const length = Number(currentWord)+prefix
		// 	const word = str.substring(prefix, Number(currentWord)+prefix)
		// 	// decoded.push(word)
		// 	str = str.substring(length)
		// }
		let cursor = 0;
		while(cursor < str.length) {
			let currentBreak = str.indexOf('#', cursor)
			const wordLength = Number(str.substring(cursor, currentBreak))
			const start = currentBreak + 1
			const word = str.substring(start, start + wordLength)
			cursor = start + wordLength    
			decoded.push(word)
		}
		
		
		return decoded
	}
}
