const dropdownBtn = document.getElementById("dropdownBtn");
const cityList = document.getElementById("cityList");
const weatherResult = document.getElementById("weatherResult");

const weatherData = {
  istanbul: {
    name: "İstanbul",
    sys: { country: "TR" },
    main: { temp: 22, feels_like: 24 },
    weather: [{ description: "hafif yağmur" }]
  },
  ankara: {
    name: "Ankara",
    sys: { country: "TR" },
    main: { temp: 18, feels_like: 17 },
    weather: [{ description: "parçalı bulutlu" }]
  },
  izmir: {
    name: "İzmir",
    sys: { country: "TR" },
    main: { temp: 26, feels_like: 28 },
    weather: [{ description: "güneşli" }]
  },
  antalya: {
    name: "Antalya",
    sys: { country: "TR" },
    main: { temp: 30, feels_like: 33 },
    weather: [{ description: "açık hava" }]
  },
  bursa: {
    name: "Bursa",
    sys: { country: "TR" },
    main: { temp: 21, feels_like: 20 },
    weather: [{ description: "sisli" }]
  },
  trabzon: {
    name: "Trabzon",
    sys: { country: "TR" },
    main: { temp: 19, feels_like: 20 },
    weather: [{ description: "yağmurlu" }]
  },
  gaziantep: {
    name: "Gaziantep",
    sys: { country: "TR" },
    main: { temp: 33, feels_like: 35 },
    weather: [{ description: "çok sıcak" }]
  },
  konya: {
    name: "Konya",
    sys: { country: "TR" },
    main: { temp: 20, feels_like: 22 },
    weather: [{ description: "bulutlu" }]
  },
  adana: {
    name: "Adana",
    sys: { country: "TR" },
    main: { temp: 32, feels_like: 34 },
    weather: [{ description: "güneşli" }]
  },
  eskişehir: {
    name: "Eskişehir",
    sys: { country: "TR" },
    main: { temp: 17, feels_like: 16 },
    weather: [{ description: "serin" }]
  }
};

dropdownBtn.addEventListener("click", () => {
  cityList.classList.toggle("hidden");
});

cityList.addEventListener("click", (e) => {
  if(e.target && e.target.nodeName === "LI") {
    const cityKey = e.target.getAttribute("data-city");
    if(cityKey && weatherData[cityKey]) {
      showWeather(cityKey);
      dropdownBtn.textContent = e.target.textContent + " ▼";
      cityList.classList.add("hidden");
    }
  }
});

function showWeather(cityKey) {
  const data = weatherData[cityKey];
  weatherResult.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Sıcaklık:</strong> ${data.main.temp} °C</p>
    <p><strong>Hissedilen:</strong> ${data.main.feels_like} °C</p>
    <p><strong>Hava Durumu:</strong> ${data.weather[0].description}</p>
  `;
}
