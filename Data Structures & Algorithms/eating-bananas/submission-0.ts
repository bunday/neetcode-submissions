class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        piles.sort((a,b) => a-b)
        let l = 1; let r = piles[piles.length - 1]
        let min = r
        while(l < r) {
            let rate = Math.floor((l+r)/2)
            let time = 0
            for(const pile of piles) {
                const whole = Math.floor(pile/rate)
                const remainder = Math.floor(pile%rate)
                time += whole
                if(remainder > 0) time++
                if(time > h) continue
            }
            if(time <= h) {
                min = Math.min(min, rate)
                r = rate
            } else {
                l = rate + 1
            }
        }

        return min
    }
}
