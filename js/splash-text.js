document.addEventListener("DOMContentLoaded", () => {
  var splashTexts = [
    "Hit q for panic button",
    "never leave the site",
    "Thanks for using this btw",
    "do our google form pls",
    "Never play games in shcool, it is very bad",
    "Who is behind you rn?",
    "hawk tuah, spit on that thang",
    "pls dont sue",
    "your IP is 192.168.28.0",
    "VłⱤɄ₴.ɆӾɆ ł₦₮₴₳ⱠⱠɆĐ",
    "This is not a game website",
    "Whats that down there",
    "if you recomend a game that costs money, your IP will be grabed (joke fr)",
    "im not adding brainrot games",
    "go read a book or do your homework idk",
    "never game in class, it's a trap fr",
    "if u suggest a brainrot, we’re sending the teachers and admins (jk kinda)",
    "i know your mom personaly (JOKE JOKE JOKE JOKE)",
    "pls dont fight me",
    "food in the michael wave",
    "if a fly looses its wings, is it now called a walk?",
    "i made this in school",
    "the date is 2125 feb the 4th",
    "join our discord server pls",
    "if u want u can donate money to me pls",
    "im broke",
    "with great power comes great food consumption",
    
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
