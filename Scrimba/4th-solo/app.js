const btnConvertEl = document.getElementById("btn-convert");
const inputEl = document.getElementById("input-field");

btnConvertEl.addEventListener("click", function(){
    let inputValue = inputEl.value;

    if (inputValue >= 0) {
        calculater(inputValue);
    };
});

function calculater(inputvalue) {
    calLength(inputvalue);
    calVolume(inputvalue);
    calMass(inputvalue);
};

function calLength(inputValue) {
    // calculate feet
    let feet = inputValue * 3.281
    feet = feet.toFixed(3);

    // calculate meter
    let meter = inputValue * 0.3048;
    meter = meter.toFixed(3);
    
    let finalLength = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meter} meters`;
    const container1pEl = document.getElementById("id-p-sub-container-1");
    container1pEl.textContent = finalLength;
};

function calVolume(inputValue) {
    // gallon
    let gallon = inputValue * 0.264172;
    gallon = gallon.toFixed(3);
    
    // liter
    let liter = inputValue * 3.78541;
    liter = liter.toFixed(3);
    
    let finalLength = `${inputValue} liters = ${gallon} gallons | ${inputValue} gallons = ${liter} liters`;
    const container2pEl = document.getElementById("id-p-sub-container-2");
    container2pEl.textContent = finalLength;
};

function calMass(inputValue) {
    // pound
    let pound = inputValue * 2.20462;
    pound = pound.toFixed(3);

    // kilo
    let kilo = inputValue * 0.453592;
    kilo = kilo.toFixed(3);
    
    let finalLength = `${inputValue} kilos = ${pound} pounds | ${inputValue} pounds = ${kilo} kilos`;
    const container2pE3 = document.getElementById("id-p-sub-container-3");
    container2pE3.textContent = finalLength;
};