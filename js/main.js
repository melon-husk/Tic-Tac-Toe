const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

document.getElementById("mainButton").addEventListener("click", () => {
  document.getElementById("mainButton").style.display = "none";
  let textEle = document.getElementById("someText");
  textEle.style.display = "block";
  textEle.textContent = "clicked";
});
for (let index = 0; index < 9; index++) {
  document.getElementById(index).addEventListener("click", () => {
    let element = document.getElementById(index)
    element.textContent = (element.textContent == "X")?"O":"X" 
  })
  
}
class Player {
  constructor(playerName) {
    this.playerName = playerName;
  }
  addScore(wins, loses) {
    this.playerWins = wins;
    this.playerLoses = loses;
  }
}
