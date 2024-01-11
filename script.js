const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const images = document.querySelector('.icon');

async function getWeather(city) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c904ebf1b2402c031d88d8ea363298d&units=metric`);
    var data = await res.json()
    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round (data.main.temp) +"°c";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityP').innerHTML = Math.round (data.main.humidity) + "%";
    document.querySelector('.windS').innerHTML = Math.round (data.wind.speed) + "km/h";

    if(data.weather[0].main == "Clouds"){
        images.src = "./PNG/cloud.png"
    }
    else if(data.weather[0].main == "Clear"){
        images.src = "./PNG/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        images.src = "./PNG/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        images.src = "./PNG/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        images.src = "./PNG/rain.png"
    }

}
searchButton.addEventListener('click',()=>{
    getWeather(searchInput.value);
})
