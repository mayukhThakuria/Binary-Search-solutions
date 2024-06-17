/*There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 

such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums,

or -1 if it is not in nums*/

// brute
// linear serach
// this code wont work because of O(N) time complexity

var search1 = function(nums,target){
    for(let i =0;i<nums.length;i++){
        if(nums[i]==target){
            return i;
        }
    }
    return -1;
}


// optimal
// Binary search
// TC = O(log(N))

var search = function(nums, target) {
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1;
    }
    // eliminating the edge cases
    let i = 0;
    let j = nums.length - 1;
    
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        
        if (nums[mid] === target) {
            return mid;
            // if target is founde we return it
        }
        // note that atleast one side of mid will always be sorted
        // please try to see it via a graph
        if (nums[i] <= nums[mid]) {
            if (nums[i] <= target && target < nums[mid]) {
                j = mid - 1;
            } else {
                i = mid + 1;
            }
            // if nums[i] is smaller than nums[mid].. then this section(left of mid) of the array is sorted and we 
            // can directly try to find the number in the sorted section
        }

        else {
            if (nums[mid] < target && target <= nums[j]) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
            // this is the comdition where the right of mid is sorted;
        }
    }
    // if target is not found we return -1;
    return -1;
};
