const newYork = 'New York';
const lawrence = 'Lawrence';


window.onload = init;

function init() {
    document.querySelector('.new-york')
        .addEventListener('click', () => toggleTheme(newYork));

    document.querySelector('.lawrence')
        .addEventListener('click', () => toggleTheme(lawrence));
}

function toggleTheme(city) {
    console.log(city);
}