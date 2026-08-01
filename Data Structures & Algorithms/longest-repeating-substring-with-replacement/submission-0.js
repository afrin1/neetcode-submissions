class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let result = 0;
        const map = new Map();
        let maxF = 0;
        let l = 0;
        let r= 0;

        for (r=0; r<s.length; r++) {
            const currentCount = map.get(s[r]) ?? 0;
          // console.log("currentCount: ", currentCount)
            map.set(s[r], currentCount+1);
            maxF = Math.max(maxF, map.get(s[r]));
          
          // console.log("map: ", map);
            
            if ((r-l+1)- maxF > k) {
              const currentCount = map.get(s[l])
              map.set(s[l], currentCount -1);
              l++;
            }
          
          result = Math.max(result, r-l+1);
          // console.log("res: ", result, r-l+1)
        }
       return result;
    }
}
