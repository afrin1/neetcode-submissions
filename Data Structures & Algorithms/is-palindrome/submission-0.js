class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let i=0;
        let j=cleanString.length-1;

        while (i!=j && i<j) {
            if (cleanString[i] != cleanString[j]) {
                return false;
            } 
            i=i+1;
            j=j-1;
        }

        return true;
    }
}
