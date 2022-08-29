const players = [
  {
    id: 1,
    bio: `GM Magnus Carlsen is the current world chess champion. To many
    people, he’s the best to ever play the game, although GMs Garry
    Kasparov and Bobby Fischer remain in the conversation. At any
    rate, the clear and remarkable point is that before turning 30
    years old, Carlsen has already earned a spot at the top.
    <br /><br />It’s easy to see why. The 13-year-old Norwegian
    prodigy drew Kasparov and defeated GM Anatoly Karpov at the same
    event in 2004, one month before he became the second-youngest GM
    in history (and still eighth-youngest as of 2021). In 2009, he
    became the youngest player to break the 2800-rating threshold (a
    record only broken by GM Alireza Firouzja in 2021).<br /><br />
    Then Carlsen transitioned from young world-class player to
    all-time great. He captured the world number-one ranking in 2011
    and still hasn’t let go of it. He won the world title in 2013
    and has successfully defended it four times (2014, 2016, 2018,
    and 2021). Additionally, he has won multiple world titles in
    rapid (twice) and blitz (four times) time controls, achieved the
    highest rating ever, and racked up several elite tournament
    wins, including four Norway Chess victories and seven in Wijk
    aan Zee.<br /><br />The amazing part is it seems like there’s
    much more ahead for Carlsen. In October 2020 Carlsen's 125-game
    undefeated streak came to an end (he scored 42 wins and 83 draws
    during this streak), setting yet another world record. If he
    continues performing the way he has, Carlsen could create
    something truly legendary. In an era of chess that’s more
    competitive than ever, he’s far ahead of the opposition.`,
    picture: `<img src="./Pictures/Carlsen.jpg" />`,
    nameAndSurname: `Magnus Carlsen`,
    born: `Nov 30, 1990 (age 31)`,
    bornPlace: `Tønsberg, Norway`,
    federation: `Norway`,
    chesscom: "https://www.chess.com/member/magnuscarlsen",
    twitter: "https://twitter.com/magnuscarlsen",
    facebook: "https://www.facebook.com/magnuschess/",
    instagram: "https://www.instagram.com/magnus_carlsen/",
    rank: 1,
    classic: 2864,
    fast: 2834,
    blitz: 2831,
  },
  {
    id: 2,
    name: `Ding Liren`,
    bio: `Ding Liren is a Chinese super grandmaster who many people consider 
    to be a primary contender for Magnus Carlsen’s world title. Ding won his
     first Chinese Chess Championship at the age of 16, making him the youngest 
     to ever do so. In the 2017 and 2019 Chess World Cup, he became the first 
     player in history to reach the finals twice in a row. The latter result 
     means that Ding would play in the 2020 Candidates Tournament, which decided
      who gets a shot at the world title.<br><br>
    A few years before turning 30, Ding has already amassed an impressive chess 
    resume. His three Chinese titles are joined by two team gold medals and one
     individual gold medal at the Chess Olympiads (plus one team gold medal at 
        the World Team Championships).<br><br>
    From August 2017 to November 2018, Ding held a 100-game unbeaten streak in 
    top-level chess competition—the longest in history until Carlsen broke it 
    in October 2019. In 2018, Ding entered the world’s top-five chess players 
    (May) and broke the 2800-rating mark (September), and he remains in those
     categories today.<br><br>
    One of Ding’s crowning achievements so far is his peak rating, one of the 
    highest in history. His 2816 in November 2018 matches Veselin Topalov and
     Hikaru Nakamura for the tenth-best rating of all time.`,
    picture: `<img src="./Pictures/DingLiren.png" />`,
    nameAndSurname: `Ding Liren`,
    born: `Oct 24, 1992 (age 29)`,
    bornPlace: `Wenzhou, Zhejiang, China`,
    federation: `China`,
    chesscom: "https://www.chess.com/member/chefshouse",
    twitter: "",
    facebook: "",
    instagram: "",
    rank: 2,
    classic: 2808,
    fast: 2836,
    blitz: 2788,
  },
  {
    id: 3,
    bio: `GM Ian Nepomniachtchi (“Nepo” for short) is a Russian super grandmaster who won the 2020-21 Candidates Tournament and challenged GM Magnus Carlsen for the 2021 World Championship. <br><br>
    Nepomniachtchi has a terrific overall record against world champions. At standard time controls, he has positive scores against GM Vladimir Kramnik (+5 -4 =4), GM Viswanathan Anand (+3 -2 =5), and even had a winning record against Carlsen (+4 -1 =6, with two wins coming during their youth careers) before their 2021 match. Nepomniachtchi also has positive records against GM Anatoly Karpov (+2 -0 =0 in 2013) and GM Garry Kasparov (+2 -0 =3 from 2017-21) in rapid/blitz, the only formats he has played them in.<br><br>
    A Chess.com member, Nepomniachtchi plays under the account lachesisq. In 2021, he signed a sponsorship deal with Chess.com.`,

    picture: `<img src="./Pictures/IanNepomniachtchi.png" />`,
    nameAndSurname: `Ian Nepomniachtchi`,
    born: `Jul 14, 1990 (age 32)`,
    bornPlace: `Briańsk, Russian FSRR, Soviet Union`,
    federation: `Russia`,
    chesscom: "https://www.chess.com/member/lachesisq",
    twitter: "https://twitter.com/lachesisq",
    facebook: "https://www.facebook.com/ian.nepomniachtchi",
    instagram: "",
    rank: 3,
    classic: 2792,
    fast: 2795,
    blitz: 2791,
  },
  {
    id: 4,
    bio: `The prodigy who broke the record held by GM Hikaru Nakamura for America's youngest chess grandmaster, Fabiano Caruana, has climbed the mountain of chess and reached the summit. This grandmaster has had a ranking as high as number-two in the world and has won numerous tournaments in his career. In 2018 the American faced GM Magnus Carlsen at the World Chess Championship in London in 2018, losing in the tiebreak playoffs.`,
    picture: `<img src="./Pictures/FabianoCaruana.jpeg" />`,
    nameAndSurname: `Fabiano Luigi Caruana`,
    born: `Jul 30, 1992 (age 29)`,
    bornPlace: `Miami, Floryda, USA`,
    federation: `USA`,
    chesscom: "https://www.chess.com/member/fabianocaruana",
    twitter: "https://twitter.com/fabianocaruana",
    facebook: "https://www.facebook.com/CaruanaChess",
    instagram: "https://www.instagram.com/fabianocaruana/",
    rank: 4,
    classic: 2776,
    fast: 2766,
    blitz: 2847,
  },
  {
    id: 5,
    bio: `Levon Aronian is an Armenian-American super grandmaster who has long been among the world’s best players. He first entered the top 20 in 2005 and still hasn’t lost that distinction. Most of those 15 years or so have been spent in the top 10. In 2021, he switched federations from Armenia to the U.S.<br><br>
    Aronian has been a model for steady, elite-level chess play in recent years, but don’t let his consistency overshadow what he has accomplished so far. In the first half of the 2010s—November 2010 to September 2014—he was in the top three. In March 2014, his rating peaked at 2830. That made Aronian the fourth-highest rated player in history—only Magnus Carlsen, Garry Kasparov and Fabiano Caruana have achieved higher ratings.<br><br>
    Aronian’s resume also includes world championships in Fischer random chess, blitz and rapid; multiple gold team medals for the Armenian national team; an individual Armenian national title; two Chess World Cup victories and much more. The Armenian hero is a few years away from turning 40, which means that he could add quite a bit more to a legacy that has enriched the game.`,
    picture: `<img src="./Pictures/LevonAronian.jpeg" />`,
    nameAndSurname: `Levon Aronian`,
    born: `Oct 6, 1982 (age 39)`,
    bornPlace: `Yerevan, Armenian SSR, Soviet Union`,
    federation: `USA`,
    chesscom: "https://www.chess.com/member/levonaronian",
    twitter: "",
    facebook: "",
    instagram: "",
    rank: 5,
    classic: 2775,
    fast: 2728,
    blitz: 2850,
  },
  {
    id: 6,
    bio: `Wesley So is a Filipino-American super grandmaster who is among the world’s best chess players. He began as a chess prodigy who entered tournaments at nine years old. At 14, he became the ninth youngest GM in history. The next year, he became the youngest player to pass the 2600 rating threshold, breaking Magnus Carlsen’s record.<br><br>
    So’s peak rating of 2822 in March 2017 made him the number-two player in the world behind Carlsen. It also earned his place as the fifth highest-rated player ever, trailing only Carlsen, Garry Kasparov, Fabiano Caruana, and Levon Aronian. Later, in 2019, So won the first-ever FIDE-sanctioned Fischer Random World Chess Championship after routing Carlsen 13.5-2.5 in the final. In February 2021, he became a U.S. citizen.<br><br>
    Given all his accomplishments, multiple national championships and an elite tournament resume—while still in his mid-20s—So may develop into an all-time great.`,
    picture: `<img src="./Pictures/WesleySo.png" />`,
    nameAndSurname: `Wesley So`,
    born: `Oct 9, 1993 (age 28)`,
    bornPlace: `Bacoor, Cavite, Philippines`,
    federation: `USA`,
    chesscom: "https://www.chess.com/member/gmwso",
    twitter: "",
    facebook: "",
    instagram: "",
    rank: 6,
    classic: 2773,
    fast: 2783,
    blitz: 2763,
  },
  {
    id: 7,
    bio: `Hikaru Nakamura was born December 9, 1987 in Hirakata, Japan. His family moved to the United States when he was just two years old, and the Stars and Stripes are the only national banner he has known as a chess player. <br><br>
    Nakamura has been one of the world’s top players for well over a decade. He was clearly the top American player for much of that time and is now a key contributor to one of the strongest chess scenes in the world.<br><br>
    He is a five-time U.S. champion, claiming the title in 2005, 2009, 2012, 2015, and 2019. Nakamura was also a participant in FIDE’s 2004 World Championship tournament and a candidate for the world championship in 2016. As of August 2020, he is the highest-rated blitz player in the world with a 2900 FIDE blitz rating.`,
    picture: `<img src="./Pictures/HikaruNakamura.jpeg" />`,
    nameAndSurname: `Hikaru Nakamura`,
    born: `Dec 9, 1987 (age 34)`,
    bornPlace: `Hirakata, Japan`,
    federation: `USA`,
    chesscom: "https://www.chess.com/member/hikaru",
    twitter: "https://twitter.com/gmhikaru",
    facebook: "https://www.facebook.com/GMHikaru/",
    instagram: "https://www.instagram.com/gmhikaru/",
    rank: 7,
    classic: 2768,
    fast: 2837,
    blitz: 2850,
  },
  {
    id: 8,
    bio: `GM Anish Giri is a four-time Dutch champion and a world-class player. He has been ranked as high as number three in the world and reached his peak rating of 2802 on February 15, 2015. Giri has represented the Netherlands at the Olympiads since 2010. He won the 2012 Reggio Emilia tournament and the 2017 Reykjavik Open. He scored his first major victory at the Shenzhen Masters in the summer of 2019 and in March 2021 he won the Magnus Carlsen Invitational. `,
    picture: `<img src="./Pictures/AnishGiri.jpeg" />`,
    nameAndSurname: `Anish Giri`,
    born: `Jun 28, 1994 (age 28)`,
    bornPlace: `Saint Petersburg, Russia`,
    federation: `Holland`,
    chesscom: "https://www.chess.com/member/anishgiri",
    twitter: "https://twitter.com/anishgiri",
    facebook: "https://www.facebook.com/people/Anish-Giri/100000059751649",
    instagram: "https://www.instagram.com/anishgiri94/",
    rank: 8,
    classic: 2760,
    fast: 2721,
    blitz: 2794,
  },
  {
    id: 9,
    bio: `Shakhriyar Mamedyarov is a super-grandmaster from Azerbaijan. He was the number-two ranked player in the world in the FIDE ratings list of February 2018. According to 2700chess.com, Mamedyarov reached his peak rating of 2826 on September 30, 2018—the sixth-highest rating of all time.<br><br>
    Mamedyarov won the 2013 World Rapid Championship and is a two-time World Junior Champion (2003 and 2005). He has won multiple international tournaments, including the 2018 Biel Chess Festival (ahead of World Champion Magnus Carlsen). Mamedyarov won the Azerbaijan Chess Championship twice (2001 and 2002), was the 2017 FIDE Grand Prix winner, and finished in second place in the 2018 Candidates Tournament. `,
    picture: `<img src="./Pictures/ShakhriyarMamedyarov.jpeg" />`,
    nameAndSurname: `Shakhriyar Mamedyarov`,
    born: `Apr 12, 1985 (age 37)`,
    bornPlace: `Sumgait, Azerbaijan SSR, Soviet Union`,
    federation: `Azerbaijan`,
    chesscom: "https://www.chess.com/member/azerichess",
    twitter: "",
    facebook: "",
    instagram: "",
    rank: 9,
    classic: 2759,
    fast: 2699,
    blitz: 2710,
  },
  {
    id: 10,
    bio: `Maxime Vachier-Lagrave (also known as “MVL”) is a French super grandmaster who, since 2016, has spent plenty of time rated among the top five chess players in the world. His rating peaked at 2819 in August 2016, making him the seventh-highest rated player in history.<br><br>
    Vachier-Lagrave is a three-time French Chess Champion, five-time winner of the Biel Grandmaster Tournament, and a two-time European Blitz Champion. In 2021 he added World Blitz Champion to his resume.<br><br>
    As one of the world’s top chess players, Vachier-Lagrave belongs on the small list of competitors who have a realistic shot at the world title.`,
    picture: `<img src="./Pictures/MaximeVachier-Lagrave.png" />`,
    nameAndSurname: `Maxime Vachier-Lagrave`,
    born: `Oct 21, 1990 (age 31)`,
    bornPlace: `Nogent-sur-Marne, France`,
    federation: `France`,
    chesscom: "https://www.chess.com/member/lyonbeast",
    twitter: "https://twitter.com/vachier_lagrave",
    facebook: "",
    instagram: "",
    rank: 10,
    classic: 2757,
    fast: 2763,
    blitz: 2812,
  },
];

