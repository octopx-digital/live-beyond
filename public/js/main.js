import arrows from './navigation';

(() => {
  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  var mainBanner = document.querySelector('#main-banner');
  var menuOpen = false;
  var bannerIndex = 0;

  var galleryTl = new TimelineLite();

  function checkScrollMenu() {
    // if menu is open, close it when scroll
    if(menuOpen === true) {
      menuAnimation();
    }
  }

  function menuAnimation() {
    if (!menuOpen) {
      menuOpen = true;
      hambMenu.classList.remove('ion-android-menu');
      hambMenu.classList.add('ion-android-close');
      header.classList.add('openmenu');
    }
    else {
      menuOpen = false;
      // menuTl.reverse();
      hambMenu.classList.remove('ion-android-close');
      hambMenu.classList.add('ion-android-menu');
      header.classList.remove('openmenu');
    }
  }

  function rotateBanner() {
    let timeout = setTimeout(bannerAnimation, 8000);
  }

  function bannerAnimation() {
    let photos = mainBanner.querySelectorAll('.banner-photo');
    console.log(photos.length);
    if (bannerIndex === photos.length-1) {
      galleryTl.to(photos[bannerIndex], 2, {left: "100%"});
      galleryTl.to(photos[0], 2, {left: 0}, "-=2");
      bannerIndex = 0;
    }
    else {
      galleryTl.to(photos[bannerIndex+1], 0, {visibility: "hidden", left: "100%"});
      galleryTl.to(photos[bannerIndex], 2, {left: "-100%"});
      galleryTl.to(photos[bannerIndex+1], 2, {visibility: "visible", left: 0}, "-=2");
      bannerIndex = bannerIndex+1;
    }
    rotateBanner();
  }

  function getBanner() {
    console.log('from getBanner');
    let url = 'banner/getAll';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        data.banner.forEach((banner) => {
          let image = `<img class="banner-photo" src="images/${banner.photo}_small.jpg" alt="${banner.alt}">`;
          mainBanner.innerHTML += image;
        });
        rotateBanner();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function getFacts() {
    // console.log('from getFacts');
    let url = 'facts/getAll';

    fetch(url)
      .then((resp) => resp.json())
        .then((data) => {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function getStats() {
    // console.log('from getStats');
    let url = 'stats/getAll';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function getMyths() {
    // console.log('from getMyths');
    let url = 'myths/getAll';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function getEvents() {
    // console.log('from getEvents');
    let url = 'events/getAll';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data.events);
        let container = document.querySelector('#events-container');
        data.events.forEach(({title, date, time, address, partner, logo, link}) => {
          let tern = "";
          if(time != null){
            tern = `<div class="inline"><h5>When:</h5><p>${time}</p></div>`;
          }
          let newEvent = `<div class="events">
            <div class="event-data">
              <h2>${title}</h2>
              <h3>${date}</h3>
              `+tern+`
              <div class="inline"><h5>Where:</h5><p>${address}</p></div>
              <p class="tiny">in association with</p>
              <img src="images/${logo}.png" alt="${partner}">
              <a href="${link}"><p>Details</p></a>
              </div>
            </div>`;
            container.innerHTML += newEvent;
        });
        arrows();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getBanner.call();
  getFacts.call();
  getStats.call();
  getMyths.call();
  getEvents.call();
  hambMenu.addEventListener('click', menuAnimation, false);
})();
