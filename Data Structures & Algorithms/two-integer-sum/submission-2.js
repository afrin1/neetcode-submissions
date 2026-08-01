class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        if (nums.length <= 0) {
            return []
        }

        nums.forEach((num, index) => {
            map.set(num, index);
        })

        for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
            const diff = target - nums[currentIndex];
            if (map.has(diff)) {
                const otherIndex = map.get(diff);
                if (otherIndex != currentIndex) {
                    if (otherIndex < currentIndex) {
                        return [otherIndex, currentIndex];
                    }
                    return [currentIndex, otherIndex];
                }
            }
        }

        return [];
    }
}
