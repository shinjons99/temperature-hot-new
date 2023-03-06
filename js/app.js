//* Do not show api key on your github
const API_KEY = '13997d842972eea2cdc33448805e37fe';
const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))

}
const displayTemperature = data =>{
    const temperature = document.getElementById('temperature');
    console.log(data.main.temp);
}
loadTemperature('Dhaka');