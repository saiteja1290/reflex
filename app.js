const start = document.querySelector('#start');
const audio = document.getElementById("audio");
start.addEventListener('click',flicks());


let count = 0;
function flicks() {
    let y = Math.floor(Math.random() * 98) + 1;
    let x = '#cell-'+y;
    const aimat = document.querySelector(x);
    aimat.style.backgroundColor = "red";
    aimat.style.color = 'red';
    aimat.addEventListener("click",() => {
        audio.play();
        const yes = document.querySelector(x);
        yes.style.backgroundColor = "black";
        yes.style.color = 'black';
        count++;
        const score = document.querySelector('#counter');
        score.innerHTML = count;
        flicks();
    });

}

let intervalId;
let minutes = 0;
let seconds = 20;

const timerEl = document.getElementById('timeleft');
const startBtn = document.getElementById('start');


startBtn.addEventListener('click', startTimer);
op1.addEventListener('click',op1func);
function op1func() {
  clearInterval(intervalId);
  minutes = 0;
  timerEl.innerText = '00:20';
}



function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}


function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
    alert('Time is up!');
    // clearInterval(intervalId);
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  timerEl.textContent = `${formattedMinutes}:${formattedSeconds}`;
}


