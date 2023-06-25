var bottom = document.querySelector("#bottom");
var timeInSec = document.querySelector("#timeInSec");
var maaro = document.querySelector("#maaro");
var score = document.querySelector("#score");
var scoreNum = document.querySelector("#scorenum");

var timer = 60;
var scoreScore = 0;
var rnm ;



function bubbleMaker(){

    
var tempalet = ``;

    
for (var i = 0; i <= 39 ; i++) {

    tempalet += `
                   <div class="bubble">
                         <h4>${Math.floor(Math.random()*20)}</h4>
                   </div>`

    bottom.innerHTML = tempalet;
    
};

};

function time(){

    setInterval(function(){
    
  

        if( timer > -1 ){
    
            timeInSec.textContent = timer;
            timer--;
    
        }
        else{
         
                bottom.innerHTML = `<h1 id="end" >END GAME</h1>`
        }
    
    
    },1000);

};

function maar(){

    rnm =  Math.floor(Math.random()*20);
    maaro.textContent = rnm;

};


function scores(){
       scoreScore += 10;
       score.textContent = scoreScore;

}

bottom.addEventListener("click", function(hey){
    var click = Number(hey.target.textContent);
    
    if(click === rnm){
          scores();
          bottom.innerHTML = " ";
          bubbleMaker();
          maar();
    }

    else{

        bottom.innerHTML = " ";
        bubbleMaker();
        maar();
    }
})

bubbleMaker();
time();
maar();
