/*Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.*/


// Brute 
// put all the terms in one array and find the median
var findMedianSortedArrays1 = function(nums1,nums2){
    let arr=[];
    let i =0;
    let j =0;
    while(i<nums1.length&&j<nums2.length){
        if(nums1[i]>nums2[j]){
            arr.push(nums2[j]);
            j++;
        }
        else{
            arr.push(nums1[i]);
            i++;
        }
        // pushing all the terms in the array
    }
    while(i<nums1.length){
        arr.push(nums1[i]);
        i++;
        // pushing the left over elements
    }
    while(j<nums1.length){
        arr.push(nums2[j]);
        j++
        // pushing the left over element
    }
    if(arr.length%2==0){
        return (arr[(arr.length/2)-1]+arr[(arr.length)/2])/2;
    }
    else{
        return arr[Math.floor(arr.length/2)];
    }
}


// optimal
// we take elemnts from both the arrays and compare

var findMedianSortedArrays = function(nums1, nums2) {
    if(nums2.length<nums1.length){
        return findMedianSortedArrays(nums2,nums1);
        // we make sure that nums1 has less length
    }
    let n1 = nums1.length;
    let n2 = nums2.length;
    // storing the lengths
    // taking care if one of them is empty
    if(n1==0){
        if(n2==0){
            return 0;
        }
        else{
            if(n2%2==1){
                return nums2[(n2-1)/2]
            }
            return (nums2[n2/2-1]+nums2[n2/2])/2
        }
    }
    let length = n1 + n2;
    let left = Math.floor((n1+n2+1)/2);
    // left stores the number of variables that will be on the left of the median
    let i = 0;
    let j = n1;
    // i and j will iterate over nums1;
    while(i<=j){
        let mid1 = Math.floor((i+j)/2);
        // we just atke an index on num1
        let mid2 = left - mid1;
        // find a corresponding index on nums2
        let l1 = Number.MIN_SAFE_INTEGER;
        let l2 = Number.MIN_SAFE_INTEGER;
        let r2 = Number.MAX_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER;
        // l1 and l2 are the numbers where mid will point..
        // if l1>r2 and l2>r1 then we have exact number of required numbers from both the arrays to form a median
        if(mid1>0) l1= nums1[mid1-1];
        if(mid2>0) l2= nums2[mid2-1];
        if(mid1<n1) r1 = nums1[mid1];
        if(mid2<n2) r2 = nums2[mid2];
        if(l2<=r1&&l1<=r2){
            if(length%2==1){
                // in case of an odd length we can directly return the index
                return Math.max(l1,l2);
            }
            // in case of even we return the average
            return (Math.max(l1,l2)+Math.min(r2,r1))/2;
        }
        else if(l2>r1){
            i=mid1+1
            // if l2 is big we need to take more numbers from nums1 and less from nums1
        }
        else{
            j=mid1-1;
            // same concept as above
        }
    }
    // dummy return
    return 0;
};