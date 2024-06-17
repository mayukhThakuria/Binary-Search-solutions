/*You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

Return the index of the peak element.*/

// brute force
// linear search;

var peakIndexInMountainArray1 = function(arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            // peak element will be the first greater than the element on the right
            return i;
        }
    }
    return arr.length-1;
}

// optimal
// binary search (kind off)
// we take a gap and we try to see if the peak is in the gap.. if yes.. we make the gap smaller
// this is better than linear serch.. but it can go up to O(N)
var peakIndexInMountainArray = function(arr) {
let len = arr.length;
let gap = Math.ceil(len/2);
let i =0;
while(true){
    while(i+gap<len){
        if(arr[i]<arr[i+gap]){
            i++;
            // trying to see if there exists the peak
        }
        else{
            break;
        }
    }
    if(gap==1){
        break;
    }
    gap=Math.ceil(gap/2);
    // making the gap smaller o refine the peak
}
return i;
};