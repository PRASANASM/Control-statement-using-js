let M = 2
let N = 4
let Sum = 0

if (M>N){
    console.log(0);
}
else if(M<=N) {
      for(let i=M;i<=N;i++){
        let P=i*i*i
        Sum+=P
      }
    
}
console.log(Sum);