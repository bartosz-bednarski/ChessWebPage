const figures = [
  {
    id: 1,
    header: "Queen",
    photo: '<img src="./Pictures/queenR.jpg">',
    article: `The queen is the most powerful of all of the chess pieces and is often used in early and brutal attacks. It is important to learn how to make your opponent fear your dangerous queen!`,
  },
  {
    id: 2,
    header: "King",
    photo: '<img src="./Pictures/kingR.jpg">',
    article: `The king is not the most powerful chess piece, but it is the most important one! If a king is put in checkmate, then the game is over! Two very important aspects of the game of chess are attacking your opponent's king while also keeping your own king safe and protected. Let's learn more! `,
  },
  {
    id: 3,
    header: "Pawn",
    photo: '<img src="./Pictures/ponR.jpg">',
    article: `The pawn is the least powerful chess piece, but it can be promoted into any other chess piece (except for a king). As Philidor once said, "Pawns are the soul of chess!"`,
  },
  {
    id: 4,
    header: "Knight",
    photo: '<img src="./Pictures/knightR.jpg">',
    article: `The knight is the trickiest piece in chess! It moves very differently than other pieces and can deliver the dreaded fork or even a smothered mate!`,
  },
  {
    id: 5,
    header: "Bishop",
    photo: '<img src="./Pictures/bishopR.jpg">',
    article: `The bishop is an interesting piece because it can move as far as it wants but only on diagonals. It is a long-range piece and can be very dangerous! `,
  },
  {
    id: 6,
    header: "Rook",
    photo: '<img src="./Pictures/rookR.jpg">',
    article: `The rook is the second most powerful piece in chess! It is a long-range piece and is notorious for delivering back-rank checkmates!`,
  },
];
//Queen
document.getElementById("QueenHeader").innerHTML = figures[0].header;
document.getElementById("QueenJpg").innerHTML = figures[0].photo;
document.getElementById("QueenText").innerHTML = figures[0].article;

//King
document.getElementById("KingHeader").innerHTML = figures[1].header;
document.getElementById("KingJpg").innerHTML = figures[1].photo;
document.getElementById("KingText").innerHTML = figures[1].article;

//Pon
document.getElementById("PonHeader").innerHTML = figures[2].header;
document.getElementById("PonJpg").innerHTML = figures[2].photo;
document.getElementById("PonText").innerHTML = figures[2].article;

//Knight
document.getElementById("KnightHeader").innerHTML = figures[3].header;
document.getElementById("KnightJpg").innerHTML = figures[3].photo;
document.getElementById("KnightText").innerHTML = figures[3].article;

//Bishop
document.getElementById("BishopHeader").innerHTML = figures[4].header;
document.getElementById("BishopJpg").innerHTML = figures[4].photo;
document.getElementById("BishopText").innerHTML = figures[4].article;

//Rock
document.getElementById("RookHeader").innerHTML = figures[5].header;
document.getElementById("RookJpg").innerHTML = figures[5].photo;
document.getElementById("RookText").innerHTML = figures[5].article;

const allBtn = document.getElementById("figuresAllBtn");
const oneBtn = document.getElementById("figuresOneBtn");
const threeBtn = document.getElementById("figuresThreeBtn");
const fiveBtn = document.getElementById("figuresFiveBtn");
const nineBtn = document.getElementById("figuresNineBtn");

const king = document.querySelector(".figuresMainKing");
const queen = document.querySelector(".figuresMainQueen");
const pon = document.querySelector(".figuresMainPon");
const bishop = document.querySelector(".figuresMainBishop");
const rook = document.querySelector(".figuresMainRook");
const knight = document.querySelector(".figuresMainKnight");

allBtn.addEventListener("click", function () {
  displayAll();
});

oneBtn.addEventListener("click", function () {
  displayAll();
  king.style.display = "none";
  pon.style.gridColumn = "1";
  knight.style.display = "none";
  bishop.style.display = "none";
  rook.style.display = "none";
  queen.style.display = "none";
});

threeBtn.addEventListener("click", function () {
  displayAll();
  king.style.display = "none";
  pon.style.display = "none";
  knight.style.gridRow = "1";
  bishop.style.gridRow = "1";
  rook.style.display = "none";
  queen.style.display = "none";
});

fiveBtn.addEventListener("click", function () {
  displayAll();
  king.style.display = "none";
  pon.style.display = "none";
  knight.style.display = "none";
  bishop.style.display = "none";
  rook.style.gridRow = "1";
  queen.style.display = "none";
});
nineBtn.addEventListener("click", function () {
  displayAll();
  king.style.display = "none";
  pon.style.display = "none";
  knight.style.display = "none";
  bishop.style.display = "none";
  rook.style.display = "none";
  queen.style.gridRow = "1";
  queen.style.gridColumn = "1";
});

function displayAll() {
  king.style.display = "grid";
  king.style.gridColumn = "1";
  king.style.gridRow = "1";

  pon.style.display = "grid";
  pon.style.gridColumn = "2";
  pon.style.gridRow = "1";

  knight.style.display = "grid";
  knight.style.gridColumn = "1";
  knight.style.gridRow = "2";

  bishop.style.display = "grid";
  bishop.style.gridColumn = "2";
  bishop.style.gridRow = "2";

  rook.style.display = "grid";
  rook.style.gridColumn = "1";
  rook.style.gridRow = "3";

  queen.style.display = "grid";
  queen.style.gridColumn = "2";
  queen.style.gridRow = "3";
}
