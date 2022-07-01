import { cacheDOM } from "./cacheDom";
import { createCard } from "./createCard";

const cache = cacheDOM();

async function getData(city) {
    try {
        const splitString = city.replace(/ /g, '+');
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=821fdddbf8ab41bdd4a6bb1a2055b185`, {
            mode: 'cors'
        });
        const parsedData = await data.json();
        if (parsedData.cod === '404') {
            throw new Error
        }
        cache.cardContainer.textContent = '';
        console.log(parsedData)
        cache.cardContainer.appendChild(createCard(parsedData));
    } catch (error) {
        cache.cardContainer.textContent = `Woops! We couldn't find that city! Please try again!`;
        console.error(error);
    }
}

export {
    getData
}