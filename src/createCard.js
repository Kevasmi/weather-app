
function createCard(data) {
    let container = document.createElement('div');

    let DOMObject = {   
       icon: document.createElement('img'),
       city: document.createElement('h3'),
       weatherDesc: document.createElement('p'),
       weatherDesc: document.createElement('p'),
       temp: document.createElement('h3'),
       tempType: document.createElement('button'),
       tempFlsLke: document.createElement('h3'),
       humidity: document.createElement('h3')
    }

    container.classList.add('card');



    container.appendChild(DOMObject.tempType);
    container.appendChild(DOMObject.city);
    container.appendChild(DOMObject.temp);
    container.appendChild(DOMObject.tempFlsLke);
    container.appendChild(DOMObject.weather);
    container.appendChild(DOMObject.icon);
    container.appendChild(DOMObject.weatherDesc);
    container.appendChild(DOMObject.humidity);  
    
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