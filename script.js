const apiId = '5bdefb296bbc4286aaa160552232501';
document.getElementById('city-button').onclick = function () {
    var cityInput = document.getElementById('cityInput').value;
    console.log(cityInput)
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiId}&q=${cityInput}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let output = `
            <div>
                <p>Location - <span id="outputSpanApi">${data.location.name}, ${data.location.region}, ${data.location.country}</span></p>
                <p>Feels like - <span id="outputSpanApi">${data.current.temp_c} °C</span></p>
                <p>Wind Speed - <span id="outputSpanApi">${data.current.wind_kph} km/hr</span>, Direction - <span id="outputSpanApi">${data.current.wind_dir}</span></p>
                <img src="${data.current.condition.icon}"</img>
            </div>
            `;
            console.log('printing data', data);
            document.getElementById('weather-input-div').innerHTML = output;
        }).catch((err) => console.log(err))
}
