window.onload = init;

let response = {
    "gameOfThronesBodyCount": 0
};

function init() {
    console.log(`Requesting data.`);
    response = {
        gameOfThronesBodyCount: 1
    };
    console.log('Displaying network response:');
    console.log(response);
}