const turnOn=document.getElementById("turnOn")
const turnOff=document.getElementById("turnOff")
const lamp=document.getElementById("lamp")


function lampIsBroken (){
    return lamp.src.indexOf("quebrada") > -1 /**/ 
}

function lampOn(){
    if( !lampIsBroken() ){
        lamp.src="./ligada.jpg";
    }
}

function lampOff(){
    if (!lampIsBroken() ){
        lamp.src="./desligada.jpg";
    }
}

function lampBroken(){
    if (!lampIsBroken() ){
        lamp.src="./quebrada.jpg";
    } 
}

turnOn.addEventListener("click",lampOn)
turnOff.addEventListener("click",lampOff)
lamp.addEventListener("mouseover",lampOn)
lamp.addEventListener("mouseleave",lampOff)
lamp.addEventListener("dblclick",lampBroken)
