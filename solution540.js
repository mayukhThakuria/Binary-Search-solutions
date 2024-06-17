/*You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.*/

// brute 
// linear search = O(N/2)
var singleNonDuplicate2 = function(nums){
    let i =0;
    while(i<MouseEvent.length){
        if(nums[i]==nums[i+1]){
            i+=2;
        }
        else{
            return nums[i]
        }
    }
}


// optimal
var singleNonDuplicate = function(nums) {
    if(nums.length==1){
        return nums[0];
    }   
    else if(nums[0]!=nums[1]){
        return nums[0]
    }
    else if(nums[nums.length-1]!=nums[nums.length-2]){
        return nums[nums.length-1];
    } 
    // taking out edge cases
    let i =1;
    let j = nums.length-2;
    let mid;
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(nums[mid]==nums[mid+1]){
            // if we found a dublicate number
            if((mid+1)%2==0){
                j=mid-1
                // since there are even number of numbers (because of 0 indexing we added 1)
                // and mid has a dublicate on itr right.. hence the single number must be on the left
            }
            else{
                i=mid+1;
            }
        }
        else if(nums[mid]==nums[mid-1]){
            if((mid+1)%2==1){
                j=mid-1;
                // same concept as before
            }
            else{
                i=mid+1;
            }
        }
        else{
            return nums[mid];
            // if no doublicates found.. we return
        }
    }
    // dummy return statement
    return -1
};