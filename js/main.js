// 
document.addEventListener("DOMContentLoaded", function() {

//every second, the iteration state will change. once we get to iteration 2, start over at 0
//we are rotating colors, changing the size

var colorPool = ["white", "white", "white"]; //use any color you like.. here we are defining the variables and giving them default value
var seconds = 0;
var size1 = 15;
var size2 = 50;
var state = 0; 
var increment = 0;
var direction = 0;
var numOfColors = colorPool.length; //gets the length of the array. the length would be three because we have 3 in the array
var rotateIncrement = 0;

//divs from DOM
var parentDiv = document.getElementsByClassName("blockContainer"); //use to create a var for a particulalr id. we want to change the color
var div1 = document.getElementById("div1"); //connecting the js to the other two files for get elementsby id
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

function timer(){ //every second
    setInterval(function(){
        seconds += 1;
        console.log("seconds:" + seconds);
        //alert("Hello World!");

        if (seconds==100){
            clearInterval(timer);
        }
        state=mod(seconds);
        rotateIncrement=seconds *90;
        console.log("state:" +state)
        loadingScreen();
        console.log(parentDiv);

        parentDiv[0].style.transform="rotate(" + rotateIncrement+"deg)";
        parentDiv[0].style.WebkitTransform="rotate(" +rotateIncrement+"deg)";

    },1000);    
}


function mod(num){ //its looking for how many colors there are and returning it
    return num%numOfColors;
}

function loadingScreen(){
    if(state==0){ //relates to the array of colors.. if its not 0 then it will be the colors below. if not ..else if it will be 1 or the 2 below
        div1.style.backgroundColor=colorPool[0];
        div2.style.backgroundColor=colorPool[1];
        div3.style.backgroundColor=colorPool[2];
    }else if (state==1) {
        div1.style.backgroundColor=colorPool[1];
        div2.style.backgroundColor=colorPool[2];
        div3.style.backgroundColor=colorPool[0];
    }else if (state==2){
        div1.style.backgroundColor=colorPool[2];
        div2.style.backgroundColor=colorPool[0];
        div3.style.backgroundColor=colorPool[1];
    }

    div1.style.backgroundColor = colorPool[mod(state)];
    div2.style.backgroundColor = colorPool[mod(state+1)];
    div3.style.backgroundColor = colorPool[mod(state+2)];

}

timer();

});
