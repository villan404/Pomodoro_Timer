const btn = document.querySelectorAll(".control-btn button");
const timeOption = document.querySelectorAll(".time-option");
const minuteBox = document.querySelector(".minute");
const secondeBox = document.querySelector(".second");
// const msgBox = document.querySelector(".msg");
let workDuration = 25;
let minutes = workDuration;
let second = 0;
let shortBreak = 5;
let longBreak = 15;
let isRunning = false;
let intervalId;
let clicked = false;
let resetMinute = workDuration;
// let pomodoroCount = 0;
const timeChoice = (timeChooseValue) => {
  if (timeChooseValue === "work-time") {
    minutes = 25;
    second = 0;
    resetMinute = 25;
    updateDisplay();
  } else if (timeChooseValue === "short-break") {
    minutes = 5;
    second = 0;
    resetMinute = 5;
    updateDisplay();
  } else if (timeChooseValue === "long-break") {
    minutes = 15;
    second = 0;
    resetMinute = 15;
    updateDisplay();
  }
};

const timer = () => {
  if (second === 0) {
    minutes--;
    second = 59;
  } else {
    second--;
  }

  if (minutes === 0 && second == 0) {
    console.log("completed");
    // pomodoroCount++;
    // msgBox.innerText = `You Completed ${pomodoroCount} Pomodoro`;
    // console.log(pomodoroCount);
    // timeChoice();
    resetTimer();
  }
  updateDisplay();
};

const updateDisplay = () => {
  minuteBox.innerText = minutes;
  secondeBox.innerText = second.toString().padStart(2, "0");
};

const startTimer = () => {
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(timer, 1000);
  }
};

const stopTimer = () => {
  isRunning = false;
  clearInterval(intervalId);
};
const resetTimer = () => {
  isRunning = false;
  clearInterval(intervalId);
  minutes = resetMinute;
  second = 0;
  updateDisplay();
};
const calling = (btnChoice) => {
  if (btnChoice === "start") {
    startTimer();
    console.log("start");
  } else if (btnChoice === "stop") {
    stopTimer();
    console.log("stop");
  } else if (btnChoice === "reset") {
    resetTimer();
  }
};
btn.forEach((button) => {
  button.addEventListener("click", () => {
    const btnChoice = button.getAttribute("class");
    calling(btnChoice);
  });
});

timeOption.forEach((chooseTime) => {
  chooseTime.addEventListener("click", () => {
    const timeChoose = chooseTime.getAttribute("class");
    // console.log(timeChoose.split(" ")[0]);
    const timeChooseValue = timeChoose.split(" ")[0];
    //    console.log(timeChooseValue)
    timeChoice(timeChooseValue);
  });
});

updateDisplay();
