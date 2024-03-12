const apiKey="e85a3845ebb41f516747a4070859433c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity=document.querySelector(".search input");
const clickBtn=document.querySelector(".search button");
const weatherLogo=document.querySelector(".weather-logo");


async function checkWeather(city) {
    const response=await fetch(apiurl+city+`&appid=${apiKey}`);
    
    if(response.status==404) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else {
        var data=await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main == "Clouds") {
        weatherLogo.src="Templates/clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
        weatherLogo.src="Templates/clear.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherLogo.src="Templates/rain.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherLogo.src="Templates/drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherLogo.src="Templates/mist.png";
    }
    else {
        weatherLogo.src="Templates/snow.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }

    
    
}

clickBtn.addEventListener("click",() => {
    checkWeather(searchCity.value);
})