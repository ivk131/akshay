// Debouncing in js
let counter=1;
const getData =()=>{
    // API calls
    console.log('Fetching Data..',counter++);
}

const debounce=(fn,d)=>{
    let timer;
    return function(){
        let context= this;
        let args = arguments;
        clearTimeout(timer)
        timer=setTimeout(()=>{
            fn.apply(context,args)
        },d)
    }

}

const betterFunction = debounce(getData,600)