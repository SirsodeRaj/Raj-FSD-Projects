let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById('defuser');


let countDown = 10;
let interValId = setInterval(function() {
    countDown = countDown - 1;
    timerEl.textContent = countDown;
    if (countDown === 0) {
        timerEl.textContent = "Boom !!";
        clearInterval(interValId);

    }
}, 1000);
defuserEl.addEventListener("keydown", function() {
    let boomdefusertext = defuserEl.value;
    if (event.key === "Enter" && boomdefusertext === "defuse" && countDown !== 0) {
        timerEl.textContent = "You Did It!!";
        clearInterval(interValId);
    }
});