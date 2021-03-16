let cityID_w = 5604473;  /* Preston ID id=5604473 */
let appid_w = 'fab78e362767aed9fac976cb8465e914';

/* 'https://api.openweathermap.org/data/2.5/forecast?id=${cityID_w}&units=imperial&appid=${appid_w}';   */

const apiURL_w = '/js/weather.json'

  /* Preston ID id=5604473 */

fetch(apiURL_w)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject)

    document.getElementById('current-temp').textContent = jsObject.main.temp

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

  })
