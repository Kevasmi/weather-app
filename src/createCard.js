
function createCard(data) {
    let container = document.createElement('div');

    let DOMObject = {   
       icon: document.createElement('img'),
       city: document.createElement('h3'),
       weather: document.createElement('p'),
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

    DOMObject.tempType.textContent = 'F°';
    DOMObject.city.textContent = `${data.namme}`;
    DOMObject.temp.textContent = `${data.main.temp}`;
    DOMObject.tempFlsLke.textContent = `${data.main.feels_like}`;
    DOMObject.weather.textContent = `${data.weather[0].main}`;
    DOMObject.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    DOMObject.weatherDesc.textContent = `${data.weather[0].description}`;
    DOMObject.humidity.textContent = `${data.main.humidity}`;

    container.appendChild(DOMObject.tempType);
    container.appendChild(DOMObject.city);
    container.appendChild(DOMObject.temp);
    container.appendChild(DOMObject.tempFlsLke);
    container.appendChild(DOMObject.humidity);  
    container.appendChild(DOMObject.weather);
    container.appendChild(DOMObject.icon);
    container.appendChild(DOMObject.weatherDesc);
    
    return container
}

export {
    createCard
}


// const elements = Object.keys(DOMObject);
// elements.forEach( (key, index) => {
//     console.log(`${key}: ${DOMObject[key]}`);
//     container.appendChild(element);
// });


// for (const key in DOMObject) {
//     console.log(container);
//     console.log(`${key}: ${DOMObject[key]}`);
//     container.appendChild(`${key}: ${DOMObject[key]}`);
// }
// console.log(container);