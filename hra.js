"use strict"

console.log("funguji");




/*const player = "circle";

const game = () => {
  if (player === "circle") {
    document.querySelector("button").classList.add("board__field--circle");
    document.querySelector(".tabs__play").innerHTML = ""




  }
}





<img class="circle__image" src="images/circle.svg" alt="Kolečko"/>*/





let player = "circle";

const play = (event) => {
  if (player === "circle") {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    const tabsPlay = document.querySelector('.tabs');
    tabsPlay.innerHTML = `<p class="tabs tabs__play">Hraje:<img
    class= "icon" src="images/circle.svg"
    alt="Ikona kolečka"/></p>`;
    player = "cross";
  } else if (player === "cross") {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    const tabsPlay = document.querySelector('.tabs');
    tabsPlay.innerHTML = `<p class="tabs tabs__play">Hraje:<img
      class= "icon" src="images/cross.svg"
      alt="Ikona křížku"/></p>`;
    player = "circle";
  }
}

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', play);
}