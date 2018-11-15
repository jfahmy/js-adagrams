const Adagrams = {
  drawLetters() {
    let tiles = ["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E",
    "E","E","E","E","E","F","F","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N",
    "N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T",
    "T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z"];
    let drawn_tiles = []
    for (let i = 0; i < 10; i++) {
      let rand = tiles.splice(Math.floor(Math.random() * tiles.length), 1)[0];
      drawn_tiles.push(rand)
    }
  return drawn_tiles;
  },
  usesAvailableLetters(input, lettersInHand) {
    let letters = lettersInHand.slice();
    let word = input.split("")
    for (let char of word) {
      let letter_index = letters.indexOf(char);
      if (letter_index > -1) {
        letters.splice(letter_index, 1);
      } else {
        return false;
      }
    }
    return true;
  },
  scoreWord(word) {
    let score = 0;
    word = word.toUpperCase();
    word.split("").forEach(function (letter) {
      switch(letter) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'L':
        case 'N':
        case 'R':
        case 'S':
        case 'T':
          score += 1;
          break;
        case "D":
        case "G":
          score += 2
          break;
        case "B":
        case "C":
        case "M":
        case "P":
          score += 3;
          break;
        case "F":
        case "H":
        case "V":
        case "W":
        case "Y":
          score += 4;
          break;
        case "K":
          score += 5;
          break;
        case "J":
        case "X":
          score += 8;
          break;
        case "Q":
        case "Z":
          score += 10;
          break;
      }
    });
    if (word.length > 6) {
      score += 8;
    }
    return score;
  },
  highestScoreFrom(words) {
    let bestWord = {"word": null, "score": 0};
    for (let word of words) {
      console.log(this.scoreWord(word))
      if (this.scoreWord(word) > bestWord["score"]){
        bestWord["score"] = this.scoreWord(word)
        bestWord["word"] = word
      }
    }
  }
};


// Do not remove this line or your tests will break!
export default Adagrams;
