const currentTemp = document.querySelector('#current-temp');

const weatherIcon = document.querySelector('#weather-icon');

const captionDesc = document.querySelector('#weather-desc');

const humidity = document.querySelector('#humidity');

const day1 = document.querySelector('#day1');

const day2 = document.querySelector('#day2');

const day3 = document.querySelector('#day3');

const url =
    'https://api.openweathermap.org/data/2.5/forecast?lat=5.4833&lon=7.0333&units=metric&appid=15201534d7ccd6a73afd553600bd8673';

async function apiFetch() {

    try {

        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();

            console.log(data);

            displayResults(data);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log(error);

    }

}

apiFetch();

function displayResults(data) {

    const currentWeather = data.list[0];

    currentTemp.innerHTML =
        `${currentWeather.main.temp.toFixed(1)}&deg;C`;

    const iconsrc =
        `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;

    let desc =
        currentWeather.weather[0].description;

    weatherIcon.setAttribute(
        'src',
        iconsrc
    );

    weatherIcon.setAttribute(
        'alt',
        desc
    );

    captionDesc.textContent =
        desc;

    humidity.textContent =
        `Humidity: ${currentWeather.main.humidity}%`;

    // 3-DAY FORECAST

    const forecastList = data.list.filter((forecast) =>
        forecast.dt_txt.includes('12:00:00')
    );

    day1.textContent =
        `${forecastList[0].dt_txt.slice(5, 10)} : ${forecastList[0].main.temp.toFixed(1)}°C`;

    day2.textContent =
        `${forecastList[1].dt_txt.slice(5, 10)} : ${forecastList[1].main.temp.toFixed(1)}°C`;

    day3.textContent =
        `${forecastList[2].dt_txt.slice(5, 10)} : ${forecastList[2].main.temp.toFixed(1)}°C`;

}