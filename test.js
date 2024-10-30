let currentIndex = 0;
const films = document.querySelectorAll('.film');
const totalFilms = films.length;

function showFilm(index) {
    // Masquer tous les films
    films.forEach((film, i) => {
        film.style.display = (i === index) ? 'block' : 'none';
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalFilms; // Passe à la suivante
    showFilm(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalFilms) % totalFilms; // Passe à la précédente
    showFilm(currentIndex);
});

// Initialisation
showFilm(currentIndex);

