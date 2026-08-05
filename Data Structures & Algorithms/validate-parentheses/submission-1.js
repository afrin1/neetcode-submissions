class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const array = new Array(s.length);
        const map = new Map([
            [")", "("],
            ["]", "["],
            ["}", "{"],
        ])
        let top = -1;

        for (const ch of s) {
          // console.log("ch : ", ch,  top);
            if (map.has(ch)) {
                if (top >= 0) {
                    const pop = array[top];
                    top--;
                  // console.log("get: ", map.get(ch), pop)
                    if (pop !== map.get(ch)) {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                top++;
                array[top] = ch;
            //   console.log("else: ", top, array)
            }
        }
        // console.log("top: ", top)
        if (top < 0) {
            return true;
        } else {
            return false;
        }
    }
}
