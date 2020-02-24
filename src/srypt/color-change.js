const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs = {
startButton: document.querySelector('button[data-action="start"]'),
stopButton: document.querySelector('button[data-action="stop"]')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const hendelBodyColorChange = {  
  isActive: false,
  start() {
  if (this.isActive) {
  return;
  }
  this.isActive = true;
  this.intervalId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length);
    document.body.style.backgroundColor = colors[randomColor];
  }, 1000);  
},
stop() {
  clearInterval(this.intervalId);
    this.isActive = false;
  }
};

refs.startButton.addEventListener('click', hendelBodyColorChange.start.bind());
refs.stopButton.addEventListener('click', hendelBodyColorChange.stop.bind());






