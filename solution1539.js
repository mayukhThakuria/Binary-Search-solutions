/*Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array*/

// we try to find the numbers at any given index....
// then we try to find the number of numbers present before it 
// then we subtract it

// binary Search
// O(log(arr.length));
var findKthPositive = function(arr, k) {
    if(k<arr[0]){
        return k;
    }
    else if(k>arr[arr.length-1]-arr.length){
        return k+arr.length;
    }
    let i=0;
    let j =arr.length-1;
    let mid;
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(arr[mid]-mid-1>=k){
            j=mid-1;
        }
        else{
            i=mid+1;
        }
    }
    return k+(j+1);
    };