let cityID_f = 5604473;  /* Preston ID id=5604473 */
let appid_f = 'fab78e362767aed9fac976cb8465e914';


/*
const apiURL_f =
'https://api.openweathermap.org/data/2.5/forecast?id=${cityID_f}&units=imperial&appid=${appid_f}';
*/

const apiURL_f = '/js/forecast.json'

fetch(apiURL_f)
 .then(response => response.json())
 .then(jsObject => {
   console.log(jsObject)
   let day = 0;
   const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/*
let d = new Date(jsobject.list[4].dt_txt);*/
/*
thefive.forEach( days => {

  let d = new Date(days.dt_txt);
 
console.log(d);
document.getElementById('dayofweek${day+1}').textContent = dayofWeek[d.getDay()];
document.getElementById('forecast${day+1}').textContent = jsObject.list[4].main.temp;
day++
 */
});

/*
 let img = document.createElement('img');
 img.setAttribute('src', prophets[i].imageurl);

 img.alt = `${prophets[i].name} ${prophets[i].lastname}`;
 
 img.style.width = '200px';
 card.appendChild(img);
*/

/*
   document.getElementById('current-temp').textContent = jsObject.main.temp
   document.getElementById('high-temp').textContent = jsObject.main.temp_max
   document.getElementById('wind-chill').textContent = jsObject.main.feels_like
   document.getElementById('wind-speed').textContent = jsObject.wind.speed
   document.getElementById('humidity').textContent = jsObject.main.humidity
   document.getElementById('weather').textContent = jsObject.weather[0].description





   const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
   const desc = jsObject.weather[0].description;  // note how we reference the weather array
   document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
   document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
   document.getElementById('icon').setAttribute('alt', desc);

 })
 */