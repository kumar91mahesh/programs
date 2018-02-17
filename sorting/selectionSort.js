/**
 * Created by Mahesh.Kumar2 on 17-02-2018.
 */


function selectionSort(arr){
    for(var i= 0; i<arr.length; i++){
        var minIndex = i;
        for(var j= i+1; j<arr.length; j++){
            if(arr[j]< arr[minIndex]){
                minIndex = j;
            }
        }
        var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

var arrList = [2,1,5,2,6,4,13,3];
console.log(selectionSort(arrList));

//Time Complexity: O(n2) as there are two nested loops.