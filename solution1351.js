/*Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise,
 return the number of negative numbers in grid.*/

// Brute force
// Linear search O(m*n)
var count = function(matrix){
    let i =0;
    // I will keep count of the row..
    let j =0
    // j will keep count of the column..
    let counter = 0;
    // counter will keep count of the number of negatives
    while(i<matrix.length){
        while(j<matrix[i].length){
            if(matrix[i][j]<0){
                counter++;
            }
            j++;
        }
        i++;
    }
    return counter;
}




// optimal solution
// Binary search O(log(m*n))
var count2 = function(matrix){
    let i =0;
    let j = matrix.length-1;
    let last = matrix[0].length-1;
    let mid ;

    // the part of code present below is to find the first row at which negative numbers appear
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(matrix[mid][last]>=0){
         i = mid+1;
        }
        else{
            j=mid-1;
        }
    }
    // i will eventually stop at the first row that has numbers less than zero in it;
    let start = i;

    // this part of the code is to count the number of negatives;
    let counter = 0
    while(start<matrix.length){
        i=0;
        j = last;
        while(i<=j){
            // I am only reusing i and j because I like to.. you can go for using other variables
            mid=Math.floor((i+j)/2);
            if(matrix[start][mid]<=0){
                j= mid-1
            }
            else{
                i=mid+1;
            }
            // i will eventually land at the first negative number...
            // since all the numbers on the right of I will be negative we will count it
            counter+= matrix[start].length - i;
        }
        start++;
    }
    return counter;
}


