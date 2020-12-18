// A closure gives you access to an outer function’s scope from an inner function


function x(){
    let a=10;
    function y(){
        console.log('inner fn..', a);
    }
    return y;
}

var closure = x();
closure();









// const outer =(x)=>{
//     return function(y){
//         return x+y;
//     }
// }

// const adder5 = outer(5)
// const adder10 = outer(10)

// console.log(adder5(2));
// console.log(adder10(3))