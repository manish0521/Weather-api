
window.onload = init;
function init() {
    console.log(`Requesting data.`);
    document.getElementById("submit").addEventListener("click", sendRequest);
    console.log('Displaying network response:')
    
}



function sendRequest() {
    const xhr = new XMLHttpRequest();

    // let api = 'http://api.openweathermap.org/data/2.5/find?q=';
    // let units = '&units=metric';
    // let apiKey = '&APPID=fd5294e22064834c23fef13f445bf5ae';
    let city = document.getElementById('city').value;
     
    const url = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&APPID=fd5294e22064834c23fef13f445bf5ae`
    // const url = api + input.innerText + units + apiKey;
    console.log(url);
    xhr.open('GET', url);
    xhr.onload = handleData;
    xhr.send();  
    clear();
    
}
function gotData(weatherData) {
    // const weatherData = JSON.parse(event.target.responseText)
    // console.log(weatherData)
    const displayMe = document.getElementById('display');
    displayMe.innerText = weatherData;
    sendRequest();
    
}

function handleData(event) {
    const weather = JSON.parse(event.target.responseText);
    const { list } = weather;
    console.log(list[0]);
    gotData(list[0].main.temp);
    
}

function clear(){
    // document.getElementById("submit").addEventListener("click");
    document.getElementById("city").value = '' ; 
}