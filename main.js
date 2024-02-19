let div = document.createElement("div");

function show() {
  let status = " pm";

  let hours = new Date().getHours();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (hours < 12) {
    status = " Am";
  }
  let minutes = new Date().getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let seconds = new Date().getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  div.textContent = hours + " : " + minutes + " : " + seconds + status;

  document.body.append(div);
}

window.onload = function () {
  setInterval(show, 500);
};
