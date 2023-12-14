function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '39d2991646d94be8581c94ab9644edb7';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        if (data.cod === '404') {
          weatherInfo.innerHTML = `<p>Ville non trouvée. Veuillez saisir un nom de ville valide.</p>`;
        } else {
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          weatherInfo.innerHTML = `<p>Il fait actuellement ${temperature}°C à ${city} et le temps est ${description}.</p>`;
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données météo :', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Une erreur s'est produite. Veuillez réessayer.</p>`;
      });
  }
  