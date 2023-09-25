let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let countHome = 0
let countGuest = 0 
homeScoreEl.textContent = countHome
guestScoreEl.textContent = countGuest

function home1() {
    countHome += 1
    homeScoreEl.textContent = countHome;
}

function home2() {
    countHome += 2
    homeScoreEl.textContent = countHome;
}

function home3() {
    countHome += 3
    homeScoreEl.textContent = countHome;
}

function guest1() {
    countGuest += 1
    guestScoreEl.textContent = countGuest;
}

function guest2() {
    countGuest += 2
    guestScoreEl.textContent = countGuest;
}

function guest3() {
    countGuest += 3
    guestScoreEl.textContent = countGuest;
}

function restart() {
    countHome = 0
    countGuest = 0 
    homeScoreEl.textContent = countHome
    guestScoreEl.textContent = countGuest
}