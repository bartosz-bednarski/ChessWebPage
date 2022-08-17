const moves = [
  {
    id: 1,
    header: "Queen",
    value: "9 Points",
    photo: "./Pictures/queenMoves.jpg",
    article: `The queen moves any number of vacant squares horizontally, vertically, or diagonally.`,
  },
  {
    id: 2,
    header: "King",
    value: "Unique",
    photo: "./Pictures/kingMoves.jpg",
    article: `The king moves exactly one square horizontally, vertically, or diagonally. A special move with the king known as castling is allowed only once per player, per game `,
  },
  {
    id: 3,
    header: "Pawn",
    value: "1 Point",
    photo: "./Pictures/pawnMoves.jpg",
    article: `A pawn moves straight forward one square, if that square is vacant. If it has not yet moved, a pawn also has the option of moving two squares straight forward, provided both squares are vacant. Pawns cannot move backwards. A pawn, unlike other pieces, captures differently from how it moves. <br>A pawn can capture an enemy piece on either of the two squares diagonally in front of the pawn. It cannot move to those squares when vacant except when capturing en passant.`,
  },
  {
    id: 4,
    header: "Knight",
    value: "3 Points",
    photo: "./Pictures/knightMoves.jpg",
    article: `A knight moves to one of the nearest squares not on the same rank, file, or diagonal. (This can be thought of as moving two squares horizontally then one square vertically, or moving one square horizontally then two squares vertically—i.e. in an "L" pattern.) The knight is not blocked by other pieces; it jumps to the new location.`,
  },
  {
    id: 5,
    header: "Bishop",
    value: "3 Points",
    photo: "./Pictures/bishopMoves.jpg",
    article: `A bishop moves any number of vacant squares diagonally.`,
  },
  {
    id: 6,
    header: "Rook",
    value: "5 Points",
    photo: "./Pictures/rookMoves.jpg",
    article: `A rook moves any number of vacant squares horizontally or vertically. It also is moved when castling.`,
  },
];

const movesMain = document.querySelector(".movesMain");
const figuresBtn = document.querySelectorAll(".figuresBtn");

window.addEventListener("DOMContentLoaded", function () {
  dispalyMovesItems(moves);
});

figuresBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const value = e.currentTarget.dataset.id;
    const movesCategory = moves.filter(function (movesItem) {
      if (movesItem.value === value) {
        return movesItem;
      }
    });
    if (value === "All") {
      dispalyMovesItems(moves);
    } else {
      dispalyMovesItems(movesCategory);
    }
  });
});

function dispalyMovesItems(movesItems) {
  let displayMoves = movesItems.map(function (item) {
    return `<article class="articleGrid">
    <div class="moveInfo">
      <header>
        <h4 id="moveHeader">${item.header}</h4>
      </header>
      <p class="moveText">${item.article}</p>
    </div>
    <img src=${item.photo} class="moveJpg" alt=${item.header} />
  </article>`;
  });
  displayMoves = displayMoves.join("");
  movesMain.innerHTML = displayMoves;
}
