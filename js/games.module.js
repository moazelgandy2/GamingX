import { UI } from "./ui.module.js";

export class Games {
  constructor() {
    this.gameType = `All Games`;
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: {
        "X-RapidAPI-Key": "7cc9914c9bmsh398e93645579f2fp140ec1jsn579d3bd12aeb",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((games) => {
        this.ui.displayGames(games, this.gameType.toLocaleUpperCase());
        document.querySelector(".loaders").classList.add("d-none");
      })
      .then(() => {
        let selects = document.querySelectorAll("select");
        selects.forEach((select) => {
          select.addEventListener("change", function () {
            let categ = select.value;
            new Games().getGames(categ, this.allGames);
          });
        });
      })
      .then(() => {
        let btns = document.querySelectorAll(".viewGameDet");
        for (const btn of btns) {
          btn.addEventListener("click", () => {
            this.getGame = new Games().findGame(btn.getAttribute("data-id"));
          });
        }
      });

    this.ui = new UI();
  }
  getGames(categ) {
    const URL = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categ}`;
    document.querySelector(".loaders").classList.remove("d-none");
    fetch(`${URL}`, {
      headers: {
        "X-RapidAPI-Key": "7cc9914c9bmsh398e93645579f2fp140ec1jsn579d3bd12aeb",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((games) => {
        this.gameType = categ.toUpperCase();
        this.ui.displayGames(games, this.gameType);
      })
      .then(() => document.querySelector(".loaders").classList.add("d-none"))
      .then(() => {
        let btns = document.querySelectorAll(".viewGameDet");
        for (const btn of btns) {
          btn.addEventListener("click", () => {
            this.getGame = new Games().findGame(btn.getAttribute("data-id"));
          });
        }
      });
  }

  findGame(gameId) {
    let position = { x: scrollX, y: scrollY };
    window.scrollTo(0, 0);
    document.querySelector(".gameDetailsCard").innerHTML = "";

    const URL = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;

    fetch(`${URL}`, {
      headers: {
        "X-RapidAPI-Key": "7cc9914c9bmsh398e93645579f2fp140ec1jsn579d3bd12aeb",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((game) => {
        new UI().displayGame(game);
      })
      .then(() => {
        const closeGameCard = document.querySelector(".closeGame");
        closeGameCard.addEventListener("click", () => {
          document.querySelector(".gameDetails").remove();
          scrollTo(position.x, position.y);
        });
      });
  }
}
