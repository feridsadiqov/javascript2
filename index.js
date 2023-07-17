const massive= [
   -12, -6, -3, 5, 8, 12, 19, 26
] 
let sum=0
function sumArr(arr){
    for (let i= 0; i< arr.length; i++) {if ( arr[i]>0 )
        sum+= arr[i];
    }
     return sum
    
}

console.log(sumArr(massive));

function arrow(arr){
   let evenArr=[];
   for(let i=0;i<=arr.length;i++){
    if(arr[i]%2===0){
        evenArr.push(arr[i])
    }
   }
  return evenArr;
}
 console.log(arrow(massive));
