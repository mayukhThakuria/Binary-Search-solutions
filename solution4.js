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
        findMedianSortedArrays(nums2,nums1);
    }
    let n1 = nums1.length;
    let n2 = nums2.length;
    let length = n1 + n2;
    let left = Math.floor((n1+n2+1)/2);
    let i = 0;
    let j = n1;
    while(i<=j){
        let mid1 = Math.floor((i+j)/2);
        let mid2 = left - mid1;
        let l1 = Number.MIN_SAFE_INTEGER;
        let l2 = Number.MIN_SAFE_INTEGER;
        let r2 = Number.MAX_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER;
        if(mid1>0) l1= nums1[mid1-1];
        if(mid2>0) l2= nums2[mid2-1];
        if(mid1<n1) r1 = nums1[mid1];
        if(mid2<n2) r2 = nums2[mid2];
        if(l2<r1&&l1<r2){
            if(length%2==1){
                return Math.max(l1,l2);
            }
            return (Math.max(l1,l2)+Math.min(r2,r1))/2;
        }
        else if(l2>r1){
            i=mid1+1
        }
        else{
            j=mid1-1;
        }
    }
};