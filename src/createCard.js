import { toCelsiusFromKelvin, toFarenheitFromKelvin } from "./tempConversions";

function createCard(data) {
    let container = document.createElement('div');

    let DOMObject = {   
        tempType: document.createElement('button'),
        city: document.createElement('h3'),
        tempContainer: document.createElement('div'),
        weatherContainer:document.createElement('div')
    }
    
    let tempData = {
        temp: document.createElement('h3'),
        divider: document.createElement('div'),
        tempFlsLke: document.createElement('h3'),
        humidity: document.createElement('h4')
    }
    
    let weatherData = {
        weather: document.createElement('h3'),
        icon: document.createElement('img')
        // weatherDesc: document.createElement('p')
    }
    
    container.classList.add('card');
    DOMObject.tempContainer.classList.add('temp-container');
    DOMObject.weatherContainer.classList.add('weather-container');
    DOMObject.city.classList.add('city');
    tempData.temp.classList.add('temperature');
    tempData.divider.classList.add('divider');
    tempData.tempFlsLke.classList.add('feels-like');
    tempData.humidity.classList.add('humidity');
    weatherData.weather.classList.add('weather');
    weatherData.icon.classList.add('pic');

    DOMObject.tempType.textContent = 'F°';
    DOMObject.city.textContent = `${data.name}`;
    tempData.temp.textContent = toFarenheitFromKelvin(data.main.temp) + '°';
    tempData.tempFlsLke.textContent = toFarenheitFromKelvin(data.main.feels_like) + '°';
    tempData.humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherData.weather.textContent = `${data.weather[0].main}`;
    weatherData.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    for (const key in tempData) {
        DOMObject.tempContainer.appendChild(tempData[key]);
    }

    for (const key in weatherData) {
        DOMObject.weatherContainer.appendChild(weatherData[key]);
    }

    for (const key in DOMObject) {
        container.appendChild(DOMObject[key]);
    }

    console.log(container);
    
    let isFarenheit = true;
    
    DOMObject.tempType.addEventListener('click', () => {

        if (isFarenheit) {
            tempData.temp.textContent = toCelsiusFromKelvin(data.main.temp) + '°';
            tempData.tempFlsLke.textContent = toCelsiusFromKelvin(data.main.feels_like) + '°';
            DOMObject.tempType.textContent = 'C°'
            isFarenheit = false
        } else {
            tempData.temp.textContent = toFarenheitFromKelvin(data.main.temp) + '°';
            tempData.tempFlsLke.textContent = toFarenheitFromKelvin(data.main.feels_like) + '°';
            DOMObject.tempType.textContent = 'F°'
            isFarenheit = true;
        }
    });
    
    return container
}

export {
    createCard
}