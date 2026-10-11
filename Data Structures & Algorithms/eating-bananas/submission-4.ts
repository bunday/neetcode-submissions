class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1; let r = Math.max(...piles)
        while(l < r) {
            let rate = Math.floor((l+r)/2)
            let time = 0
            for(const pile of piles) {
                const timeTaken = Math.ceil(pile / rate)
                time += timeTaken
                if (time > h) break
            }
            if(time <= h) {
                r = rate
            } else {
                l = rate + 1
            }
        }

        return l
    }
}
