class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
    const result = new Set();
    let long = 0;
    for (const num of nums) {
        set.add(num);
    }

    if (set.size <= 1) {
        return set.size;
    }
  
    for (const num of set) {
      let newLength = 0;
      console.log("num > ", num);
      if (!set.has(num-1)) {
        newLength = newLength+1;
        let check = true;
        let nextNum = num+1;
        while (check) {
          if (set.has(nextNum)) {
             newLength = newLength+1;
             nextNum = nextNum + 1;
          } else {
            check = false;
          }
        }
      }
      
      if (newLength > long) {
        long = newLength;
      }
    }

    return long;    
    }
}
