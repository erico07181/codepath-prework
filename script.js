var clueHoldTime = 1000;
var cluePauseTime = 333; //pause between clues
var nextClueWaitTime = 1000; //wait beofre starting playback of clues


//Global Variables
var pattern = [getRandom(1,6),getRandom(1,6),getRandom(1,6),getRandom(1,6),getRandom(1,6),getRandom(1,6),getRandom(1,6),getRandom(1,6)];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

function startGame(){
  //init game variables
  progress = 0;
  gamePlaying = true;
  //swap Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 440,
  2: 493.88,
  3: 523.25,
  4: 587.33,
  5: 659.25,
  6: 698.46
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost :/");
}

function winGame(){
  stopGame();
  alert("Nice job, you win! :)");
}

function guess(btn){
  console.log("User guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        if(clueHoldTime >= 400){
          clueHoldTime -= 150;
          cluePauseTime -= 15;
          nextClueWaitTime -= 150;
        }
        progress++;
        playClueSequence();
      }
    }else{
      
      guessCounter++;
    }
  }else{
    loseGame();
  }
}

function getRandom(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//This allos for the user to use buttons 1-6 on keyboard instead of clicking with the mouse
    document.addEventListener("keydown", function(e) {
        if (e.code === 'Digit1') {
            document.getElementById("button1").click();
          lightButton(1);
          playTone(1, clueHoldTime / 2);
          setTimeout(clearButton, 100, 1);
        }
    });
    document.addEventListener("keydown", function(e) {
        if (e.code === 'Digit2') {
            document.getElementById("button2").click();
          lightButton(2);
          playTone(2, clueHoldTime / 2);
          setTimeout(clearButton, 100, 2);
        }
    });
    document.addEventListener("keydown", function(e) {
        if (e.code === 'Digit3') {
            document.getElementById("button3").click();
          lightButton(3);
          playTone(3, clueHoldTime / 2);
          setTimeout(clearButton, 100, 3);
        }
    });
    document.addEventListener("keydown", function(e) {
        if (e.code === 'Digit4') {
            document.getElementById("button4").click();
          lightButton(4);
          playTone(4, clueHoldTime / 2);
          setTimeout(clearButton, 100, 4);
        }
    });
    document.addEventListener("keydown", function(e) {
        if (e.code === 'Digit5') {
            document.getElementById("button5").click();
          lightButton(5);
          playTone(5, clueHoldTime / 2);
          setTimeout(clearButton, 100, 5);
        }
    });
    document.addEventListener("keydown", function(e) {
        if (e.code === 'Digit6') {
            document.getElementById("button6").click();
          lightButton(6);
          playTone(6, clueHoldTime / 2);
          setTimeout(clearButton, 100, 6);
        }
    });
    


 
