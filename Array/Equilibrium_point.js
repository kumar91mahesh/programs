/**
 * Created by Mahesh.Kumar2 on 15-02-2018.
 */

// Equilibrium index of an array
var arrayList = [1,3,5,4,0]

function equilibriumPoint(arr) {
    var sum= 0;
    var leftsum = 0;
    for(var i= 0; i<arr.length; i++){
        sum += arr[i];
    }

    for(var j= 0; j<arr.length; j++){
        sum -= arr[j];
        if(leftsum === sum){
            return j;
        }else{
            leftsum += arr[j];
        }
    }
    return -1;

}

console.log(equilibriumPoint(arrayList));