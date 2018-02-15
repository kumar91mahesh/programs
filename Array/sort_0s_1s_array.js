/**
 * Created by Mahesh.Kumar2 on 15-02-2018.
 */
/*
You are given an array of 0s and 1s in random order.
    Segregate 0s on left side and 1s on right side of the array.
    Traverse array only once.*/

var arrayList = [0,1,0,1,1,0,0]
function sortArray(arr){
    var left=0;
    var right = arr.length -1;
    while(left < right){
        while(arr[left]===0 && left< right){
            left++;
        }
        while(arr[right]===1 && left< right){
            right--;
        }
        if(left<right){
            arr[left]= 0;
            arr[right] = 1;
            left++;
            right--;
        }
    }
    return arr;
}

console.log(sortArray(arrayList));