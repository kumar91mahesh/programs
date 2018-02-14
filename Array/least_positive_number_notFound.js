/**
 * Created by Mahesh.Kumar2 on 13-02-2018.
 */


//     find the least number not found in positive unique number of array
var numArray = [17, 1, 3, 2, 10, 18, 6, 7, 4, 9, 8, 16, 12, 29, 11, 13, 14, 15]


function findMissingNumer(A) {

    var missingnum = 0;
    for (var i = 0; i < A.length; i++) {
        var val;
        if (A[i] < 0) {
            val = 0 - A[i];
        } else {
            val = A[i];

        }

        if (val < A.length) {
            A[val - 1] = 0 - A[val - 1];
        }


    }
    for (var i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            missingnum = i + 1;
            break;
        }
    }
    return missingnum;
}
/*
 A.sort((a,b) => Math.abs(a) - Math.abs(b));
 var mk =A.reduce((res, val) => {
 console.log(res,val);
 val === res ? res++ : res;
 return res;

 },1)
 */

console.log(findMissingNumer(numArray));
