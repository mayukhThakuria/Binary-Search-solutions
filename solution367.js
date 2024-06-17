/*Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, 

it is the product of some integer with itself.*/

// Brute force
// linear search
// TC = O(root n) (since n is the given number)

var isPerfectSquare = function(n){
    let i =0;
    while(i*i<=n){
        if(i*i==n){
            return true
        }
        i++;
    }
    return false
}

// optimal 
// binary search
// TC = O(log(n));

var isPerfectSquare = function(num) {
    let i =0;
    let j = num+1;
    let mid;
    while(i<=j){
        mid = Math.floor((i+j)/2);
        if(mid*mid==num){
            return true;
        }
        else if(mid*mid>num){
            j = mid-1;
        }
        else{
            i = mid+1;
        }
    } 
    return false;
    };