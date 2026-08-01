class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const array = new Array(26).fill(0);
        if (s.length !== t.length) {
            return false;
        }

        for (const character of s) {
            const index = character.toLowerCase().charCodeAt(0)-97;
            if (index < 0) {
                return false;
            }
            const count = array[index];
            array[index] = count+1;
        }

        for (const character of t) {
            const index = character.toLowerCase().charCodeAt(0)-97;
            if (index < 0) {
                return false;
            }
            const count = array[index];
            array[index] = count-1;
        }

        for (const value of array) {
            if (value > 0) {
                return false
            }
        }
        return true;
    }
}
