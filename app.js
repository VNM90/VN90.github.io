function colorClock() {
  let date = new Date();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let hours = date.getHours();

  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  var clockFace = hours + ":" + minutes + ":" + seconds;
  var hexColor = "#" + hours + minutes + seconds;

  document.querySelector("#clock-color").innerHTML = clockFace;
  document.body.style.background = hexColor;

  setTimeout(function() {
    colorClock();
  }, 1000);
}
colorClock();
