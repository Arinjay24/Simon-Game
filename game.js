var col = ["red", "blue", "green", "yellow"];
var ucp = [];
var gamepattern = [];
var lvl=0;

function newSqequnce() {
   $("#level-title").text("Level "+lvl);
  lvl++;
  var num = Math.random();
  num = Math.floor(num * 4);
  var rcc = col[num];
  gamepattern.push(rcc);
  $("#" + rcc).fadeOut(100).fadeIn(100);
  playsound(rcc);
}

$(".btn").click(function() {
  var uci = this.id;
  ucp.push(uci);
  playsound(uci);
  animatepress(uci);
  if(gamepattern.length===ucp.length)
  checkans(lvl);
  else {
    for(var i=0;i<ucp.length;i++)
    {
      if(ucp[i]===gamepattern[i])
      continue;
      else{
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
         $("#level-title").text("GAME OVER");
         lvl=0;
         gamepattern=[];
         ucp=[];
         setTimeout(function () {
           $("#level-title").text("Press A Key to Start");
           started=true;
         }, 1000);
         break;
      }
    }
  }
});

function playsound(name) {
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}

function animatepress(cc)
{
  $("#"+cc).addClass("pressed");
  setTimeout(function () {
    $("#"+cc).removeClass("pressed");
  }, 100);
}
var started=true;
$(document).keypress(function(){
  if(started)
  {
  newSqequnce();
  started=false;
   }
});

function checkans(lastindex)
{
  var flag=true;
     for(var i=0;i<=lastindex;i++)
     {
     if(ucp[i]===gamepattern[i])
      {
       continue;
      }
      else {
           flag=false;
           var audio = new Audio('sounds/wrong.mp3');
           audio.play();
           $("#level-title").text("GAME OVER");
           lvl=0;
           gamepattern=[];
           ucp=[];
           setTimeout(function () {
             $("#level-title").text("Press A Key to Start");
             started=true;
           }, 1000);
            break;
         }
 }
 if(flag)
 {
   setTimeout(function () {
      ucp=[];
     newSqequnce();
   }, 500);
 }
}
