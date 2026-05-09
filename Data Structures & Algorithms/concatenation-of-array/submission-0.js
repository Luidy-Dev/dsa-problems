class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length * 2)

        ans = [...nums,...nums]

      
        return ans;
    }
}
