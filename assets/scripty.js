//VARIABLES
let charArr = [
    '<i class="fas fa-user-ninja char-icon ninja"></i>',
    '<i class="fas fa-user-secret char-icon spy"></i>'
];
let charSelect = document.getElementById('character-selection');
let yourChar = document.querySelector('.your-char');
let compChar = document.querySelector('.comp-char');

//FUNCTIONS
function fighterChoice () {
    if(this.value == "ninja") {
        yourChar.innerHTML = charArr[0];
        compChar.innerHTML = charArr[1];
    } else {
        yourChar.innerHTML = charArr[1];
        compChar.innerHTML = charArr[0];
    }
}

//EVENTS
charSelect.addEventListener('change', fighterChoice);