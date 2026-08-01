class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0;
        let r=heights.length-1;
        let maxArea = 0;
        while (l<r) {
            let maxheight = 0;
            if (heights[l] < heights[r]) {
                maxheight = heights[l];
            } else {
                maxheight = heights[r];
            }
            const length = r-l;
            if (length*maxheight > maxArea) {
                maxArea = length*maxheight;
            }
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return maxArea;
    }
}
