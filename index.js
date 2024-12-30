const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const millisecondEl = document.getElementById("milliseconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ms = new Date().getMilliseconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    ms = ms < 10 ? "0" + ms : ms;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondEl.innerText = s;
    millisecondEl.innerText = ms;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);

}

updateClock();