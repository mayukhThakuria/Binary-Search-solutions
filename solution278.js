/*You are a product manager and currently leading a team to develop a new product. Unfortunately, 

the latest version of your product fails the quality check. Since each version is developed based on the previous version,

all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following 

ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find 

the first bad version. You should minimize the number of calls to the API.*/

// Brute
// Linear Search

var solution1 = function(isBadVersion) {
    return function(n) {
        for(let i=0;i<=n;i++){
            if(!isBadVersion(i)){
                return i-1;
            }
        }
        // dummy return 
        return n;
    };
};


// optimal
// O(log(N))
// Binary Search
// the question is identical to the question where we need to find the first index smaller than target

var solution = function(isBadVersion) {
    return function(n) {
        let i = 1;
        let j = n;
        let index;
        let mid;
        while(i<=j){
            mid=Math.floor((i+j)/2);
            if(isBadVersion(mid)){
                j = mid-1;
                // index stores the last last value at which true appears
                index = mid;
            }
            else{
                i=mid+1;
            }
        }
        return index;
    };
};