const mainContainer = document.getElementById("mainContainer");
const myForm = document.getElementById("myForm");
const firstQuestion = document.getElementById("firstQuestion");
const inputSatu = document.getElementById("inputSatu");

const secondQuestion = document.getElementById("secondQuestion");
const inputDua = document.getElementById("inputDua");

const thirdQuestion = document.getElementById("thirdQuestion");
const inputTiga = document.getElementById("inputTiga");

const fourthQuestion = document.getElementById("fourthQuestion");
const inputEmpat = document.getElementById("inputEmpat");

const fifthQuestion = document.getElementById("fifthQuestion");
const inputLima = document.getElementById("inputLima");

const button = document.getElementById("button");
function validation() {
    if (inputSatu.value.trim() == "" || inputDua.value.trim() == "" || inputTiga.value.trim() == "" || inputEmpat.value.trim() == "" || inputLima.value.trim() == "") {
        alert("Tolong isi semua kolom jawaban dan bukan spasi kosong");
        return false;
    } else {
        return true;
    }
}

myForm.addEventListener("submit", function (event) {
    event.preventDefault()

    console.log("Formulir disubmit, tetapi action tidak dieksekusi");
})

function updateInputSatuClass() {
    if (inputSatu.value.trim() != "") {
        inputSatu.className = "input-text nyala";
    } else {
        inputSatu.className = "input-text";
    }
}

function updateInputDuaClass() {
    if (inputDua.value != "") {
        inputDua.className = "input-text nyala";
    } else {
        inputDua.className = "input-text";
    }
}

function updateInputTigaClass() {
    if (inputTiga.value != "") {
        inputTiga.className = "input-text nyala";
    } else {
        inputTiga.className = "input-text";
    }
}

function updateInputEmpatClass() {
    if (inputEmpat.value != "") {
        inputEmpat.className = "input-text nyala";
    } else {
        inputEmpat.className = "input-text";
    }
}

function updateInputLimaClass() {
    if (inputLima.value != "") {
        inputLima.className = "input-text nyala";
    } else {
        inputLima.className = "input-text";
    }
}

inputSatu.addEventListener("input", updateInputSatuClass);
inputDua.addEventListener("input", updateInputDuaClass);
inputTiga.addEventListener("input", updateInputTigaClass);
inputEmpat.addEventListener("input", updateInputEmpatClass);
inputLima.addEventListener("input", updateInputLimaClass);

let score = 0;

function write() {
    let elemen = document.createElement("h1");
    elemen.textContent = `Nilai anda adalah ${score * 20}%`;
    mainContainer.appendChild(elemen)
}

function updateScoreInputSatu() {
    if (inputSatu.value === "satu") {
        score += 1;
        console.log("score +1");
        console.log(score);
    }
}

function updateScoreInputDua() {
    if (inputDua.value === "dua") {
        score += 1;
        console.log("score +1");
        console.log(score);
    }
}

function updateScoreInputTiga() {
    if (inputTiga.value === "tiga") {
        score += 1;
        console.log("score +1");
        console.log(score);
    }
}

function updateScoreInputEmpat() {
    if (inputEmpat.value === "empat") {
        score += 1;
        console.log("score +1");
        console.log(score);
    }
}

function updateScoreInputLima() {
    if (inputLima.value === "lima") {
        score += 1;
        console.log("score +1");
        console.log(score);
    }
}

button.addEventListener("click", updateScoreInputSatu);
button.addEventListener("click", updateScoreInputDua);
button.addEventListener("click", updateScoreInputTiga);
button.addEventListener("click", updateScoreInputEmpat);
button.addEventListener("click", updateScoreInputLima);
button.addEventListener("click", write);