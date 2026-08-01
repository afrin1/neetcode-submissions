class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        if (strs.length <= 0) {
            return "";
        }
        for (const str of strs) {
            // if (str.length)
            result = result+`${str.length}#${str}`;
            // console.log("inside: result: ", result);
        }
        // console.log("out result: ", result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let array = [];
        const delimiter = "#";
        let processStr = str;
        // console.log(">> str: length ", str.length);

        if (str.length === 0) {
            return [];
        }

        if (str.length < 0) {
            return undefined;
        }

        while (processStr.length > 0) {
            const index = processStr.indexOf(delimiter)
            if (index > -1) {
                const count = Number(processStr.slice(0, index));
                if (count == 0) {
                    array.push("");
                    processStr = processStr.slice(index+count+1);
                } else if (count > 0) {
                    if (processStr.length >= index+count+1 )  {
                        const input = processStr.slice(index+1, index+count+1);
                        // console.log("input: ", input);
                        array.push(input);
                        processStr = processStr.slice(index+count+1);
                        // console.log("processStr: ", processStr);
                    }
                }
            }
        }
        console.log(array);
        return array;
    }
}
