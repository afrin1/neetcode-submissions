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
            console.log(`array: [${value}]: ${result[value].toString()}`)
        }

        result.forEach((value, index) => {
            console.log(`result[${index}] = ${value}`)
        })

        let kthItem = 0;
        for (let j=nums.length+1; j>=0; j--) {
            console.log(`j ${j} : `)
            
            if (result[j] !== undefined) {
                for (const item of result[j]) {
                    console.log(`kthItem: ${kthItem} : ${item}`)
                    final.push(item);
                    kthItem++;

                    if(kthItem >= k) {
                        return final;
                    }
                }
            }
        }

        return final;
    }
}
