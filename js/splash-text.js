document.addEventListener("DOMContentLoaded", () => {
  // Array 
  var splashTexts = [
    "Hit q for panic button",
    "never leave the site",
    "Thanks for using this btw",
    "do our google form",
    "Never play games in shcool, it is very bad",
    "Who is behind you rn?"
  ];

  // random text
  function displaySplashText() {
    const splashElement = document.querySelector(".splash-text");
    if (splashElement) {
      const randomIndex = Math.floor(Math.random() * splashTexts.length);
      splashElement.textContent = splashTexts[randomIndex];
    }
  }

  // Call the function i hope
  displaySplashText();
});
