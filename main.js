var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
function incrementScore(e){
    var button=e.target
    var sid=button.getAttribute("data score")
    var score=documenet.getElementById("sid")
    var currentScore= parseInt(score.innertext);
    
    score1.innerText=currentVotes+1
}
btn1.addEventListener("click",incrementScore);
btn2.addEventListener("click",incrementScore);
btn3.addEventListener("click",incrementScore);
btn4.addEventListener("click",incrementScore);
function endgame(){
    var s1=parseInt(doument.getElementById("s1").innertext);
    var s2=parseInt(doument.getElementById("s2").innertext);
    var s3=parseInt(doument.getElementById("s3").innertext);
    var s4=parseInt(doument.getElementById("s4").innertext);
}

