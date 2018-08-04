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
let yourSelf = 0;
let bringCompBack;
let compAttack;

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
        yourSelf++;
    }
    charSelect.style.visibility = "hidden";
}

function compDamage() {
    if (compHealth <= 0) {
        compWeapons.style.visibility = "hidden";
        compChar.innerHTML = `<img class="splatter" src="assets/images/splatter.png" alt="splatter">`;
        return
    }
    else if(yourHealth <= 0) {
        yourWeapons.style.visibility = "hidden";
        yourChar.innerHTML = `<img class="splatter" src="assets/images/splatter.png" alt="splatter">`;
        return
    }
    else if (this == yourWeapon1) {
        compHealth -= yourWeapon1Damage;
        if (compHealth > 0) {
            compChar.innerHTML = `<span class="damage-flash">${compHealth}</span>`;
        } else {
            compChar.innerHTML = `<span class="damage-flash">0</span>`;
        }
        bringCompBack = setTimeout(compReturn, 250);
        compAttack = setTimeout(yourDamage, Math.floor((Math.random() * 750) + 150));
    }
    else if (this == yourWeapon2) {
        compHealth -= yourWeapon2Damage;
        if (compHealth > 0) {
            compChar.innerHTML = `<span class="damage-flash">${compHealth}</span>`;
        } else {
            compChar.innerHTML = `<span class="damage-flash">0</span>`;
        }
        bringCompBack = setTimeout(compReturn, 250);
        compAttack = setTimeout(yourDamage, Math.floor((Math.random() * 750) + 150));
    }
}

function compReturn() {
    if (yourSelf == 0) {
        if (compHealth > 50) {
            compChar.innerHTML = charArr[1];
        }
        else if (compHealth > 15) {
            compChar.innerHTML = '<i class="fas fa-user-secret char-icon yellow-spy"></i>';
        }
        else {
            compChar.innerHTML = '<i class="fas fa-user-secret char-icon red-spy"></i>';
        }
    } else {
        if (compHealth > 50) {
            compChar.innerHTML = charArr[0];
        }
        else if (compHealth > 15) {
            compChar.innerHTML = '<i class="fas fa-user-ninja char-icon yellow-ninja"></i>';
        }
        else {
            compChar.innerHTML = '<i class="fas fa-user-ninja char-icon red-ninja"></i>';
        }
    }
}

function yourDamage() {
    let compPick = Math.floor(Math.random() * 4);
    if (compPick <= 1) {
        yourHealth -= compWeapon1Damage;
        if (yourHealth > 0) {
            yourChar.innerHTML = `<span class="damage-flash">${yourHealth}</span>`;
        } else {
            yourChar.innerHTML = `<span class="damage-flash">0</span>`;
        }
        bringCompBack = setTimeout(yourReturn, 250);
    }
    else {
        yourHealth -= compWeapon2Damage;
        if (yourHealth > 0) {
            yourChar.innerHTML = `<span class="damage-flash">${yourHealth}</span>`;
        } else {
            yourChar.innerHTML = `<span class="damage-flash">0</span>`;
        }
        bringCompBack = setTimeout(yourReturn, 250);
    }
}

function yourReturn() {
    if (yourSelf == 0) {
        if (yourHealth > 50) {
            yourChar.innerHTML = charArr[0];
        }
        else if (yourHealth > 15) {
            yourChar.innerHTML = '<i class="fas fa-user-ninja char-icon yellow-ninja"></i>';
        }
        else {
            yourChar.innerHTML = '<i class="fas fa-user-ninja char-icon red-ninja"></i>';
        }
    } else {
        if (yourHealth > 50) {
            yourChar.innerHTML = charArr[1];
        }
        else if (yourHealth > 15) {
            yourChar.innerHTML = '<i class="fas fa-user-secret char-icon yellow-spy"></i>';
        }
        else {
            yourChar.innerHTML = '<i class="fas fa-user-secret char-icon red-spy"></i>';
        }
    }
}

//EVENTS
charSelect.addEventListener('change', fighterChoice);
yourWeapon1.addEventListener('click', compDamage);
yourWeapon2.addEventListener('click', compDamage);