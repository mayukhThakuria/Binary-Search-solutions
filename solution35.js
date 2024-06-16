/*Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, return the index 
where it would be if it were inserted in order*/

// Brute force
// Linear
// TC = O(N).. This will not solve the question as the question demands a O(log(N)) time complexity
var SearchInsert1 = function(arr,n){
    let index =-1;
    // dummy value of index
    for(let i =0;i<arr.length;i++){
        if(arr[i]==n){
            return i;
        }
        else if(arr[i]<n){
            index =i;
            // index stores the value of the index with the largest value that is smaller than n
            // so the position of n should be right next to it;
        }
        else{
            break;
        }
    }
    return index+1
}

// optimal
// Binary Search
var SearchInsert2 = function(arr,n){
    let i =0;
    let j = arr.length-1;
    let mid;
    while(i<=j){
        mid = Math.floor((i+j)/2)
        if(arr[mid]==n){
            return mid;
        }
        else if(arr[mid]>n){
            j=mid-1;
            // j will stop at the index that is just smaller than n
        }
        else{
            i=mid+1
            // i will stop at the index that is just bigger than n
        }
    }
    return i;
}