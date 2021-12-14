const axios = require("axios");

const renderHomePage = (req, res) => {
  res.render("home");
};

const renderSearchResultsPage = async (req, res) => {
  const { city } = req.query;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

  const { data } = await axios.get(url);

  const dataToRender = {
    name: data.name,
    description: data.weather[0].description,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };

  res.render("searchResults", dataToRender);
};

module.exports = {
  renderHomePage,
  renderSearchResultsPage,
};
