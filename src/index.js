import { cacheDOM } from "./cacheDom";
import { createCard } from "./createCard";
import { renderPage } from "./renderPage";

let card = createCard();
let cache = cacheDOM();

cache.cardContainer.appendChild(card);

renderPage();