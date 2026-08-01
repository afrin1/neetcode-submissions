class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set()
        for (const num of nums) {
            console.log("num: "+num)
            if (set.has(num)) {
                console.log("return true")
                return true;
            }
            set.add(num)
            console.log("add "+num)
        }
        set.forEach(value => console.log(value));
        return false;
    }
}
