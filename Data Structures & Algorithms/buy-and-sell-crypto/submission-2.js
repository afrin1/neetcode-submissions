class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = left+1;
        let maxProfit = 0;

        if (prices.length <= 0) {
            return maxProfit;
        }

        while (right < prices.length) { 
          if (prices[left] < prices[right]) {
            const profit = prices[right]-prices[left];
            maxProfit = Math.max(profit, maxProfit);
          }  
          else {
            left = right;
          }
          right++;
        }
        return maxProfit;
    }
}
