window.onload = init;

let response = `{
    "gameOfThronesBodyCount": 0
}`;

function init() {
    console.log(`Requesting data.`);
    sendRequest();
    
    console.log('Displaying network response:');
}

function sendRequest() {    
    setTimeout(handleData, 1500);
}

function handleData() {
    response = `{
        "gameOfThronesBodyCount": 1
    }`;
    console.log(JSON.parse(response));
}