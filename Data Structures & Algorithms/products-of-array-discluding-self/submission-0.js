class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length <= 0) {
            return nums;
        }

        let prefix = 1;
        let postfix = 1;
        let array = new Array(nums.length).fill(1);

        for (let i=0; i< nums.length; i++) {
            const temp = array[i];
            array[i] = temp * prefix;
            prefix = prefix * nums[i];

        }

        for (let i=nums.length-1; i>=0; i--) {
            const temp = array[i];
            array[i] = temp * postfix;
            postfix = postfix * nums[i];
        }
        return array;
    }
}
