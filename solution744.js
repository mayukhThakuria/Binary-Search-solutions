/*You are given an array of characters letters that is sorted in non-decreasing order, 
and a character target. There are at least two different characters in letters. */

/*Return the smallest character in letters that is lexicographically greater than target. 
If such a character does not exist, return the first character in letters.*/

// Brute force 
// Linear serach O(N)

var nextGreatestLetter = function(letters, target) {
    for(let i =0;i<letters.length;i++){
        if(letters[i].charCodeAt(0)>target.charCodeAt(0)){
            // since the array is sorted , the first number taht is bigger than target
            // is the samllest number bigger than target
            return letters[i];
        }
    }
    return letters[0];
}

// optimal
// binary Search
// TC = O(log(N))
var nextGreatestLetter2 = function(letters,target){
    let i =0;
    let j =letters.length-1;
    let mid;
    if(letters[j].charCodeAt(0)<target.charCodeAt(0)){
        return letters[i];
    }
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(letters[mid].charCodeAt(0)>target.charCodeAt(0)){
            j=mid-1;
            // this is the true and false condition in the question
        }
        else{
            i= mid+1
        }
    }
    return i;
}