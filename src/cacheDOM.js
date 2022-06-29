function cacheDOM() {
    const formContainer = document.querySelector('.form-container');
    const form = document.querySelector('form');
    const searchBar = document.querySelector('#search');
    const cardContainer = document.querySelector('.card-container');
    return {formContainer, searchBar, form, cardContainer}
}

export {
    cacheDOM
}