// let suits = ["S", "C", "H", "D"];
// let values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// let deck = [];

// for (let i = 0; i < values.length; i++) {
//   for (let j = 0; j < suits.length; j++) {
//     deck.push(values[i] + suits[j]);
//   }
// }

// console.log(deck);

// document.getElementById("cardImg").src = `img/2C.png`;
let i = 0;
while (i < 800) {
  console.log("hello");
  i++;
}

document.getElementById("RedBtn").addEventListener("click", redCheck);

let winAmount = 0;
let lossAmount = 0;
let win = true;

let CardValue1 = 0;
let CardValue2 = 0;

function redCheck() {
  let card = Math.random();
  if (card < 0.019) {
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/ace_of_diamonds.png" alt="" />`;
    CardValue1 = 1;
  } else if (card < 0.037) {
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/2_of_diamonds.png" alt="" />`;
    CardValue1 = 2;
  } else if (card < 0.056) {
    CardValue1 = 3;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/3_of_diamonds.png" alt="" />`;
  } else if (card < 0.075) {
    CardValue1 = 4;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/4_of_diamonds.png" alt="" />`;
  } else if (card < 0.094) {
    CardValue1 = 5;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/5_of_diamonds.png" alt="" />`;
  } else if (card < 0.113) {
    CardValue1 = 6;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/6_of_diamonds.png" alt="" />`;
  } else if (card < 0.132) {
    CardValue1 = 7;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/7_of_diamonds.png" alt="" />`;
  } else if (card < 0.151) {
    CardValue1 = 8;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/8_of_diamonds.png" alt="" />`;
  } else if (card < 0.17) {
    CardValue1 = 9;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/9_of_diamonds.png" alt="" />`;
  } else if (card < 0.189) {
    CardValue1 = 10;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/10_of_diamonds.png" alt="" />`;
  } else if (card < 0.208) {
    CardValue1 = 11;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/jack_of_diamonds.png" alt="" />`;
  } else if (card < 0.227) {
    CardValue1 = 12;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/queen_of_diamonds.png" alt="" />`;
  } else if (card < 0.246) {
    CardValue1 = 13;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/king_of_diamonds.png" alt="" />`;
  } else if (card < 0.265) {
    CardValue1 = 1;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/ace_of_hearts.png" alt="" />`;
  } else if (card < 0.284) {
    CardValue1 = 2;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/2_of_hearts.png" alt="" />`;
  } else if (card < 0.303) {
    CardValue1 = 3;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/3_of_hearts.png" alt="" />`;
  } else if (card < 0.322) {
    CardValue1 = 4;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/4_of_hearts.png" alt="" />`;
  } else if (card < 0.341) {
    CardValue1 = 5;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/5_of_hearts.png" alt="" />`;
  } else if (card < 0.36) {
    CardValue1 = 6;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/6_of_hearts.png" alt="" />`;
  } else if (card < 0.379) {
    CardValue1 = 7;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/7_of_hearts.png" alt="" />`;
  } else if (card < 0.398) {
    CardValue1 = 8;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/8_of_hearts.png" alt="" />`;
  } else if (card < 0.417) {
    CardValue1 = 9;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/9_of_hearts.png" alt="" />`;
  } else if (card < 0.436) {
    CardValue1 = 10;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/10_of_hearts.png" alt="" />`;
  } else if (card < 0.455) {
    CardValue1 = 11;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/jack_of_hearts.png" alt="" />`;
  } else if (card < 0.474) {
    CardValue1 = 12;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/queen_of_hearts.png" alt="" />`;
  } else if (card < 0.493) {
    CardValue1 = 13;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/king_of_hearts.png" alt="" />`;
  } else {
    document.getElementById("Card1").innerHTML = `FAIL`;
    const Wait = setTimeout(reset, 1000);
    lossAmount = lossAmount + 1;
    document.getElementById("lossAmount").innerHTML = lossAmount;
  }
}
document.getElementById("BlkBtn").addEventListener("click", blkCheck);

