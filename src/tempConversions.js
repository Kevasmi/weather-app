function toFarenheitFromKelvin(temp) {
    let convertedTemp = 1.8 * (temp - 273) + 32;

    let roundedTemp = convertedTemp.toFixed(0);

    return roundedTemp

}

function toFarenheitFromCelsius(temp) {
    let convertedTemp = (temp * (5/9)) + 32;

    let roundedTemp = convertedTemp.toFixed(0);

    return roundedTemp
}

function toCelsiusFromKelvin(temp) {
    let convertedTemp = temp - 273.15;

    let roundedTemp = convertedTemp.toFixed(0);

    return roundedTemp
}

export {
    toFarenheitFromKelvin,
    toFarenheitFromCelsius,
    toCelsiusFromKelvin
}