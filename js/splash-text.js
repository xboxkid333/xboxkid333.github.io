document.addEventListener("DOMContentLoaded", () => {
  var splashTexts = [
    "Hit q for panic button",
    "never leave the site",
    "Thanks for using this btw",
    "do our google form",
    "Never play games in shcool, it is very bad",
    "Who is behind you rn?"
  ];

  var lastIndex = -1;

  function displaySplashText() {
    const splashElement = document.querySelector(".splash-text");
    if (splashElement) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * splashTexts.length);
      } while (randomIndex === lastIndex);

      lastIndex = randomIndex;
      splashElement.textContent = splashTexts[randomIndex];
    }
  }

  displaySplashText();
});
