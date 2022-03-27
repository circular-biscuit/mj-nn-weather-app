const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.key);

  return { cityDetails, weather }}; //using object shorthand notation

const cityForm = document.querySelector('form');
cityForm.addEventListener('submit', e => {
  e.preventDefault;
  
  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
  .then(data => console.log(data))
  .catch(err => console.log(err));

});