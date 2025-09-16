// document.onkeydown = function (e) {
//     if (e.key === "Enter") {
//       splashText();
//     }
//   };
  

  
// Function to normalize game names for thumbnail file paths
function normalizeGameName(gameName) {
    return gameName.toLowerCase()
        .trim()
        .replace(/['"]/g, '') // Remove quotes
        .replace(/[^a-z0-9\s]/g, '') // Remove special characters except spaces
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Function to get thumbnail path from game URL or title
function getGameThumbnailPath(gameLink) {
    const gameTitle = gameLink.querySelector('.game-title');
    if (!gameTitle) return '/imgs/game-thumbs/default.png';
    
    const gameName = normalizeGameName(gameTitle.textContent);
    return `/imgs/game-thumbs/${gameName}.png`;
}

// Function to handle thumbnail image error (fallback to default)
function handleThumbnailError(img) {
    if (img.src !== '/imgs/game-thumbs/default.png') {
        img.src = '/imgs/game-thumbs/default.png';
    }
}

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

// Initialize thumbnails when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for fav.js to finish adding pin buttons
    setTimeout(function() {
        const gameLinks = document.querySelectorAll('.game-grid .game-link');
        
        gameLinks.forEach(function(gameLink) {
            // Skip if this is in the game-link-other-container
            if (gameLink.closest('.game-link-other-container')) {
                return;
            }
            
            const gameTitle = gameLink.querySelector('.game-title');
            if (!gameTitle) return;
            
            // Check if thumbnail already exists
            if (gameLink.querySelector('.game-thumb')) return;
            
            // Create thumbnail image element
            const thumbnailImg = document.createElement('img');
            thumbnailImg.className = 'game-thumb';
            thumbnailImg.alt = gameTitle.textContent + ' thumbnail';
            thumbnailImg.src = getGameThumbnailPath(gameLink);
            thumbnailImg.onerror = function() {
                handleThumbnailError(this);
            };
            
            // Insert the image after the pin button but before the game title
            const pinButton = gameLink.querySelector('.pin-button');
            if (pinButton) {
                pinButton.insertAdjacentElement('afterend', thumbnailImg);
            } else {
                // Fallback: insert before game title
                gameLink.insertBefore(thumbnailImg, gameTitle);
            }
        });
    }, 100); // 100ms delay to let fav.js finish
});
