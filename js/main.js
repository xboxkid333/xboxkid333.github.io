// document.onkeydown = function (e) {
//     if (e.key === "Enter") {
//       splashText();
//     }
//   };
  

  

  document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === '`') {
        const gameLinks = document.getElementsByClassName('game-link');
        if (gameLinks.length > 0) {
            const randomIndex = Math.floor(Math.random() * gameLinks.length);
            const randomGame = gameLinks[randomIndex].parentElement.getAttribute('href');
            window.open(randomGame, '_blank');
        }
    }
  });
