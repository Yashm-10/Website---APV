let sentences = ["New location, Same Unbeatable Flavors!"]

const cursor = document.querySelector("#cursor"); 

const animatedSpan = document.querySelector("#animated"); 

for (let i of sentences) {
    console.log(i)
    for (j of i) {
        console.log(j)
    }

}

document.addEventListener("DOMContentLoaded", animation)

function animation() {
    setInterval(blinkerFunction, 500);
    addCharacters();
}

let sentenceCounter = 0;
let characterCounter = 0;

function addCharacters() {
    if (characterCounter<sentences[sentenceCounter].length) {
        animatedSpan.textContent += sentences[sentenceCounter][characterCounter]
        characterCounter++;
        setTimeout(addCharacters, 100);
    } else {
        setTimeout(removeCharacter, 2000);
    }
}

    function removeCharacter() {
        if (characterCounter>=0) { 
            animatedSpan.textContent =animatedSpan.textContent.slice(0, characterCounter);
        characterCounter--;
        setTimeout(removeCharacter, 50); 
        }
        else {
            characterCounter=0
            setTimeout(addCharacters, 100);
        }
    }

function blinkerFunction() {
    cursor.classList.toggle("hidden")
}
