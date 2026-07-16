const hero = document.getElementById("hero-background");

const words = [
    "NANDI",
    "BEYOND THE LIMIT",
    "WHERE PAIN BECOMES MELODY",
    "HOPE",
    "PAIN",
    "CHANGE",
    "MELODY"
];

for(let i = 0; i < 80; i++){

    const word = document.createElement("span");

    word.className = "bg-word";

    word.innerText = words[Math.floor(Math.random()*words.length)];

    word.style.left = Math.random()*100 + "%";

    word.style.top = Math.random()*100 + "%";

    word.style.fontSize = (20 + Math.random()*40) + "px";

    word.style.animationDuration = (12 + Math.random()*12) + "s";

    word.style.animationDelay = -(Math.random()*20) + "s";

    hero.appendChild(word);

}