/*Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 */

// optimal
// binary search ... its complexity can go up to O(N);

var findClosestElements = function(arr, k, x) {
 let i =0;
 let j = arr.length-1;
 let mid;
 while(i<=j){
     mid=Math.floor((i+j)/2);
     if(arr[mid]>x){
         j=mid-1;
     }
     else{
         i=mid+1;
     }
 }
 // j points at x or the integer just smaller than x
 let left = j;
 let right = j+1;
 let sol= [];
 while(sol.length<k&&left>=0&&right<arr.length){
     let leftSum = Math.abs(arr[left]-x);
     let rightSum = Math.abs(arr[right]-x);
     // we compare the numbers on mod on the left and the right
     // Math.abs changes a number to positive
     if(rightSum<leftSum){
         sol.push(arr[right]);
         right++;
         // push adds a number into the array from behind
     }
     else{
         sol.unshift(arr[left]);
         // unshift adds a number from front
         left--;
     }
 }
 while(sol.length<k&&left>=0){
     sol.unshift(arr[left]);
     left--;
     // if there are no more elements on the right
 }
 while(sol.length<k&&right<arr.length){
     sol.push(arr[right]);
     right++;
     // if there are no more elements on the left;
 }
 return sol;
};