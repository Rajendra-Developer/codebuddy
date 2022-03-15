// level 2

const fibonacciNumber = (n) => {
    if(n === 1){
        return [0,1];
    } else {
        var x = fibonacciNumber(n-1);
        x.push(x[x.length - 1] + x[x.length - 2]);
        return x;
    }
}

let numbers = fibonacciNumber(6);
let total = 0;
numbers.map(val => {  
  total += val;
});

console.log(total);