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
    player = "cross";
  } else if (player === "cross") {
     event.target.classList.add('board__field--cross');
     event.target.disabled = true;
     player = "circle";
  }
}

  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', play);
  }






  