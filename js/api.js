export const getWeatherData = async(sity) => {
    //e57615f616eb28baaf6aba8bd10522ff
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=e57615f616eb28baaf6aba8bd10522ff&lang=ru&units=metric`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