const playersMain = document.querySelector(".playersMain");
const playersBtn = document.querySelectorAll(".playersBtn");

window.addEventListener("DOMContentLoaded", function () {
  displayPlayersMain(players);
});
/*
Array.from(playersBtn).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const value = e.currentTarget.dataset.id;
    if (value === "Main") {
      displayPlayersMain(players);
    } else if (value === "History") {
      displayPlayersHistory(players);
    }
  });
});
*/

playersMain.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id === "History") {
    displayPlayersHistory(players);
  }
  if (id === "Main") {
    displayPlayersMain(players);
  }
  if (id === "BestGame") {
    displayPlayersGame(players);
  }
});

function displayPlayersHistory(playersItems) {
  let displayPlayers = playersItems.map(function (item) {
    return ` <article class="playersBox">
    ${item.picture}
    <div class="playersTextContainer">
      <div class="playersBtnBox">
      <button class="playersBtn" id="Main" data-id="Main">
      Main
    </button>
    <button class="playersBtn" id="History" data-id="History">
      History
    </button>
    
      </div>
      <h4>
        <div class="playersPreName">GM</div>
        ${item.nameAndSurname}
        <div class="contact">
                  <a href="${item.chesscom}"
                    ><img src="./Pictures/contact/chess.png" alt=""
                  /></a>
                  <a href="${item.twitter}"
                    ><img src="./Pictures/contact/twitter.png" alt=""
                  /></a>
                  <a href="${item.facebook}"
                    ><img src="./Pictures/contact/facebook.png" alt=""
                  /></a>
                  <a href="${item.instagram}">
                    <img src="./Pictures/contact/instagram.png" alt=""
                  /></a>
                </div>
      </h4>
      <p class="bio">
        ${item.bio}
      </p>
    </div>
  </article>`;
  });
  displayPlayers = displayPlayers.join("");
  playersMain.innerHTML = displayPlayers;
}

