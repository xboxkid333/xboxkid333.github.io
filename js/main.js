// document.onkeydown = function (e) {
//     if (e.key === "Enter") {
//       splashText();
//     }
//   };
  
//   var says = [];
//   fetch('https://raw.githubusercontent.com/Nintendoboi222/games/refs/heads/main/says.txt')
//     .then(response => response.text())
//     .then(text => {
//       says = text.split('\n').filter(line => line.trim() !== '');
//       splashText();
//     });
  
//   function splashText() {
//     if (says.length > 0) {
//       document.querySelector(".Index-SplashText").innerHTML =
//         says[Math.floor(Math.random() * says.length)];
//     }
//   }
  
//   document.addEventListener("DOMContentLoaded", (event) => {
//     splashText();
    
//     fetch("https://ipv4.wtfismyip.com/json")
//       .then((response) => response.json())
//       .then((data) => {
//           proxylocation = data.YourFuckingLocation;
//           ipAddress = data.YourFuckingIPAddress;
//           isp = data.YourFuckingISP;
//           says.push(`Sending missile to ${proxylocation}>:)`);
//           says.push(`after breaking the quantum level we have found out your ip is ${ipAddress}`);
//           says.push(`nice isp, "${isp}"`);
//           splashText();
//       });
//     fetch("https://discord.com/api/guilds/1288933489818865784/widget.json")
//       .then((response) => response.json())
//       .then((data) => {
//         invite = data.instant_invite;
//         says.push(`Join? "${invite}"`);
//         splashText();
//       });
//   });
  

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

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'q') {
        window.open('https://scholar.google.com', '_blank');
        this.title("Home - Google Drive");
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = 'https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png';
        document.head.appendChild(link);
    }
});