function blkCheck() {
  let card = Math.random();
  if (card < 0.493) {
    document.getElementById("Card1").innerHTML = `FAIL`;
    const Wait = setTimeout(reset, 1000);
    lossAmount = lossAmount + 1;
    document.getElementById("lossAmount").innerHTML = lossAmount;
  } else if (card < 0.512) {
    CardValue1 = 1;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/ace_of_spades.png" alt="" />`;
  } else if (card < 0.531) {
    CardValue1 = 2;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/2_of_spades.png" alt="" />`;
  } else if (card < 0.55) {
    CardValue1 = 3;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/3_of_spades.png" alt="" />`;
  } else if (card < 0.569) {
    CardValue1 = 4;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/4_of_spades.png" alt="" />`;
  } else if (card < 0.588) {
    CardValue1 = 5;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/5_of_spades.png" alt="" />`;
  } else if (card < 0.607) {
    CardValue1 = 6;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/6_of_spades.png" alt="" />`;
  } else if (card < 0.626) {
    CardValue1 = 7;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/7_of_spades.png" alt="" />`;
  } else if (card < 0.645) {
    CardValue1 = 8;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/8_of_spades.png" alt="" />`;
  } else if (card < 0.664) {
    CardValue1 = 9;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/9_of_spades.png" alt="" />`;
  } else if (card < 0.683) {
    CardValue1 = 10;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/10_of_spades.png" alt="" />`;
  } else if (card < 0.702) {
    CardValue1 = 11;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/jack_of_spades.png" alt="" />`;
  } else if (card < 0.721) {
    CardValue1 = 12;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/queen_of_spades.png" alt="" />`;
  } else if (card < 0.74) {
    CardValue1 = 13;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/king_of_spades.png" alt="" />`;
  } else if (card < 0.759) {
    CardValue1 = 1;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/ace_of_clubs.png" alt="" />`;
  } else if (card < 0.778) {
    CardValue1 = 2;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/2_of_clubs.png" alt="" />`;
  } else if (card < 0.797) {
    CardValue1 = 3;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/3_of_clubs.png" alt="" />`;
  } else if (card < 0.816) {
    CardValue1 = 4;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/4_of_clubs.png" alt="" />`;
  } else if (card < 0.835) {
    CardValue1 = 5;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/5_of_clubs.png" alt="" />`;
  } else if (card < 0.854) {
    CardValue1 = 6;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/6_of_clubs.png" alt="" />`;
  } else if (card < 0.873) {
    CardValue1 = 7;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/7_of_clubs.png" alt="" />`;
  } else if (card < 0.892) {
    CardValue1 = 8;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/8_of_clubs.png" alt="" />`;
  } else if (card < 0.911) {
    CardValue1 = 9;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/9_of_clubs.png" alt="" />`;
  } else if (card < 0.93) {
    CardValue1 = 10;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/10_of_clubs.png" alt="" />`;
  } else if (card < 0.949) {
    CardValue1 = 11;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/jack_of_clubs.png" alt="" />`;
  } else if (card < 0.968) {
    CardValue1 = 12;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/queen_of_clubs.png" alt="" />`;
  } else if (card < 0.987) {
    CardValue1 = 13;
    document.getElementById(
      "Card1"
    ).innerHTML = `<img src="img/king_of_clubs.png" alt="" />`;
  }
}

