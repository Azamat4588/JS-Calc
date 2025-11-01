function calc(){
let son1 = Number(document.getElementById("num1").value);
let son2 = Number(document.getElementById("num2").value);

let sign = document.getElementById('sel').value;
let result;
if(sign == "+"){
    result = son1 + son2;
}else if(sign == "-"){
    result = son1 - son2;
}else if(sign == "*"){
    result = son1 * son2;
}else if(sign == "/"){
    result = son1 / son2;
}
    document.getElementById('res').innerHTML = "Natija: "+result;
}