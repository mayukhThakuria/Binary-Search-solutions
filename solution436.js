/*You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique.

The right interval for an interval i is an interval j such that startj >= endi and startj is minimized.

Note that i may equal j.Return an array of right interval indices for each interval i.

If no right interval exists for interval i, then put -1 at index i.*/


var findRightInterval = function(intervals) {
    if(intervals.length==1&&intervals[0][0]<intervals[0][1]){
        // taking out edge cases
        return [-1];
    }
    let hash ={};
    // since we need to sort the array we also need a system to store the index
    // the question explicitely said that starts are unique
    let start =[];
    // start will store the starting values of the intervals
    // please remeber that we can also sort intervals.. but changing the input is a bad practice;
    for(let i=0;i<intervals.length;i++){
        start.push(intervals[i][0]);
        hash[intervals[i][0]]=i;
    }
    start.sort((a,b)=>a-b);
    let sol=[];
    // solution will store the right indices
    // in the following loop we check for the optimal start for an end
    for(let k =0;k<intervals.length;k++){
        let num = intervals[k][1];
        if(num>start[start.length-1]){
            sol.push(-1);
        }
        else{
            let i =0;
            let j = start.length-1;
            let mid;
            while(i<=j){
                mid=Math.floor((i+j)/2);
                if(start[mid]<num){
                    i=mid+1;
                }
                else{
                    j=mid-1;
                }
            }
            sol.push(hash[start[i]]);
        }
    }
    return sol;
    };


// TC explained
// putting the values into start and hash = O(N);
// sorting takes O(Nlog(n));
// the loop takes O(N*log(n)).. the log(n) is because of binary search
// hence the total TC = O(N)+O(N*log(N))+O(N*log(N));
// this can be simplified as O(N*log(N));