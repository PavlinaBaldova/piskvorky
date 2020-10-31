"use strict"

console.log("funguji");



/*========část 5.=========*/

const boardSize = 10 // 10x10
const fields = document.querySelectorAll('button') // Selektor pozměň tak, aby odpovídal tvému kódu.

const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < fields.length) {
		if (field === fields[fieldIndex]) {
			break
		}
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
}

const getField = (row, column) => fields[row * boardSize + column]

const getSymbol = (field) => {
	// Název třídy přizpůsob tvému kódu.
	if (field.classList.contains('board__field--cross')) {
		return 'cross'
	} else if (field.classList.contains('board__field--circle')) {
		return 'circle'
	}
}

const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field);
	const symbol = getSymbol(field);

	let i

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}




	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
}

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
  if (isWinningMove(event.target)) {
    if (event.target.classList.contains('board__field--cross')) {
      setTimeout(() => confirm('Vyhrává křížek! Chcete další hru?'), 170);
      setTimeout(() => location.reload(), 170);
    } else if (event.target.classList.contains('board__field--circle')) {
      setTimeout(() => confirm('Vyhrává kolečko! Chcete další hru?'), 140);
      setTimeout(() => location.reload(), 140);
    }
  } 
};


const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', play);
}