function displayPlayersMain(playersItems) {
  let displayPlayers = playersItems.map(function (item) {
    return ` <article class="playersBox">
    ${item.picture}
      <div class="playersTextContainer">
        <div class="playersBtnBox">
        <button class="playersBtn" id="Main" data-id="Main">
        Main
      </button>
      <button class="playersBtn" id="History" data-id="History">
        History
      </button>
     
        </div>
        <h4>
          <div class="playersPreName">GM</div>
          ${item.nameAndSurname}
          <div class="contact">
          <a href="${item.chesscom}"
          ><img src="./Pictures/contact/chess.png" alt=""
        /></a>
        <a href="${item.twitter}"
          ><img src="./Pictures/contact/twitter.png" alt=""
        /></a>
        <a href="${item.facebook}"
          ><img src="./Pictures/contact/facebook.png" alt=""
        /></a>
        <a href="${item.instagram}">
          <img src="./Pictures/contact/instagram.png" alt=""
        /></a>
      </div>
        </h4>
        <p class="info"> <img src="./Pictures/contact/globe.png"
        /> #${item.rank} <img src="./Pictures/contact/chess-board.png"
        /> ${item.classic} <img src="./Pictures/contact/stopwatch.png"
        /> ${item.fast} <img src="./Pictures/contact/flash.png"
        /> ${item.blitz}
          <ul>
              <li>
                  <b>Name and surname</b>: ${item.nameAndSurname}
              </li>
              <li>
                  <b>Born</b>: ${item.born}
              </li>
              <li>
                  <b>Born place</b>: ${item.bornPlace}
              </li>
              <li>
                  <b>Federation</b>: ${item.federation}
              </li>
          </ul>
        </p>
      </div>
    </article>`;
  });
  displayPlayers = displayPlayers.join("");
  playersMain.innerHTML = displayPlayers;
}
