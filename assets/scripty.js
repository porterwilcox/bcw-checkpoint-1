//VARIABLES
let charArr = [
    '<i class="fas fa-user-ninja char-icon ninja"></i>',
    '<i class="fas fa-user-secret char-icon spy"></i>'
];
let weapArr = [
    '<i class="fas fa-hand-paper weap-icon"></i>', '<i class="fas fa-hand-lizard weap-icon"></i>',
    '<i class="fas fa-pen weap-icon"></i>', '<i class="fas fa-paperclip weap-icon"></i>'
]
let charSelect = document.getElementById('character-selection');
let yourChar = document.querySelector('.your-char');
let compChar = document.querySelector('.comp-char');
let yourWeapons = document.querySelector('.your-weapons');
let compWeapons = document.querySelector('.comp-weapons');
let yourWeapon1 = document.getElementById('your-weapon-1');
let yourWeapon2 = document.getElementById('your-weapon-2');
let compWeapon1 = document.getElementById('comp-weapon-1');
let compWeapon2 = document.getElementById('comp-weapon-2');
let yourWeapon1Damage = 5;
let yourWeapon2Damage = 10;
let compWeapon1Damage = 5;
let compWeapon2Damage = 10;
let compHealth = 100;
let yourHealth = 100;
let self = 0;
let bringCompBack;

//FUNCTIONS
function fighterChoice() {
    if (this.value == "ninja") {
        yourChar.innerHTML = charArr[0];
        yourWeapon1.innerHTML = weapArr[0];
        yourWeapon2.innerHTML = weapArr[1];
        compChar.innerHTML = charArr[1];
        compWeapon1.innerHTML = weapArr[2];
        compWeapon2.innerHTML = weapArr[3];
    } else {
        yourChar.innerHTML = charArr[1];
        yourWeapon1.innerHTML = weapArr[2];
        yourWeapon2.innerHTML = weapArr[3];
        compChar.innerHTML = charArr[0];
        compWeapon1.innerHTML = weapArr[0];
        compWeapon2.innerHTML = weapArr[1];
        self++;
    }
    charSelect.style.visibility = "hidden";
}

function compDamage() {
    if (this == yourWeapon1){
        compHealth -= yourWeapon1Damage;
        compChar.innerHTML = `<span style="font-size: 15em"> ${compHealth}</span>`;
        bringCompBack = setTimeout(compReturn, 150);
    } 
    else if (this == yourWeapon2){
        compHealth -= yourWeapon2Damage;
        compChar.innerHTML = `<span style="font-size: 15em"> ${compHealth}</span>`;
        bringCompBack = setTimeout(compReturn, 150);
    } 
}

function compReturn() {
    if (self == 0){
        compChar.innerHTML = charArr[1];
    } else {
        compChar.innerHTML = charArr[0];
    }
}

//EVENTS
charSelect.addEventListener('change', fighterChoice);
yourWeapon1.addEventListener('click', compDamage);
yourWeapon2.addEventListener('click', compDamage);