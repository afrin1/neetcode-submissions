class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let result = 0;
        for (let ch of s) {
            if (set.has(ch)) {
                result = Math.max(set.size, result);
                while (set.has(ch)) {
                    const oldChars = set.values().next().value;
                    set.delete(oldChars);
                }
                set.add(ch);
            } else {
                set.add(ch);
            }
        }
        result = Math.max(result, set.size);
        return result;
    }
}
