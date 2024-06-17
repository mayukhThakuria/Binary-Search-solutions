/*You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.*/


// Brute 
// Linear search O(N*m);
var searchMatrix2 = function(matrix,target){
    let i =0;
    while(i<matrix.length){
        let j = 0;
        while(j<matrix[i].length){
            if(matrix[i][j]==target){
                return true;
            }
            else if(matrix[i][j]>target){
                return false;
            }
            j++;
        }
        i++;
    }
    return false;
}


// optimal
// binary search
// we try to visualizer the whole array as a single 1D array
// whenever mid exceeds the length.. the modilulo operator makes sure it still works
var searchMatrix = function(matrix, target) {
    let i  =0;
    let j = (matrix.length)*(matrix[0].length)-1;
    let mid;
    let len = matrix[0].length;
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(matrix[Math.floor(mid/len)][mid%len]==target){
            return true;
        }
        else if(matrix[Math.floor(mid/len)][mid%len]>target){
            j =mid-1;
        }
        else{
            i=mid+1;
        }
    }
    return false;
    };