/*Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example,
 the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.*/

// brute
// linear search
// this code won't work because of O(N) time complexity

var findMin = function(nums){
    let j = nums.length-1;
    if(nums[0]<nums[j]){
        // if array is rotated zero times.. it is sorted
        return nums[0]
    }
    for(let i =0;i<j+1;i++){
        if(nums[i]<nums[i-1]){
            // if the array is rotated to minimum is found right after the max element
            return nums[i]
        }
    }
    // dummy return statement
    // it is just added for aesthatics
    return -1
}

// optimal
// binary search = O(log(N))

var findMin = function(nums) {
    let i =0;
    let j = nums.length-1;
    let mid ;
    if(nums.length==1){
        // if there is only one element return the only number in the array
        return nums[0]
    }
    if(nums.length==2){
        if(nums[0]>nums[1]){
            return nums[1]
        }
        else{
            return nums[0];
        }
    }
    if(nums[0]<=nums[nums.length-1]){
        return nums[0];
        // if the array is sorted return the first statement
    }
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(nums[mid]>nums[mid+1]){
            // trying to find the drop 
            return nums[mid+1];
        }
        else if(nums[i]<=nums[mid]&&nums[mid]>nums[j]){
            // if this condition is true
            // the highest point is in the search space
            i=mid+1;
        }
        else{
            j=mid;
            // we do not know if the mid is the highest number
            // so we only move j till the max;
        }
    }
    // i will eventually stop at the min
    return nums[i];
    };