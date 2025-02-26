function sortgames(category) {
    if (category === 'all') {
        document.querySelectorAll('.game-grid > *').forEach(element => {
            element.style.display = 'block';
        });
    } else {
        document.querySelectorAll('.game-grid > *').forEach(element => {
            element.style.display = 'none';
        });
        document.querySelectorAll(`.game-type.${category}`).forEach(element => {
            element.style.display = 'block';
        });
    }
}

document.querySelectorAll('#gaemsort button').forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.getAttribute('onclick').match(/'([^']+)'/)[1];
        sortgames(category);
    });
});

// pro coding fr fr