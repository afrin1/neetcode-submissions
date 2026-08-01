class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (let i=0; i<strs.length; i++) {
            const str = strs[i];
            const key = new Array(26).fill(0);
            for (const char of str) {
                const index = char.toLowerCase().charCodeAt(0)-97;
                if (index >= 0) {
                    const count = key[index];
                    key[index] = count + 1;
                }
            }
            const mapKey = key.join(',')
            const existingArray = map.get(mapKey)
            if (existingArray) {
                map.set(mapKey, [...existingArray, str])
            } else {
                map.set(mapKey, [str])
            }
        }

        let result = [];
        for (const [key, value] of map) {
            result.push(value)
        }
        return result;
    }
}
