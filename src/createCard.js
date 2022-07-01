
function createCard(data) {
    let container = document.createElement('div');

    let DOMObject = {   
       icon: document.createElement('img'),
       city: document.createElement('h3'),
       weather: document.createElement('h3'),
       weatherDesc: document.createElement('p'),
       temp: document.createElement('h3'),
       tempType: document.createElement('button'),
       tempFlsLke: document.createElement('h3'),
       humidity: document.createElement('h3')
    }

    container.classList.add('card');
    DOMObject.city.classList.add('city');
    DOMObject.temp.classList.add('temperature');
    DOMObject.tempFlsLke.classList.add('feels-like');
    DOMObject.humidity.classList.add('humidity');
    DOMObject.weather.classList.add('weather');
    DOMObject.icon.classList.add('pic');
    DOMObject.weatherDesc.classList.add('weather-desc');

    DOMObject.tempType.textContent = 'F°';
    DOMObject.city.textContent = `${data.name}`;
    DOMObject.temp.textContent = `${data.main.temp}°`;
    DOMObject.tempFlsLke.textContent = `${data.main.feels_like}°`;
    DOMObject.humidity.textContent = `${data.main.humidity}%`;
    DOMObject.weather.textContent = `${data.weather[0].main}`;
    DOMObject.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    DOMObject.weatherDesc.textContent = `${data.weather[0].description}`;

    for (const key in DOMObject) {
        container.appendChild(DOMObject[key]);
    }

    console.log(container);
    
    return container
}

export {
    createCard
}