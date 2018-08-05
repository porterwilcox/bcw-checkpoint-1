//VARIABLES
let charArr = [
    '<i class="fas fa-user-ninja char-icon ninja"></i>',
    '<i class="fas fa-user-secret char-icon spy"></i>'
];
let weapArr = [
    '<i class="fas fa-hand-lizard weap-icon jab"></i>', '<i class="fas fa-hand-paper weap-icon chop"></i>',
    '<i class="fas fa-pen weap-icon pen"></i>', '<i class="fas fa-search weap-icon magnify-glass"></i>',
    '<img class="ninja-star" src="assets/images/ninja-star.png" alt="ninja-star">', '<i class="fas fa-bomb weap-icon bomb"></i>'
];
let healthArr = [
    '<i class="fas fa-apple-alt apple"></i>',
    '<i class="fas fa-shield-alt shield"></i>'
]
let charSelect = document.getElementById('character-selection');
let yourChar = document.querySelector('.your-char');
let compChar = document.querySelector('.comp-char');
let yourWeapons = document.querySelector('.your-weapons');
let compWeapons = document.querySelector('.comp-weapons');
let yourWeapon1 = document.getElementById('your-weapon-1');
let yourWeapon2 = document.getElementById('your-weapon-2');
let yourWeapon3 = document.getElementById('your-weapon-3');
let compWeapon1 = document.getElementById('comp-weapon-1');
let compWeapon2 = document.getElementById('comp-weapon-2');
let yourApple = document.querySelector('.your-apple');
let yourAppleInt = 0;
let compApple = document.querySelector('.comp-apple');
let compAppleInt = 0;
let yourShield = document.querySelector('.your-shield');
let yourShieldInt = 0;
let compShield = document.querySelector('.comp-shield');
let compShieldInt = 0;
let restart = document.querySelector('.restart');
let yourWeapon1Damage = 6;
let yourWeapon2Damage = 10;
let yourWeapon3Damage = 20;
let yourWeapon3Int = 0;
let compWeapon1Damage = 8;
let compWeapon2Damage = 14;
let compWeapon3Damage = 28;
let compHealth = 100;
let yourHealth = 100;
let yourSelf = 0;
let bringBack;
let compAttack;

//FUNCTIONS
function fighterChoice() {
    if (this.value == "ninja") {
        yourChar.innerHTML = charArr[0];
        yourWeapon1.innerHTML = weapArr[0];
        yourWeapon2.innerHTML = weapArr[1];
        yourWeapon3.innerHTML = weapArr[4];
        yourApple.innerHTML = healthArr[0];
        yourShield.innerHTML = healthArr[1];
        compChar.innerHTML = charArr[1];
        compWeapon1.innerHTML = weapArr[2];
        compWeapon2.innerHTML = weapArr[3];
        compApple.innerHTML = healthArr[0];
        compShield.innerHTML = healthArr[1];
    } else {
        yourChar.innerHTML = charArr[1];
        yourWeapon1.innerHTML = weapArr[2];
        yourWeapon2.innerHTML = weapArr[3];
        yourWeapon3.innerHTML = weapArr[5];
        yourApple.innerHTML = healthArr[0];
        yourShield.innerHTML = healthArr[1];
        compChar.innerHTML = charArr[0];
        compWeapon1.innerHTML = weapArr[0];
        compWeapon2.innerHTML = weapArr[1];
        compApple.innerHTML = healthArr[0];
        compShield.innerHTML = healthArr[1];
        yourSelf++;
    }
    charSelect.style.visibility = "hidden";
}

