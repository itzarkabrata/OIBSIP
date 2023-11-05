var temp_value = document.getElementById('input-temp');
var btn = document.getElementById('btn');
var type_from = document.getElementById('type-from');
var type_to = document.getElementById('type-to');


function isNumber(str) {
    for (let index = 0; index < str.length; index++) {
        if (str[index]<'0'||str[index]>'9') {
            return false;
        } 
    }
    return true;
}

function c_to_f(val) {
    if(type_from.value=="Celcius"){
        if(type_to.value=="Celcius"){
            return val;
        }else if(type_to.value=="Ferenheit"){
            return ((9*val)/5)+32;
        }else{
            return val+273.15;
        }
    }
    if(type_from.value=="Ferenheit"){
        if(type_to.value=="Celcius"){
            return ((val-32)/9)*5;
        }else if(type_to.value=="Ferenheit"){
            return val;
        }else{
            return (((val-32)/9)*5)+273.15;
        }
    }
    if(type_from.value=="Kelvin"){
        if(type_to.value=="Celcius"){
            return val-273.15;
        }else if(type_to.value=="Ferenheit"){
            return (((val-273.15)*9)/5)+32;
        }else{
            return val;
        }
    }
}

btn.addEventListener("click",()=>{
    if(isNumber(temp_value.value)){
        let output = c_to_f(Number.parseInt(temp_value.value));
        if(type_to.value=="Celcius"){
            document.getElementById('output-temp').innerHTML = output.toFixed(2)+' °C';
        }else if(type_to.value=="Ferenheit"){
            document.getElementById('output-temp').innerHTML = output.toFixed(2)+' °F';
        }else{
            document.getElementById('output-temp').innerHTML = output.toFixed(2)+' K';
        }
    }else{
        alert("Please enter a valid temperature value");
    }
})