document.getElementById("Hbtn").addEventListener("click", Hcheck);
function Hcheck() {
  let card = Math.random();
  if (card < 0.019) {
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/ace_of_diamonds.png" alt="" />`;
    CardValue2 = 1;
  } else if (card < 0.037) {
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/2_of_diamonds.png" alt="" />`;
    CardValue2 = 2;
  } else if (card < 0.056) {
    CardValue2 = 3;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/3_of_diamonds.png" alt="" />`;
  } else if (card < 0.075) {
    CardValue2 = 4;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/4_of_diamonds.png" alt="" />`;
  } else if (card < 0.094) {
    CardValue2 = 5;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/5_of_diamonds.png" alt="" />`;
  } else if (card < 0.113) {
    CardValue2 = 6;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/6_of_diamonds.png" alt="" />`;
  } else if (card < 0.132) {
    CardValue2 = 7;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/7_of_diamonds.png" alt="" />`;
  } else if (card < 0.151) {
    CardValue2 = 8;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/8_of_diamonds.png" alt="" />`;
  } else if (card < 0.17) {
    CardValue2 = 9;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/9_of_diamonds.png" alt="" />`;
  } else if (card < 0.189) {
    CardValue2 = 10;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/10_of_diamonds.png" alt="" />`;
  } else if (card < 0.208) {
    CardValue2 = 11;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/jack_of_diamonds.png" alt="" />`;
  } else if (card < 0.227) {
    CardValue2 = 12;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/queen_of_diamonds.png" alt="" />`;
  } else if (card < 0.246) {
    CardValue2 = 13;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/king_of_diamonds.png" alt="" />`;
  } else if (card < 0.265) {
    CardValue2 = 1;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/ace_of_hearts.png" alt="" />`;
  } else if (card < 0.284) {
    CardValue2 = 2;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/2_of_hearts.png" alt="" />`;
  } else if (card < 0.303) {
    CardValue2 = 3;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/3_of_hearts.png" alt="" />`;
  } else if (card < 0.322) {
    CardValue2 = 4;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/4_of_hearts.png" alt="" />`;
  } else if (card < 0.341) {
    CardValue2 = 5;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/5_of_hearts.png" alt="" />`;
  } else if (card < 0.36) {
    CardValue2 = 6;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/6_of_hearts.png" alt="" />`;
  } else if (card < 0.379) {
    CardValue2 = 7;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/7_of_hearts.png" alt="" />`;
  } else if (card < 0.398) {
    CardValue2 = 8;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/8_of_hearts.png" alt="" />`;
  } else if (card < 0.417) {
    CardValue2 = 9;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/9_of_hearts.png" alt="" />`;
  } else if (card < 0.436) {
    CardValue2 = 10;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/10_of_hearts.png" alt="" />`;
  } else if (card < 0.455) {
    CardValue2 = 11;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/jack_of_hearts.png" alt="" />`;
  } else if (card < 0.474) {
    CardValue2 = 12;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/queen_of_hearts.png" alt="" />`;
  } else if (card < 0.493) {
    CardValue2 = 13;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/king_of_hearts.png" alt="" />`;
  } else if (card < 0.512) {
    CardValue2 = 1;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/ace_of_spades.png" alt="" />`;
  } else if (card < 0.531) {
    CardValue2 = 2;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/2_of_spades.png" alt="" />`;
  } else if (card < 0.55) {
    CardValue2 = 3;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/3_of_spades.png" alt="" />`;
  } else if (card < 0.569) {
    CardValue2 = 4;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/4_of_spades.png" alt="" />`;
  } else if (card < 0.588) {
    CardValue2 = 5;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/5_of_spades.png" alt="" />`;
  } else if (card < 0.607) {
    CardValue2 = 6;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/6_of_spades.png" alt="" />`;
  } else if (card < 0.626) {
    CardValue2 = 7;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/7_of_spades.png" alt="" />`;
  } else if (card < 0.645) {
    CardValue2 = 8;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/8_of_spades.png" alt="" />`;
  } else if (card < 0.664) {
    CardValue2 = 9;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/9_of_spades.png" alt="" />`;
  } else if (card < 0.683) {
    CardValue2 = 10;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/10_of_spades.png" alt="" />`;
  } else if (card < 0.702) {
    CardValue2 = 11;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/jack_of_spades.png" alt="" />`;
  } else if (card < 0.721) {
    CardValue2 = 12;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/queen_of_spades.png" alt="" />`;
  } else if (card < 0.74) {
    CardValue2 = 13;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/king_of_spades.png" alt="" />`;
  } else if (card < 0.759) {
    CardValue2 = 1;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/ace_of_clubs.png" alt="" />`;
  } else if (card < 0.778) {
    CardValue2 = 2;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/2_of_clubs.png" alt="" />`;
  } else if (card < 0.797) {
    CardValue2 = 3;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/3_of_clubs.png" alt="" />`;
  } else if (card < 0.816) {
    CardValue2 = 4;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/4_of_clubs.png" alt="" />`;
  } else if (card < 0.835) {
    CardValue2 = 5;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/5_of_clubs.png" alt="" />`;
  } else if (card < 0.854) {
    CardValue2 = 6;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/6_of_clubs.png" alt="" />`;
  } else if (card < 0.873) {
    CardValue2 = 7;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/7_of_clubs.png" alt="" />`;
  } else if (card < 0.892) {
    CardValue2 = 8;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/8_of_clubs.png" alt="" />`;
  } else if (card < 0.911) {
    CardValue2 = 9;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/9_of_clubs.png" alt="" />`;
  } else if (card < 0.93) {
    CardValue2 = 10;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/10_of_clubs.png" alt="" />`;
  } else if (card < 0.949) {
    CardValue2 = 11;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/jack_of_clubs.png" alt="" />`;
  } else if (card < 0.968) {
    CardValue2 = 12;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/queen_of_clubs.png" alt="" />`;
  } else if (card < 0.987) {
    CardValue2 = 13;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/king_of_clubs.png" alt="" />`;
  }
  if (CardValue1 == 0) {
    document.getElementById("Card2").innerHTML = `FAIL`;
    const Wait = setTimeout(reset, 1000);
    lossAmount = lossAmount + 1;
    document.getElementById("lossAmount").innerHTML = lossAmount;
  } else if (CardValue1 < CardValue2) {
    winAmount = winAmount + 1;
    document.getElementById("winAmount").innerHTML = winAmount;
    const Wait = setTimeout(reset, 1000);
  } else {
    document.getElementById("Card2").innerHTML = `FAIL`;
    const Wait = setTimeout(reset, 1000);
    lossAmount = lossAmount + 1;
    document.getElementById("lossAmount").innerHTML = lossAmount;
  }
}

