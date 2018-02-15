/**
 * Created by Mahesh.Kumar2 on 15-02-2018.
 */

// Sort an array of 0s, 1s and 2s
var arrayList = [0, 1, 2, 0, 1, 1, 0, 0, 2, 0, 1, 2, 0, 0];

function sortArray(arr) {
    var low = 0;
    var high = arr.length - 1;
    var mid = 0;

    while (mid < high) {
        switch (arr[mid]) {
            case 0:
                var temp = arr[low];
                arr[low] = arr[mid];
                arr[mid] = temp;
                mid++;
                low++
                break;
            case 1:
                mid++;
                break;

            case 2:
                var temp = arr[high];
                arr[high] = arr[mid];
                arr[mid] = temp;
                high--
                break;
        }
    }
    return arr;
}


console.log(sortArray(arrayList));