
let homeCountEl =document.getElementById("home-count")
let guestCountEl =document.getElementById("guest-count")

let homeBtn1El = document.getElementById("home-btn-1");
let homeBtn2El = document.getElementById("home-btn-2");
let homeBtn3El = document.getElementById("home-btn-3");

homeBtn1El.addEventListener("click",fnHomeBtn1);
homeBtn2El.addEventListener("click",fnHomeBtn2);
homeBtn3El.addEventListener("click",fnHomeBtn3);

let guestBtn1El = document.getElementById("guest-btn-1");
let guestBtn2El = document.getElementById("guest-btn-2");
let guestBtn3El = document.getElementById("guest-btn-3");

guestBtn1El.addEventListener("click",fnGuestBtn1);
guestBtn2El.addEventListener("click",fnGuestBtn2);
guestBtn3El.addEventListener("click",fnGuestBtn3);

let homeCount = 0;

function fnHomeBtn1() {
    homeCount = homeCount + 1;
    homeCountEl.textContent = homeCount;
}

function fnHomeBtn2() {
    homeCount = homeCount + 2;
    homeCountEl.textContent = homeCount;
}

function fnHomeBtn3() {
    homeCount = homeCount + 3;
    homeCountEl.textContent = homeCount;
}

let guestCount = 0;

function fnGuestBtn1() {
    guestCount = guestCount + 1;
    guestCountEl.textContent = guestCount;
}

function fnGuestBtn2() {
    guestCount = guestCount + 2;
    guestCountEl.textContent = guestCount;
}

function fnGuestBtn3() {
    guestCount = guestCount + 3;
    guestCountEl.textContent = guestCount;
}