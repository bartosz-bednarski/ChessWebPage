const reviews = [
  {
    id: 1,
    imie: "Adam",
    img: "https://www.clipartmax.com/png/small/325-3254282_waiter-working-png-file-icon-waiter-png.png",
    tekst: "Bardzo fajna strona. Widać że coś się tutaj dzieje. Oby tak dalej.",
    oceny: "7/10",
  },
  {
    id: 2,
    imie: "Ewa",
    img: "https://www.clipartmax.com/png/small/293-2931307_account-avatar-male-man-person-profile-icon-profile-icons.png",
    tekst: "Nie polecam słaby design. Nic nowego tutaj nie wniesiono",
    oceny: "1/10",
  },
  {
    id: 3,
    imie: "Piotr",
    img: "https://www.clipartmax.com/png/small/100-1005846_waiter-free-icon-avatar-profile-circle-png.png",
    tekst:
      "Szału nie ma, ale widac, że ktoś się stara czegoś nauczyć. Dam 6 za zapał.",
    oceny: "6/10",
  },
  {
    id: 4,
    imie: "Michał",
    img: "https://www.clipartmax.com/png/small/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png",
    tekst: "Poprawiłbym kolory i czcionkę. Reszta ok.",
    oceny: "8/10",
  },
];

const nick = document.querySelector(".nick");
const opinia = document.querySelector(".opinia");
const ocena = document.querySelector(".ocena");
const img = document.getElementById("personImg");
const prevBtn = document.querySelector(".prevOpinion");
const nextBtn = document.querySelector(".nextOpinion");
const randomBtn = document.getElementById("randomOpinion");
//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  nick.textContent = item.imie;
  opinia.textContent = item.tekst;
  ocena.textContent = item.oceny;
}
console.log(showPerson);

//show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

function random() {
  return Math.floor(Math.random() * reviews.length);
}
randomBtn.addEventListener("click", function () {
  showPerson(random());
});
