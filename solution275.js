/*Given an array of integers citations where citations[i] is the number of citations a researcher received for 

their ith paper and citations is sorted in ascending order, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h 

such that the given researcher has published at least h papers that have each been cited at least h times.*/


// optimal
// O(log(n)*log(n))
// here we have two functions ...
// possible finds if there are enough citations with value greater than mid
// h index finds fid
var possible = function(arr,m){
    if(m>arr.length){
        return false;
    }
    if(m<=arr.length&&m<=arr[0]){
        return true;
    }
    if(m>arr[arr.length-1]){
        return false;
    }
    let i=0;
    let j = arr.length-1;
    let mid;
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(arr[mid]>=m){
            j=mid-1;
        }
        else{
            i=mid+1;
        }
    }
    return arr.length-i>=m;
}

var hIndex = function(citations) {
if(citations.length==1){
    if(citations[0]>=1){
        return 1;
    }
    else{
        return 0;
    }
}
let i =0;
let j = citations[citations.length-1];
let mid;
while(i<=j){
    mid=Math.floor((i+j)/2);
    if(possible(citations,mid)){
        // if it is poosible for mid..it might also be possible for numbers greater
        i=mid+1;
    }
    else{
        // if it is not possible for mid..it won't be possible for numbers greater than mid.
        j=mid-1;
    }
}  
return j;
};