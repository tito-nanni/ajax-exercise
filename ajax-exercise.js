import axios from 'axios';

// PART 1: Show Dog Photo

function showDogPhoto(evt) {
axios.get('https://dog.ceo/api/breeds/image/random')
.then(res => { 
const imgUrl = res.data.message;
document.querySelector('#dog-image').innerHTML = `<img src=${imgUrl}>`

})}

  // TODO: get a random photo from the Dog API and show it in the #dog-image div


document.querySelector('#get-dog-image').addEventListener('click', showDogPhoto);

// PART 2: Show Weather

async function showWeather(evt) {
  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather.txt?zipcode=${zipcode}`
  const response = await axios.get(url)
  document.querySelector('#weather-info').innerText = response.data

  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-button').addEventListener('click', showWeather);

// PART 3: Order Cookies

function orderCookies(evt) {
  // TODO: Need to preventDefault here, because we're listening for a submit event!
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderCookies);

// PART 4: iTunes Search

function iTunesSearch(evt) {
  evt.preventDefault();
  const searchTerm = document.querySelector("#search-term").value;

  // TODO: In the #itunes-results list, show all results in the following format:
  // `Artist: ${artistName} Song: ${trackName}`
}
document.querySelector('#itunes-search-form').addEventListener('submit', iTunesSearch);
