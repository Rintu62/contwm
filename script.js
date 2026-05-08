// script.js

console.log("Website Loaded Successfully!");
// Share Button Function

function sharePage(){

  if(navigator.share){

    navigator.share({
      title: "My Website",
      text: "Check out my website!",
      url: window.location.href
    });

  }else{

    alert("Sharing not supported in this browser");

  }

}



// =========================
// TEXT CHANGER
// =========================

// const words = [
//   "Programmer",
//   "Creator",
//   "Freelancer",
//   "Web Developer",
//   "Designer"
// ];

// let index = 0;

// const changingText = document.getElementById("changing-text");

// function changeWord(){

//   changingText.textContent = words[index];

//   index++;

//   if(index >= words.length){
//     index = 0;
//   }

// }

// changeWord();

// setInterval(changeWord, 2000);


// WORDS

const words = [
  "AI/ML Developer",
  "Programmer",
  "Creator",
  "Freelancer",
];

let wordIndex = 0;
let charIndex = 0;

const changingText = document.getElementById("changing-text");

// TYPE FUNCTION

function typeEffect() {

  if(charIndex < words[wordIndex].length){

    changingText.textContent += words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 120);

  }

  else{

    setTimeout(eraseEffect, 1200);

  }

}

// ERASE FUNCTION

function eraseEffect(){

  if(changingText.textContent.length > 0){

    changingText.textContent =
    changingText.textContent.slice(0, -1);

    setTimeout(eraseEffect, 60);

  }

  else{

    wordIndex++;

    if(wordIndex >= words.length){
      wordIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeEffect, 300);

  }

}

// START

typeEffect();




// calling


// CALL FUNCTION

function makeCall(){

  let confirmCall = confirm(
    "Do you want to say Hiiii?"
  );

  if(confirmCall){

    window.location.href = "tel:+916287578055";

  }

}