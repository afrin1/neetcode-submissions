class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const result = Array.from({length: nums.length+1}, () => []);
        const final = [];

        for (const num of nums) {
            const count = map.get(num)
            map.set(num, count ?  count + 1 : 1)
        }

        for (const [key, value] of map) {
            result[value].push(key);
        }


        let kthItem = 0;
        for (let j=nums.length+1; j>=0; j--) {
            
            if (result[j] !== undefined) {
                for (const item of result[j]) {
                    final.push(item);
                    kthItem++;

                    if (kthItem >= k) {
                        return final;
                    }
                }
            }
        }

        return final;
    }
}
