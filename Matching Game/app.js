//make an array of our card images

const cardArray = [
  {name: "rose",
  img: "images/rose.png"},
  {name: "rose",
    img: "images/rose.png"},
  {name: "daffodil",
    img: "images/daffodil.jpg"},
  {name: "daffodil",
    img: "images/daffodil.jpg"},
  {name: "bluebell",
    img: "images/bluebell.png"},
  {name: "bluebell",
    img: "./images/bluebell.png"},
  {name: "daisy",
    img: "./images/daisy.jpg"},
  {name: "daisy",
    img: "./images/daisy.jpg"},
  {name: "lily",
    img: "./images/lily.png"},
  {name: "lily",
    img: "./images/lily.png"},
  {name: "poppy",
    img: "./images/poppy.png"},
  {name: "poppy",
    img: "./images/poppy.png"}
]

//randomise Card Array

cardArray.sort(() => 0.5-Math.random());




// make the board

const grid= document.querySelector(".grid");
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
let resultDisplay = document.getElementById("result");
let gamesWon = document.getElementById("gamesWon");
let gamesWonCounter = 0;



//create a board

function createBoard() {
  for (let i=0; i<cardArray.length; i++){
    let card = document.createElement('img');
    card.src= "images/questionMark.png";
    card.style.width= "100px";
    card.style.height= "100px";
    card.dataId= i;
    card.setAttribute("class", "card");
    card.addEventListener("click",
    turnCard=()=>{
  const cardId= card.dataId;
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  card.src= cardArray[cardId].img
  console.log(card.src)
  if (cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)
  }
}
);



     grid.appendChild(card)
    }
  }

  //check for matches
function checkForMatch() {
  let cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]){
    //alert('You found a match!')
    cards[optionOneId].setAttribute('src', './images/whiteSquare.png')
    cards[optionTwoId].setAttribute('src', './images/whiteSquare.png')
    cardsWon.push(cardsChosen)
  }
  else{
    cards[optionOneId].src= './images/questionMark.png';
    cards[optionTwoId].src= './images/questionMark.png';
  }

  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.innerHTML = cardsWon.length;

  if (cardsWon.length === cardArray.length/2){
    resultDisplay.innerHTML= "0";
    alert("Congratulations, you win!");
    document.querySelector(".grid").innerHTML= "";
    createBoard();
    cardsWon= [];
    gamesWonCounter= gamesWonCounter+1;
    gamesWon.innerHTML= gamesWonCounter;

  }

}




  createBoard();
