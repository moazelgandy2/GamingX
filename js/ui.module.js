export class UI {
  displayGames(list, gameType) {
    let gameCard = ``;

    for (const game of list) {
      gameCard += `
                  <div class="col-md-4 col-lg-3 col-sm-6 col-12 my-3">

      <div class="card border-0 shadow">
                <img
                  src="${game.thumbnail}"
                  alt="${game.title}"
                  class="card-img-top"
                />
                <div class="card-body d-flex flex-column justify-content-center ">
                  <h5 class="card-title text-white">${game.title}</h5>
                  <p class="card-text text-secondary">
                    ${game.short_description.split(" ", 8).join(" ")}
                  </p>
                  <div class="badges d-flex justify-content-between align-items-center mb-4 flex-wrap">
                    <span class="badge d-flex justify-content-center align-items-center p-1 text-bg-info mb-2">${
                      game.platform
                    }</span>
                    <span class="badge d-flex justify-content-center align-items-center p-1 text-bg-light">${
                      game.genre
                    }</span>
                  </div>
                  <div class="buttons text-center">
                    <button class="viewGameDet btn btn-warning btn-sm" data-id="${
                      game.id
                    }">Details</button>
                  </div>
                </div>
                </div>
              </div>`;
    }
    document.querySelector(
      ".games-title"
    ).innerHTML = `${gameType} <sub class="fs-6 text-info">(${list.length} game found)</sub>`;
    document.querySelector(".games").innerHTML = gameCard;
  }

  displayGame(game) {
    const gameCard = `
              <div
            class="gameDetails z-3 bg-danger d-flex justify-content-center align-items-center mt-5"
          >
            <div class="close position-absolute top-0 end-0 p-3">
              <i class="fa-solid fa-xmark closeGame"></i>
            </div>
            <div class="row gameCard">
              <div class="col-md-6 col-lg-7 col-sm-12 col-12 mb-4">
                <img
                  src="${game.thumbnail}"
                  alt="${game.title}"
                  class="w-90 rounded-2"
                />
              </div>
              <div class="col-md-6 col-lg-5 col-sm-12 col-12 gameText">
                <div class="gameName">
                  <h2 class="fs-4">${game.title}</h2>
                </div>
                <div class="gameDesc me-5">
                  <p class="fs-6 text-warning">
                    ${game.short_description}
                  </p>
                  <div class="fw-semibold badge bg-info">${game.platform}</div>
                  <div class="fw-semibold badge bg-light text-black">${game.genre}</div>
                  <div class="fw-semibold badge bg-danger ">${game.publisher}</div>
                  <div class="fw-semibold badge bg-primary">${
                    game.minimum_system_requirements ? game.minimum_system_requirements.memory : "?"
                  }</div>
                  <div class="badge bg-warning">${
                    game.minimum_system_requirements
                      ? game.minimum_system_requirements.storage
                      : "?"
                  } storage</div>
                </div>
                <button class="btn btn-primary mt-3"><a href="${
                  game.game_url
                }" target="_blank">Visit game website</a></button>

              </div>
            </div>
          </div>`;
    document.querySelector(".gameDetailsCard").innerHTML = gameCard;
  }
}
