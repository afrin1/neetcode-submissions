class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

    const need = new Map();
    for (const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    const have = new Map();
    let haveCount = 0;
    const needCount = need.size; // Track unique characters fulfilled

    let resultLen = Infinity;
    let resultIndex = [-1, -1];

    let i = 0;
    for (let j = 0; j < s.length; j++) {
        const charJ = s[j];
        have.set(charJ, (have.get(charJ) || 0) + 1);

        // If current char count matches required count, increment satisfied count
        if (need.has(charJ) && have.get(charJ) === need.get(charJ)) {
            haveCount++;
        }

        // Try to shrink window from left once all unique requirements are met
        while (haveCount === needCount) {
            const currentLen = j - i + 1;
            if (currentLen < resultLen) {
                resultLen = currentLen;
                resultIndex = [i, j];
            }

            const charI = s[i];
            have.set(charI, (have.get(charI) || 0) - 1);

            // If removing charI makes us lose a required character count
            if (need.has(charI) && have.get(charI) < need.get(charI)) {
                haveCount--;
            }

            i++; // Single increment for left pointer
        }
    }

    return resultLen === Infinity ? "" : s.slice(resultIndex[0], resultIndex[1] + 1);
    }

    
}
