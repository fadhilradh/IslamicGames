
      const cards = document.querySelectorAll(".card");
      let cardHasFlipped = false;
      let boardIsLocked = false;
      let firstCard, secondCard;
      let flippedCardsArray = [];
      const cardCount = 12;

      function flipCard() {
        if (boardIsLocked) return;

        this.classList.add("flip");

        if (!cardHasFlipped) {
          cardHasFlipped = true;
          firstCard = this;
          console.log(firstCard.dataset.framework);
          return;
        }
        cardHasFlipped = false;
        secondCard = this;
        console.log(secondCard.dataset.framework);
        checkForMatch();
      }

      function checkForMatch() {
        firstCard.dataset.framework === secondCard.dataset.framework
          ? (disableCards(), flippedCardsArray.push("1", "2"))
          : resetCardsFlip();
      }

      function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
      }

      function resetCardsFlip() {
        boardIsLocked = true;
        setTimeout(() => {
          firstCard.classList.remove("flip");
          secondCard.classList.remove("flip");
          boardIsLocked = false;
        }, 1500);
      }

      (function shuffle() {
        cards.forEach((card) => {
          let randomPos = Math.floor(Math.random() * 12);
          card.style.order = randomPos;
        });
      })();

      cards.forEach(function (card) {
        card.addEventListener("click", flipCard);
      });

      let checkWin = setInterval(() => {
        if (flippedCardsArray.length == cardCount) {
          alert("Selamat Anda Menang. Alhamdulillah ilmu Anda bertambah");

          window.clearInterval(checkWin);
        }
      }, 500);