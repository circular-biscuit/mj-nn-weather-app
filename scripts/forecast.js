const key = 'V8oT8eIAt3gQ2xql5GGuMXfYNNAb7dyd';
const weather = 'http://dataservice.accuweather.com/currentconditions/v1/{locationKey}';




//get city information 
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'; //base url for api endpoint
  const query = `?apikey=${key}&q=${city}`; //query parameters to access location data

  const response = await fetch(base+query); //returns promise with json data
  const data = await response.json(); //returns promise with parsed json data

  return data[0]; //return closest match to request
};

//get weather information
const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};