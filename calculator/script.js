const display =document.getElementById("display");

function addKey(input){
    display.value +=input;
}

function refresh(){
    display.value="";

}
function deleteKey(){
    display.value=display.value.toString().slice(0,-1);
}

function sum(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value ="Error";
    }
}