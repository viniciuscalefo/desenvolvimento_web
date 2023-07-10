
function clickAll(){
    var numberOfDrums=document.querySelectorAll(".drum").length;
    for(var n=0 ; n<numberOfDrums; n++){
    document.querySelectorAll("button")[n].addEventListener("click",function(){ 
       this.style.color="white"
    })}
}
clickAll()

/*ou
usando direto o loop, sem usar uma function
for(var n=0 ; n<=6 ; n++){
    document.querySelectorAll("button")[n].addEventListener("click",function(){ 
        alert("I got clicked")})
    }*/

var audio=new Audio("sounds/tom-1.mp3");
audio.play();