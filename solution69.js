/*Given a non-negative integer x, return the square root of x rounded down to the nearest integer.

The returned integer should be non-negative as well*/


// Brute 
// linear serach = O(root(x))
var mySqrt1 = function(x){
    let i =0;
    while(i*i<=x){
        if(i*i==x){
            return i;
        }
        else{
            i++;
        }
    }
    // please not that the loop will break when i*i is greter than x
    return i-1;
}

// optimal
// binary search = O(log(N))
var mySqrt = function(x) {
    let i =0;
    let j =x;
    let mid;
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(mid*mid==x){
            return mid;
        }
        else if(mid*mid>x){
            j=mid-1;
        }
        else{
            i=mid+1;
        }
    }
    // since we need to return the value just smallet that root x.. we return j;
    return j
};