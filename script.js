arrayforinput = [
  {element: document.getElementById("0")},
  {element: document.getElementById("1")},
  {element: document.getElementById("2")},
  {element: document.getElementById("3")},
  {element: document.getElementById("4")},
  {element: document.getElementById("5")},
  {element: document.getElementById("6")},
  {element: document.getElementById("7")},
  {element: document.getElementById("8")},
];

let winner = false;


function renderUsersOption (index) {
  if (winner == false) {
    if (arrayforinput[index].element.innerHTML === '') {
      value = arrayforinput[index].element;
      value.innerHTML = 'X';
      checkRows()
    }
    ComputerMove();
  }
}


function ComputerMove() {
  index = Math.ceil(Math.random() * 8)
  if (winner == false) {
    if (arrayforinput[index].element.innerHTML === '') {
      value = arrayforinput[index].element;
      value.innerHTML = 'O';
      checkRows();
    }
    else if (testForDraw()) {
    }
    else {
      ComputerMove();
    }
    }
}

  
  function getValuesOfButtons() {
    let value1 = arrayforinput[0].element.innerHTML;
    let value2 = arrayforinput[1].element.innerHTML;
    let value3 = arrayforinput[2].element.innerHTML;
    let value4 = arrayforinput[3].element.innerHTML;
    let value5 = arrayforinput[4].element.innerHTML;
    let value6 = arrayforinput[5].element.innerHTML;
    let value7 = arrayforinput[6].element.innerHTML;
    let value8 = arrayforinput[7].element.innerHTML;
    let value9 = arrayforinput[8].element.innerHTML;
    return [value1, value2, value3, value4, value5, value6, value7, value8, value9]
}


  function testForDraw () {
    if (
      arrayforinput[0].element.innerHTML != ''&&
      arrayforinput[1].element.innerHTML != ''&&
      arrayforinput[2].element.innerHTML != ''&&
      arrayforinput[3].element.innerHTML != ''&&
      arrayforinput[4].element.innerHTML != ''&&
      arrayforinput[5].element.innerHTML != ''&&
      arrayforinput[6].element.innerHTML != ''&&
      arrayforinput[7].element.innerHTML != ''&&
      arrayforinput[8].element.innerHTML != ''
    ) {
      renderWinner('DRAW');
      winner = false;
      return true
    }
}
  

function checkRows () {
  let result = getValuesOfButtons()
  if (result[0] == result[1] && result[0] == result[2] && result[0] != '') {
    renderWinner(result[0]+' is the winner');
    winner = true;
  }
  else if (result[3] == result[4] && result[3] == result[5] && result[3] != '') {
    renderWinner(result[3]+' is the winner');
    winner = true;
  }
  else if (result[6] == result[7] && result[6] == result[8] && result[6] != '') {
    renderWinner(result[6]+' is the winner');
    winner = true;
  }
  else {
    checkColumns();
  }
}


function checkColumns () {
  let result = getValuesOfButtons()
  if (result[0] == result[3] && result[0] == result[6] && result[0] != '') {
    renderWinner(result[0]+' is the winner');
    winner = true;
  }
  else if (result[1] == result[4] && result[1] == result[7] && result[1] != '') {
    renderWinner(result[1]+' is the winner');
    winner = true;
  }
  else if (result[2] == result[5] && result[2] == result[8] && result[2] != '') {
    renderWinner(result[2]+' is the winner');
    winner = true;
  }
  else {
    checkDiagonals()
  }
}


function checkDiagonals () {
  let result = getValuesOfButtons()
  if (result[0] == result[4] && result[0] == result[8] && result[0] != '') {
    renderWinner(result[0]+' is the winner');
    winner = true;
  }
  else if (result[2] == result[4] && result[2] == result[6] && result[2] != '') {
    renderWinner(result[2]+' is the winner');
    winner = true;
  }
  else {
    console.log('No winner')
  }
}


function renderWinner (text) {
  textElement = document.getElementById("winnerStatus");
  textElement.innerHTML = text;
}


function resetBoard () {
  let result = getValuesOfButtons()
  arrayforinput[0].element.innerHTML = '';
  arrayforinput[1].element.innerHTML = '';
  arrayforinput[2].element.innerHTML = '';
  arrayforinput[3].element.innerHTML = '';
  arrayforinput[4].element.innerHTML = '';
  arrayforinput[5].element.innerHTML = '';
  arrayforinput[6].element.innerHTML = '';
  arrayforinput[7].element.innerHTML = '';
  arrayforinput[8].element.innerHTML = '';
  renderWinner('')
  winner = false
  console.log('Board has been reset.')
}

