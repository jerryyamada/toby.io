let appid = '7902395e981f096d6e1c661d78975faa'
// let lat = '37.3382'
// let lon = '-121.8863'

// const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=37.3382&lon=-121.8863&units=imperial&exclude=minutely,hourly&appid=7902395e981f096d6e1c661d78975faa`;
// const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${appid}`;
const apiURL = 'js/onecall.json'

fetch(apiURL)
  .then(function (response) {
    return response.json()
  })

  .then(function (dataObject) {
    console.log(dataObject)
    if (dataObject.daily.length > 1) {
      for (let i = 0; i < 3; i++) {
        var date = new Date(dataObject.daily[i].dt * 1000)
        // console.log(dataObject.daily[i].dt);
        console.log(date)
        var day = date.getDay()
        const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        console.log(dayOfWeek[day])
        console.log(dataObject.current.temp)

        /*
      if (dataObject.list[i].dt_txt.includes('18:00:00')) {
        let card = document.createElement('section')
        var date = new Date(dataObject.list[i].dt_txt)
        const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        document.querySelector('div.cards').appendChild(card)

        let p1 = document.createElement('p')
        p1.textContent = dayOfWeek[date.getDay()]
        card.appendChild(p1)

        const imagesrc = 'https://openweathermap.org/img/w/' + dataObject.list[i].weather[0].icon  + '.png'
        //p2.textContent = `<img src="${imagesrc}" alt="${dataObject.list[i].weather[0].description}" id="icon">`;

      let img = document.createElement('img')
      img.setAttribute('src', imagesrc)
      img.alt = `$dataObject.list[i].weather[0].description`
      img.setAttribute('id', 'icon')
      img.style.width = '60px'
      card.appendChild(img)

        let p3 = document.createElement('p')
        p3.textContent = dataObject.list[i].main.temp
        card.appendChild(p3)

      }
      */
      }
    }

    if (dataObject.hasOwnProperty('alerts')) {
      console.log('alert exists')
    } else {
      console.log('alert does not exist')
    }
  })
