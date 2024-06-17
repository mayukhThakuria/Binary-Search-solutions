/*You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build*/

// brute linear serach
// please notice that it follows the fibonachii sequence

var arrangeCoins = function(n) {
    let rows = 0;
    let i =0;
    while(true){
        i+= rows+1;
        if(i>n){
            return rows;
        }
        if(i==n){
            return rows+1;
        }
        rows++;
    }
};


// optimal
// binary search
// sum of all numbers fom 1 to n is n*(n-1)/2;

var arrangeCoins2 = function(n){
    let i =0;
    let j = n;
    let mid;
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(n==(mid*(mid-1)/2)){
            return mid;
        }
        else if(n>(mid*(mid-1)/2)){
            i=mid+1;
            // we can bulit more stairs than mid
        }
        else{
            j=mid-1;
            // we cant build these many stairs
        }
    }
    // remember that we can leave the last row incomplete
    return i;
}