function compDamage() {
    if (compHealth <= 0) {
        restart.style.visibility = "visible";
        compWeapons.style.visibility = "hidden";
        compApple.style.visibility = "hidden";
        compShield.style.visibility = "hidden";
        compChar.innerHTML = `<img class="splatter" src="assets/images/splatter.png" alt="splatter">`;
        return
    }
    else if (yourHealth <= 0) {
        restart.style.visibility = "visible";
        yourWeapons.style.visibility = "hidden";
        yourApple.style.visibility = "hidden";
        yourShield.style.visibility = "hidden";
        yourChar.innerHTML = `<img class="splatter" src="assets/images/splatter.png" alt="splatter">`;
        return
    }
    else if (this == yourWeapon1 && compShieldInt > 0 && compShieldInt < 4) {
        compShieldInt++;
        compHealth -= (yourWeapon1Damage / 2);
        if (compHealth > 0) {
            compChar.innerHTML = `<span class="damage-flash">${compHealth}</span>`;
        } else {
            compChar.innerHTML = `<span class="damage-flash">1</span>`;
        }
        if (compShieldInt == 4) {
            compShield.style.visibility = 'hidden';
        }
        bringBack = setTimeout(compReturn, 250);
        compAttack = setTimeout(yourDamage, Math.floor((Math.random() * 750) + 150));
    }
    else if (this == yourWeapon2 && compShieldInt > 0 && compShieldInt < 4) {
        compShieldInt++;
        compHealth -= (yourWeapon2Damage / 2);
        if (compHealth > 0) {
            compChar.innerHTML = `<span class="damage-flash">${compHealth}</span>`;
        } else {
            compChar.innerHTML = `<span class="damage-flash">1</span>`;
        }
        if (compShieldInt == 4) {
            compShield.style.visibility = 'hidden';
        }
        bringBack = setTimeout(compReturn, 250);
        compAttack = setTimeout(yourDamage, Math.floor((Math.random() * 750) + 150));
    }
    else if (this == yourWeapon3 && compShieldInt > 0 && compShieldInt < 4) {
        compShieldInt++;
        compHealth -= (yourWeapon3Damage / 2);
        if (compHealth > 0) {
            compChar.innerHTML = `<span class="damage-flash">${compHealth}</span>`;
        } else {
            compChar.innerHTML = `<span class="damage-flash">1</span>`;
        }
        if (compShieldInt == 4) {
            compShield.style.visibility = 'hidden';
        }
        bringBack = setTimeout(compReturn, 250);
        compAttack = setTimeout(yourDamage, Math.floor((Math.random() * 750) + 150));
    }
    else if (this == yourWeapon1) {
        compHealth -= yourWeapon1Damage;
        if (compHealth > 0) {
            compChar.innerHTML = `<span class="damage-flash">${compHealth}</span>`;
        } else {
            compChar.innerHTML = `<span class="damage-flash">1</span>`;
        }
        bringBack = setTimeout(compReturn, 250);
        compAttack = setTimeout(yourDamage, Math.floor((Math.random() * 750) + 150));
    }
    else if (this == yourWeapon2) {
        compHealth -= yourWeapon2Damage;
        if (compHealth > 0) {
            compChar.innerHTML = `<span class="damage-flash">${compHealth}</span>`;
        } else {
            compChar.innerHTML = `<span class="damage-flash">1</span>`;
        }
        bringBack = setTimeout(compReturn, 250);
        compAttack = setTimeout(yourDamage, Math.floor((Math.random() * 750) + 150));
    }
    else if (this == yourWeapon3) {
        compHealth -= yourWeapon3Damage;
        if (compHealth > 0) {
            compChar.innerHTML = `<span class="damage-flash">${compHealth}</span>`;
        } else {
            compChar.innerHTML = `<span class="damage-flash">1</span>`;
        }
        bringBack = setTimeout(compReturn, 250);
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

function compHealthRegen() {
    if (compAppleInt == 1) {
        if ((compHealth + 25) > 100) {
            compHealth = 100;
        } else {
            compHealth += 25;
        }
        compChar.innerHTML = `<span class="damage-flash">${compHealth}</span>`;
        compApple.innerHTML = `<i class="fas fa-apple-alt old-apple"></i>`
        bringBack = setTimeout(compReturn, 250);
    }
    else if (compAppleInt == 2) {
        if ((compHealth + 15) > 100) {
            compHealth = 100;
        } else {
            compHealth += 15;
        }
        compChar.innerHTML = `<span class="damage-flash">${compHealth}</span>`;
        compApple.style.visibility = 'hidden';
        bringBack = setTimeout(compReturn, 250);
    }
}

function compShieldOn() {
    compShieldInt++;
    compShield.innerHTML = `<i class="fas fa-shield-alt shield-on-1"></i>`;
}

function yourDamage() {
    if (compShieldInt == 0) {
        let compShieldYN = Math.floor(Math.random() * 5);
        if (compShieldYN == 3) {
            compShieldOn();
            return;
        }
    }
    let compPick = Math.floor(Math.random() * 10);
    if (yourShieldInt >= 1 && yourShieldInt <= 3) {
        yourShieldInt++;
        if (compPick <= 2) {
            yourHealth -= (compWeapon1Damage / 2);
            if (yourHealth > 0) {
                yourChar.innerHTML = `<span class="damage-flash">${yourHealth}</span>`;
            } else {
                yourChar.innerHTML = `<span class="damage-flash">1</span>`;
            }
            bringBack = setTimeout(yourReturn, 250);
        }
        else if (compPick <= 7) {
            yourHealth -= (compWeapon2Damage / 2);
            if (yourHealth > 0) {
                yourChar.innerHTML = `<span class="damage-flash">${yourHealth}</span>`;
            } else {
                yourChar.innerHTML = `<span class="damage-flash">1</span>`;
            }
            bringBack = setTimeout(yourReturn, 250);
        }
        else if (compPick > 7) {
            yourHealth -= (compWeapon3Damage / 2);
            if (yourHealth > 0) {
                yourChar.innerHTML = `<span class="damage-flash">${yourHealth}</span>`;
            } else {
                yourChar.innerHTML = `<span class="damage-flash">1</span>`;
            }
            bringBack = setTimeout(yourReturn, 250);
        }
        return
    }
    else if (yourShieldInt == 4) {
        yourShield.style.visibility = "hidden";
    }
    if (compPick <= 2) {
        yourHealth -= compWeapon1Damage;
        if (yourHealth > 0) {
            yourChar.innerHTML = `<span class="damage-flash">${yourHealth}</span>`;
        } else {
            yourChar.innerHTML = `<span class="damage-flash">1</span>`;
        }
        bringBack = setTimeout(yourReturn, 250);
    }
    else if (compPick <= 7) {
        yourHealth -= compWeapon2Damage;
        if (yourHealth > 0) {
            yourChar.innerHTML = `<span class="damage-flash">${yourHealth}</span>`;
        } else {
            yourChar.innerHTML = `<span class="damage-flash">1</span>`;
        }
        bringBack = setTimeout(yourReturn, 250);
    }
    else if (compPick > 9) {
        yourHealth -= compWeapon3Damage;
        if (yourHealth > 0) {
            yourChar.innerHTML = `<span class="damage-flash">${yourHealth}</span>`;
        } else {
            yourChar.innerHTML = `<span class="damage-flash">1</span>`;
        }
        bringBack = setTimeout(yourReturn, 250);
    }
    else {
        compAppleInt++;
        if (compAppleInt < 3) {
            compHealthRegen();
        }
        else {
            yourDamage();
        }
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

function yourHealthRegen() {
    if (yourAppleInt == 0) {
        yourAppleInt++;
        if ((yourHealth + 25) > 100) {
            yourHealth = 100;
        } else {
            yourHealth += 25;
        }
        yourChar.innerHTML = `<span class="damage-flash">${yourHealth}</span>`;
        yourApple.innerHTML = `<i class="fas fa-apple-alt old-apple"></i>`
        bringBack = setTimeout(yourReturn, 250);
        compAttack = setTimeout(yourDamage, Math.floor((Math.random() * 250) + 500));
    }
    else if (yourAppleInt == 1) {
        yourAppleInt++;
        if ((yourHealth + 15) > 100) {
            yourHealth = 100;
        } else {
            yourHealth += 15;
        }
        yourChar.innerHTML = `<span class="damage-flash">${yourHealth}</span>`;
        yourApple.style.visibility = 'hidden';
        bringBack = setTimeout(yourReturn, 250);
        compAttack = setTimeout(yourDamage, Math.floor((Math.random() * 250) + 500));
    }
}

function yourShieldOn() {
    yourShieldInt++;
    yourShield.innerHTML = `<i class="fas fa-shield-alt shield-on-1"></i>`;
    compAttack = setTimeout(yourDamage, Math.floor((Math.random() * 250) + 500));
}

function weapon3Constraint() {
    if (yourWeapon3Int > 0){
        yourWeapon3.style.visibility = "hidden";
    }
    yourWeapon3Int++;
}

function restartPage() {
    location.reload();
}

// function anime() {
//     let e = this;
//     let pos = 0;
//     let attackAct = setInterval(myFrame, 50);
//     function myFrame() {
//         if (pos == 20) {
//             clearInterval(attackAct);
//         } else {
//             pos++;
//             e.style.left = `${pos}em`;
//         }
//     }
// }

//EVENTS
charSelect.addEventListener('change', fighterChoice);
yourWeapon1.addEventListener('click', compDamage);
yourWeapon2.addEventListener('click', compDamage);
yourWeapon3.addEventListener('click', compDamage);
yourWeapon3.addEventListener('click', weapon3Constraint);
restart.addEventListener('click', restartPage);
yourApple.addEventListener('click', yourHealthRegen);
yourShield.addEventListener('click', yourShieldOn);
// yourWeapon1.addEventListener('click', anime);
// yourWeapon2.addEventListener('click', anime);
