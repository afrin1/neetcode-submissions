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
        for (const [key, value] of map) {
            console.log(`${key}: ${value}`);
        }

        for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
            const diff = target - nums[currentIndex];
            if (map.has(diff)) {
                const otherIndex = map.get(diff);
                console.log("otherIndex: ", otherIndex)
                if (otherIndex != currentIndex) {
                    if (otherIndex < currentIndex) {
                        console.log("return 1")
                        return [otherIndex, currentIndex];
                    }
                    console.log("return 2")
                    return [currentIndex, otherIndex];
                }
            }
        }

        console.log("return 3")
        return [];
    }
}
