/*Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums.
 If target exists, then return its index. Otherwise, return -1*/

// Brute force 
// linear search approach :- O(N) time complexity
// this solution will be rejected as the question specifically asks for O(log(n)) 
var search1 = function(arr,n){
    for(let i =0;i<arr.length;i++){
        if(arr[i]==n){
            return n
        }
    }
    return -1;
}

// Optimal solution
// Binary search
// O(log (N)) time complexity
var search2 = function(arr,n){
    let i =0;
    // i is the low pointer
    let j = arr.length-1;
    // j is the high pointer
    let mid;
    if(n>arr[j]){
        return -1;
    }
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(arr[mid]>n){
            // value > n is the true and false condition
            j=mid -1;
        }
        else{
            i=mid+1;
        }
    }
    // please note even if the number is not in the array j will become -1;
    return j;
}
// if you want the the code in another language .. you can use chatGPT to transform it;