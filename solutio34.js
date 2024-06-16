/*Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity*/

// Brute
// Linear Search = O(N)
// this code won't work because of rime complexity

var searchRange1 = function(nums, target) {
    let first = -1;
    let last = -1;
    for(let i =0;i<nums.length;i++){
        if(first==-1&&nums[i]==target){
            first = i;
            last =i;
        }
        if(first!=-1&&nums[i]==target){
            last = i;
        }
    }
    // if the number doesnt appear the answer will still be [-1,-1]
    return [first,last]
}


// Better 
// this solution is a mix of linear search and binary search
// the complexity of the case can go up to O(n) in case the whole array contains target
var searchRange2 = function(nums,target){
    let i =0;
    let j = nums.length-1;
    let mid;
    let isfount = false;
    // through the binary search we are trying to find the any occurance of target
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(nums[mid]==target){
            // if we find target.. we traverse in both directions to find the first and last occurance
            isfount= true;
            let right = 1;
            while(right<nums.length&&nums[mid]==nums[mid+right]){
                right++;
            }
            // notice that right will keep incriminatint till value at mid + right is not equal
            // hence last occurance will be mid+right-1
            // same concept will be there in case of left
            let left = -1;
            while(left>0&&nums[mid]==nums[mid+left]){
                left--;
            }
            break;
            // once we find target we do not need to traverse;
        }
        else if(nums[mid]>target){
            j=mid-1;
        }
        else{
            i=mid+1;
        }
    }
    if(isfount){
        return [mid+left+1,mid+right-1];
    }
    return [-1,-1]
}


// Optimal solution
// Only binary search 
// TC = O(log(N));

var searchRange3 = function(nums,target){
    let i =0;
    let j = nums.length-1;
    let mid;
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(nums[mid]>=target){
            j = mid-1;
        }
        else{
            i = mid+1;
        }
    }
    // here i will end up at the first index with value equal to or greater than target;
    if(nums[i]!=target){
        return [-1,-1];
    }
    // if the code reaches here we know that target exists.
    let i2 = 0;
    let j2 = nums.length-1;
    while(i2<=j2){
        mid=Math.floor((i2+j2)/2);
        if(nums[mid]>target){
            j2=mid-1;
        }
        else{
            i2=mid+1;
        }
    }
    // here j2 will stop at the last index with value target
    return[i,j2];
}