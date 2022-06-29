import {cacheDOM} from './cacheDom.js';
import {getData} from './getWeatherData.js';

const cache = cacheDOM();

function bindEvents() {
    cache.form.addEventListener('submit', (e) => {
        e.preventDefault();
        getData(cache.searchBar.value)
        cache.searchBar.value = '';
        cache.searchBar.blur();
    });
}

export {
    bindEvents
}