const newYork = 'New York';
const lawrence = 'Lawrence';


window.onload = init;

function init() {
    document.querySelector('.new-york')
        .addEventListener('click', toggleToNY);

    document.querySelector('.lawrence')
        .addEventListener('click', toggleToLawrence);
}

function toggleToNY() {
    console.log(newYork);
}

function toggleToLawrence() {
    console.log(lawrence);
}