/*We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).*/


// if you notice this question is just like traversing through an array ..
// just instead of a condition like nums[mid]>target..we get guess(mid)..


// brute 
// linear search
// O(N);
var guessNumber1 = function(n){
    // traversing through the whole array to find the required number
    for(let i =0;i<=n;i++){
        if(guess(i)==0){
            return i;
        }
    }
    return -1;
}


// optimal solution
// simple binary Search
// O(log(n));

var guessNumber = function(n) {
    let i =0;
   let j = n;
   while(i<=j){
      mid = Math.floor((i+j)/2);
      let val = guess(mid);
      // storing the value in a variable so as to not have to call guess again;
      if(val==0){
        // number found
          return mid;
      }
      else if(val==1){
          i=mid+1;
          // we need to go higher
      }
      else{
          j = mid-1;
          // we need to go lower
      }
   }
   // dummy return
   // just added for aesthatics or if guess function has any errors
   return -1;  
  };