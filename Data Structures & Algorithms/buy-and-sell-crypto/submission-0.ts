class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0; let r = 0; let profit = 0;
        while(r < prices.length) {
            if(prices[l] <= prices[r]) {
                profit = Math.max(profit, prices[r] - prices[l])
                r++
            } else{
                l = r
            }
        }

        return profit
    }
}
