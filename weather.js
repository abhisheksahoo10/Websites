const api_key = "72e87eb4b17e821b4c1d2b579088933a";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputbox = document.querySelector('.search input');
const searchButton = document.querySelector('.search Button');
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const res = await fetch(api_url + city + `&appid=${api_key}`);
    if(res.status == 404){
        alert("invalid city name");
    }
    var data = await res.json();
    console.log(data);

    //data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

    //weather-logo
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png";
    }
    



}
checkweather("Bhubaneswar");
searchButton.addEventListener('click',()=>{
    checkweather(inputbox.value);
})

