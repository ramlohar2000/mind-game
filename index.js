
var btn = document.getElementById("btn");
var heading = document.querySelector(".heading");
var rules = document.getElementById("rules");

var i = 0;
var rule = ["Think a Number in your mind.","Multiply your number with 2.", "Add something in your result." , "Divid your result with 2.", "Now lets substract your number from this.", "You have that in your Mind.", "Refresh for Play Again"];
var randNumber = Math.floor(Math.random()*100);
var numInMind = Number(randNumber) / 2;

function next(){
    if(i === 7){
        return;
    }
    if( i === 2){
        rules.innerHTML = "Add " + randNumber + " in your result";
    }else if(i === 5){
        rules.innerHTML = "You have " + numInMind + " in your Mind.";
    }
    else{
        rules.innerHTML = rule[i];
    }
    i++;
}

function showRules(){
    heading.innerHTML = "Welcome To mind Game.";
    btn.innerHTML ="Next";
    next();
}
btn.addEventListener('click',showRules);
