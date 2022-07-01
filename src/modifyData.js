function modifyData(data) {
    let kelvinTemp = data.main.temp;
    let kelvinFeelsLike = data.main.feels_like;

    let farenheitTemp = 1.8 * (kelvinTemp - 273) + 32;
    let farenheitFeelsLike = 1.8 * (kelvinFeelsLike - 273) + 32;

    let roundedTemp = farenheitTemp.toFixed(0);
    let roundedFeelsLike = farenheitTemp.toFixed(0);

    data.main.temp = roundedTemp;
    data.main.feels_like = roundedFeelsLike;

    return data
}

export {
    modifyData
}