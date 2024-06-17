/*Given an integer array nums, return the number of triplets chosen from the array that can make triangles 

if we take them as side lengths of a triangle*/


// optimal
// sorting + binary search
// O(n^2 * log(n));
// remeber that the only condition for being a triangle is that the sum of two sides can't be smaller than the third.

var triangleNumber = function(nums) {
    if(nums.length<3){
        return 0;
    }
    nums.sort((a,b)=>a-b);
    // soring the nums..
    let start =0;
    let end = nums.length-1;
    let sol =0;
    while(end>=2){
        //we are iterating from the last..
        // we fix the first number
        start =0;
        while(start<end-1){
            // start fixes the last number
            let i =start+1;
            let j =end-1;
            let mid;
            while(i<=j){
                mid = Math.floor((i+j)/2);
                if(nums[mid]>nums[end]-nums[start]){
                    j=mid-1;
                }
                else{
                    i=mid+1;
                }
            }
            // with the binary search we find the largest number which can be made into one side of the traiangle
            // the other ones must also form a triangle.. so we add it
            sol+=end-i;
            start++;
        }
        end--;
        // mocing the end behind
    }
    return sol;
    };