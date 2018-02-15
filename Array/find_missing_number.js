/**
 * Created by Mahesh.Kumar2 on 15-02-2018.
 */

/*You are given a list of n-1 integers and these integers are in the range of 1 to n.
    There are no duplicates in list. One of the integers is missing in the list.
    Write an efficient code to find the missing integer.*/


var arrList = [1,3,4,6,5,7,2,9];

function missingNum(Arr){
    var sum = (Arr.length +1) * (Arr.length + 2)/2;
    for(var i= 0; i<Arr.length; i++){
        sum = sum -Arr[i];
    }
    return sum;
}

console.log(missingNum(arrList));