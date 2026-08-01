class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let j,k=0;
        const result = [];
        if (nums.length <=0) {
            return nums;
        }

        nums.sort((a, b) => a-b);
        console.log("nums : ", nums)

        for (let i=0; i<nums.length-1; i++) {
            if (i>0 && nums[i]===nums[i-1]){
                continue;
            }
            j=i+1;
            k=nums.length-1;
            const target = -(nums[i]);

            while (j<k) {
                if (nums[j]+nums[k] == target) {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                }
                else if (nums[j]+nums[k] < target) {
                    j++;
                }
                else if (nums[j]+nums[k] > target) {
                    k--;
                }
            }
        }
        return result;
    }
}
