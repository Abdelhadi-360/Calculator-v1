const display = document.getElementById("display");
const equal = document.getElementById("equal");
const clearB =  document.getElementById("clear");


const numberFun = (input) => {
    display.value += input;
}

const calculate = () => {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    } 
}
equal.addEventListener("click", calculate);

const clearFun = () => {
    display.value = '';
}
clear.addEventListener("click", clearFun);