document.getElementById("Lbtn").addEventListener("click", Lcheck);
function Lcheck() {
  let card = Math.random();
  if (card < 0.019) {
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/ace_of_diamonds.png" alt="" />`;
    CardValue2 = 1;
  } else if (card < 0.037) {
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/2_of_diamonds.png" alt="" />`;
    CardValue2 = 2;
  } else if (card < 0.056) {
    CardValue2 = 3;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/3_of_diamonds.png" alt="" />`;
  } else if (card < 0.075) {
    CardValue2 = 4;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/4_of_diamonds.png" alt="" />`;
  } else if (card < 0.094) {
    CardValue2 = 5;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/5_of_diamonds.png" alt="" />`;
  } else if (card < 0.113) {
    CardValue2 = 6;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/6_of_diamonds.png" alt="" />`;
  } else if (card < 0.132) {
    CardValue2 = 7;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/7_of_diamonds.png" alt="" />`;
  } else if (card < 0.151) {
    CardValue2 = 8;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/8_of_diamonds.png" alt="" />`;
  } else if (card < 0.17) {
    CardValue2 = 9;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/9_of_diamonds.png" alt="" />`;
  } else if (card < 0.189) {
    CardValue2 = 10;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/10_of_diamonds.png" alt="" />`;
  } else if (card < 0.208) {
    CardValue2 = 11;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/jack_of_diamonds.png" alt="" />`;
  } else if (card < 0.227) {
    CardValue2 = 12;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/queen_of_diamonds.png" alt="" />`;
  } else if (card < 0.246) {
    CardValue2 = 13;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/king_of_diamonds.png" alt="" />`;
  } else if (card < 0.265) {
    CardValue2 = 1;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/ace_of_hearts.png" alt="" />`;
  } else if (card < 0.284) {
    CardValue2 = 2;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/2_of_hearts.png" alt="" />`;
  } else if (card < 0.303) {
    CardValue2 = 3;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/3_of_hearts.png" alt="" />`;
  } else if (card < 0.322) {
    CardValue2 = 4;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/4_of_hearts.png" alt="" />`;
  } else if (card < 0.341) {
    CardValue2 = 5;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/5_of_hearts.png" alt="" />`;
  } else if (card < 0.36) {
    CardValue2 = 6;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/6_of_hearts.png" alt="" />`;
  } else if (card < 0.379) {
    CardValue2 = 7;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/7_of_hearts.png" alt="" />`;
  } else if (card < 0.398) {
    CardValue2 = 8;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/8_of_hearts.png" alt="" />`;
  } else if (card < 0.417) {
    CardValue2 = 9;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/9_of_hearts.png" alt="" />`;
  } else if (card < 0.436) {
    CardValue2 = 10;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/10_of_hearts.png" alt="" />`;
  } else if (card < 0.455) {
    CardValue2 = 11;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/jack_of_hearts.png" alt="" />`;
  } else if (card < 0.474) {
    CardValue2 = 12;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/queen_of_hearts.png" alt="" />`;
  } else if (card < 0.493) {
    CardValue2 = 13;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/king_of_hearts.png" alt="" />`;
  } else if (card < 0.512) {
    CardValue2 = 1;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/ace_of_spades.png" alt="" />`;
  } else if (card < 0.531) {
    CardValue2 = 2;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/2_of_spades.png" alt="" />`;
  } else if (card < 0.55) {
    CardValue2 = 3;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/3_of_spades.png" alt="" />`;
  } else if (card < 0.569) {
    CardValue2 = 4;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/4_of_spades.png" alt="" />`;
  } else if (card < 0.588) {
    CardValue2 = 5;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/5_of_spades.png" alt="" />`;
  } else if (card < 0.607) {
    CardValue2 = 6;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/6_of_spades.png" alt="" />`;
  } else if (card < 0.626) {
    CardValue2 = 7;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/7_of_spades.png" alt="" />`;
  } else if (card < 0.645) {
    CardValue2 = 8;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/8_of_spades.png" alt="" />`;
  } else if (card < 0.664) {
    CardValue2 = 9;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/9_of_spades.png" alt="" />`;
  } else if (card < 0.683) {
    CardValue2 = 10;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/10_of_spades.png" alt="" />`;
  } else if (card < 0.702) {
    CardValue2 = 11;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/jack_of_spades.png" alt="" />`;
  } else if (card < 0.721) {
    CardValue2 = 12;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/queen_of_spades.png" alt="" />`;
  } else if (card < 0.74) {
    CardValue2 = 13;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/king_of_spades.png" alt="" />`;
  } else if (card < 0.759) {
    CardValue2 = 1;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/ace_of_clubs.png" alt="" />`;
  } else if (card < 0.778) {
    CardValue2 = 2;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/2_of_clubs.png" alt="" />`;
  } else if (card < 0.797) {
    CardValue2 = 3;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/3_of_clubs.png" alt="" />`;
  } else if (card < 0.816) {
    CardValue2 = 4;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/4_of_clubs.png" alt="" />`;
  } else if (card < 0.835) {
    CardValue2 = 5;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/5_of_clubs.png" alt="" />`;
  } else if (card < 0.854) {
    CardValue2 = 6;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/6_of_clubs.png" alt="" />`;
  } else if (card < 0.873) {
    CardValue2 = 7;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/7_of_clubs.png" alt="" />`;
  } else if (card < 0.892) {
    CardValue2 = 8;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/8_of_clubs.png" alt="" />`;
  } else if (card < 0.911) {
    CardValue2 = 9;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/9_of_clubs.png" alt="" />`;
  } else if (card < 0.93) {
    CardValue2 = 10;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/10_of_clubs.png" alt="" />`;
  } else if (card < 0.949) {
    CardValue2 = 11;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/jack_of_clubs.png" alt="" />`;
  } else if (card < 0.968) {
    CardValue2 = 12;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/queen_of_clubs.png" alt="" />`;
  } else if (card < 0.987) {
    CardValue2 = 13;
    document.getElementById(
      "Card2"
    ).innerHTML = `<img src="img/king_of_clubs.png" alt="" />`;
  }
  if (CardValue1 == 0) {
    document.getElementById("Card2").innerHTML = `FAIL`;
    const Wait = setTimeout(reset, 1000);
    lossAmount = lossAmount + 1;
    document.getElementById("lossAmount").innerHTML = lossAmount;
  } else if (CardValue1 > CardValue2) {
    winAmount = winAmount + 1;
    document.getElementById("winAmount").innerHTML = winAmount;
    const Wait = setTimeout(reset, 1000);
  } else {
    document.getElementById("Card2").innerHTML = `FAIL`;
    const Wait = setTimeout(reset, 1000);
    lossAmount = lossAmount + 1;
    document.getElementById("lossAmount").innerHTML = lossAmount;
  }
}

function reset() {
  document.getElementById(
    "Card2"
  ).innerHTML = `Is the next card higher or lower?`;
  document.getElementById("Card1").innerHTML = `Is the next card Red or Black?`;
  CardValue1 = 0;
  CardValue2 = 0;
}
