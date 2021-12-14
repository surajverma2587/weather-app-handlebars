const searchForm = $("#search-form");
const cityInput = $("#city-name");

const handleSubmit = (event) => {
  event.preventDefault();

  const cityName = cityInput.val();

  window.location.replace(`/search-results?city=${encodeURI(cityName)}`);
};

searchForm.on("submit", handleSubmit);
