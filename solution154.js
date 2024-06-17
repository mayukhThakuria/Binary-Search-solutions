/*Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

[4,5,6,7,0,1,4] if it was rotated 4 times.
[0,1,4,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.*/

// please refer to solution 153 for the preliminary understanding and brute solution

// optimal
// the only problematic case where our previous code fails is when nums[i]==nums[j]==nums[mid];
// in this case we just decrease the search space by doing i++ and j--;
// even if that number is the minimum it is still held in the position mid.


// please note that this code is far faster then linear search but its worst case time complexity is also (N/2)
// this is in a case where all the numbers are the same...
// but its average case will be O(log(N));
var findMin = function(nums) {
    if(nums.length==1){
        return nums[0]
    }
    let i =0;
    let j = nums.length-1;
    let mid;
    if(nums[0]<nums[nums.length-1]){
        return nums[0];
    }
    while(i<=j){
        mid=Math.floor((i+j)/2);;
        if(nums[i]<nums[j]){
            return nums[i];
        }
        else if(nums[i]==nums[mid]&&nums[mid]==nums[j]&&i!=j){
            // by adding this extra case we can solve this problem
            i++;
            j--;
        }
        else if(mid-1>=0&&nums[mid]<nums[mid-1]){
            return nums[mid];
        }
        else if(nums[i]>=nums[mid]&&nums[mid]<=nums[j]){
            j=mid-1;
        }
        else{
            i= mid+1;
        }
    }
    return nums[mid];
    };