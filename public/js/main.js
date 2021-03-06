import resize from './modules/image_resize';
import arrows from './modules/event_gallery';
import instagram from './modules/instagram';
import videoCtrl from './modules/videocontrols';
import CountUp from 'countup.js';

(() => {
  var bodyarea = document.querySelector('body');
  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  var menuBtns = document.querySelectorAll('.section-link');
  var mainBanner = document.querySelector('#main-banner');
  var factsSec = document.querySelector('#facts');
  var statsSec = document.querySelector('#stats');
  var statsList = statsSec.querySelector('#stats-wrapper > ul');
  var mythsSec = document.querySelector('#myths');
  var videoSec = document.querySelector('#video-cont');
  var eventsSec = document.querySelector('#events');
  var instaSec = document.querySelector('#instagram');
  var facts;
  var menuOpen = false;
  var statsAnimated = false;
  var factsAnimated = false;
  var statsNumbers = [];
  var bannerIndex = 0;

  var bannerTl = new TimelineMax({
    repeat: -1,
    paused: true
  });

  var factsTl = new TimelineLite({
    paused: true
  });

  function checkScrollMenu() {
    // if menu is open, close it when scroll
    if(menuOpen === true) {
      menuAnimation();
    }
  }

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= -Math.abs((rect.height/4)) &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight+(rect.height/2) || document.documentElement.clientHeight+(rect.height/2)) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateStats() {
    var statsSuccess = statsList.querySelector('.organ-success');
    var queue = statsList.querySelectorAll('.organ-queue');
    var statsQueue = queue[queue.length-1];
    if(isElementInViewport(statsSuccess) || isElementInViewport(statsQueue)) {
      if (!statsAnimated) {
        let stats = statsList.querySelectorAll('.stat-number');
        let options = {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
        };
        stats.forEach((number, index) => {
          let animation = new CountUp(number, 0, statsNumbers[index], 0, 5, options);
          if (!animation.error) {
            animation.start();
          } else {
            console.error(animation.error);
          }
        });
        statsAnimated = true;
        window.removeEventListener('scroll', animateStats, false);
      }
    }
  }

  function displayFacts() {
    if(!factsAnimated) {
      let wrapper = factsSec.querySelector('#fact-wrapper');
      facts = wrapper.querySelectorAll('.fact');
      if(isElementInViewport(wrapper)) {
        factsTl.play();
        factsAnimated = true;
        window.removeEventListener('scroll', displayFacts, false);
      }
    }
  }

  function animateFacts() {
    factsTl.to(facts[0], 1, {opacity: 1, top: 0});
    factsTl.to(facts[1], 1, {opacity: 1, top: 0});
    factsTl.to(facts[2], 1, {opacity: 1, top: 0});
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
      hambMenu.classList.remove('ion-android-close');
      hambMenu.classList.add('ion-android-menu');
      header.classList.remove('openmenu');
    }
  }

  // function to scroll to selected area when menu clicked
  function scrollSection(evt) {
    evt.preventDefault();
    // menuAnimation();

    switch(evt.currentTarget.id) {
      case 'header-logo':
        bodyarea.scrollIntoView({block: 'start', inline: 'start', behavior: 'smooth'});
        break;
      case 'footer-logo':
        bodyarea.scrollIntoView({block: 'start', inline: 'start', behavior: 'smooth'});
        break;
      case 'menu-facts':
        factsSec.scrollIntoView({block: 'start', inline: 'start', behavior: 'smooth'});
        break;
      case 'menu-stats':
        statsSec.scrollIntoView({block: 'start', inline: 'start', behavior: 'smooth'});
        break;
      case 'menu-myths':
        mythsSec.scrollIntoView({block: 'start', inline: 'start', behavior: 'smooth'});
        break;
      case 'menu-video':
        videoSec.scrollIntoView({block: 'start', inline: 'start', behavior: 'smooth'});
        break;
      case 'menu-events':
        eventsSec.scrollIntoView({block: 'start', inline: 'start', behavior: 'smooth'});
        break;
      case 'menu-insta':
        instaSec.scrollIntoView({block: 'start', inline: 'start', behavior: 'smooth'});
        break;
      default:
        break;
    }
  }

  function bannerAnimation() {
    let photos = mainBanner.querySelectorAll('.banner-photo');

    bannerTl.to(photos[1], 2, {opacity: 1}, "+=5.0");
    bannerTl.to(photos[2], 2, {opacity: 1}, "+=5.0");
    bannerTl.to(photos[1], 0, {opacity: 0});
    bannerTl.to(photos[3], 2, {opacity: 1}, "+=5.0");
    bannerTl.to(photos[2], 0, {opacity: 0});
    bannerTl.to(photos[4], 2, {opacity: 1}, "+=5.0");
    bannerTl.to(photos[3], 0, {opacity: 0});
    bannerTl.to(photos[5], 2, {opacity: 1}, "+=5.0");
    bannerTl.to(photos[4], 0, {opacity: 0});
    bannerTl.to(photos[6], 2, {opacity: 1}, "+=5.0");
    bannerTl.to(photos[5], 0, {opacity: 0});
    bannerTl.to(photos[7], 2, {opacity: 1}, "+=5.0");
    bannerTl.to(photos[6], 0, {opacity: 0});
    bannerTl.to(photos[7], 2, {opacity: 0}, "+=5.0");

    bannerTl.play();
  }

  function getBanner() {
    let url = 'banner/getAll';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        data.banner.forEach(({photo, alt}) => {
          let image = `<img class="banner-photo media-change" src="images/${photo}_large.jpg" alt="${alt}">`;
          mainBanner.innerHTML += image;
        });
        resize.setImageSize.call(document.querySelectorAll('.media-change'));
        bannerAnimation();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function getFacts() {
    let url = 'facts/getAll';

    fetch(url)
      .then((resp) => resp.json())
        .then((data) => {
          let factWrapper = document.querySelector('#fact-wrapper');
          data.facts.forEach(({name, description}) => {
            let newFact = `<div id="${name}" class="fact">
              <p class="fact-desc">${description}</p>
              </div>`;
            factWrapper.innerHTML += newFact;
          });
          facts = factsSec.querySelectorAll('.fact');
          window.addEventListener('scroll', displayFacts, false);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function getStats() {
    let url = 'stats/getAll';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let statsWrapper = statsSec.querySelector('#stats-wrapper > ul');
        data.stats.forEach(stat => {
          statsNumbers.push(stat.success);
          statsNumbers.push(stat.queue);
          let item = `<li><div class="stats-organ"><div class="icon-wrapper"><img src="images/${stat.icon}.svg" alt="${stat.organ_title} icon"></div><p class="organ-name">${stat.organ_title}</p></div><div class="organ-success"><p class="stat-number">0</p></div><div class="organ-queue"><p class="stat-number">0</p></div></li>`;
          statsWrapper.innerHTML += item;
        });
        window.addEventListener('scroll', animateStats, false);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function getVideo() {
    let url = 'video/get';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let newData = data.video[0];
          let videoWrapper = document.querySelector('#video-wrapper');
          let placeholder = `<video id="video" class="video-change" poster="images/${newData.placeholder}_large.jpg">
              <source src="videos/${newData.video}_large.mp4"></source>
              <source src="videos/${newData.video}_large.webm"></source>
              <source src="videos/${newData.video}_large.ogv"></source>
              </video>
              <div id="over-video"><div id="video-btn">
                  <i class="ion-play" aria-hidden="true"></i>
                </div></div><div id="video-controls">
                    <div id="seek-bar"><span></span></div>
                  <div id="button-wrapper" class="clearfix">
                      <div id="play-btn"><i class="ion-play video-ctrl-bt" aria-hidden="true"></i></div>
                      <p id="video-time">0:00</p><div id="full-btn">
                      <i class="ion-arrow-expand video-ctrl-bt" aria-hidden="true"></i>
                      </div><div id="volume-bar"><div id="volume-bg"></div><div id="volume-fg"></div></div><div id="volume-btn">
                        <i class="ion-android-volume-up video-ctrl-bt" aria-hidden="true"></i></div></div></div>`;
          videoWrapper.innerHTML = placeholder;
          resize.setVideoSize.call(document.querySelectorAll('.video-change'));
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function getMyths() {
    let url = 'myths/getAll';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let mythsList = document.querySelector('#myths-list');
        data.myths.forEach(({title, text, position}) => {
          if(position < 10){
            var newPosition = "0"+position;
          } else {
            var newPosition = position;
          }
          let myth = `<li><span class="coloured">${newPosition}.</span><h4>${title}</h4><p>${text}</p></li>`;
          mythsList.innerHTML += myth;
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function sizeElements() {
    var container = document.querySelector('#events-container');
    let numEl = container.children.length;

    var screensize = resize.checkScreenSize();
    var thumbSize;
    if (screensize == 'small'){
      thumbSize = 100;
    }
    if (screensize == 'medium'){
      thumbSize = 50;
    }
    if (screensize == 'large'){
      thumbSize = 25;
    }
    container.style.width = (numEl * thumbSize) +"%";
    arrows();
  }

  function getEvents() {
    let url = 'events/getAll';
    var container = document.querySelector('#events-container');

    var screensize = resize.checkScreenSize();
    var thumbSize;
    if (screensize == 'small'){
      thumbSize = 100;
    }
    if (screensize == 'medium'){
      thumbSize = 50;
    }
    if (screensize == 'large'){
      thumbSize = 25;
    }

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        while(container.firstChild) {
          container.removeChild(container.firstChild);
        }
        container.style.width = (data.events.length * thumbSize) +"%";
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

  function getInstagram() {
    let instagramWrapper = this;
    let instagramContent = instagram.instagramContent;

    instagramContent.name.forEach(function(name, index) {
      let instaItem = document.createElement('div');
      instaItem.className = 'insta-item';
      let photoWrapper = document.createElement('div');
      photoWrapper.className = 'insta-photo-wrapper';
      let instaPhoto = document.createElement('img');
      instaPhoto.src = `images/${instagramContent.photo[index]}_large.jpg`;
      instaPhoto.alt = instagramContent.name[index];
      instaPhoto.className = 'insta-photo media-change';
      photoWrapper.appendChild(instaPhoto);
      instaItem.appendChild(photoWrapper);
      let instaPost = document.createElement('div');
      instaPost.className = 'insta-post';
      let instaName = document.createElement('p');
      instaName.className = 'insta-name';
      instaName.innerHTML = instagramContent.name[index];
      instaPost.appendChild(instaName);
      let instaUser = document.createElement('p');
      instaUser.className = 'insta-user';
      instaUser.innerHTML = instagramContent.username[index];
      instaPost.appendChild(instaUser);
      let instaText = document.createElement('p');
      instaText.className = 'insta-text';
      instaText.innerHTML = instagramContent.desc[index];
      instaPost.appendChild(instaText);
      instaItem.appendChild(instaPost);
      instagramWrapper.appendChild(instaItem);
    });
  }

  resize.checkScreenSize.call(window.innerWidth);
  getBanner.call();
  getFacts.call();
  getStats.call();
  getMyths.call();
  getEvents.call();
  getVideo.call();
  getInstagram.call(instaSec.querySelector('#insta-wrapper'));

  window.addEventListener('load', videoCtrl, false);
  window.addEventListener('load', animateFacts, false);
  window.addEventListener('resize', sizeElements, false);
  window.addEventListener('resize', resize.checkScreenSize, false);
  window.addEventListener('resize', resize.changeImageSize, false);
  window.addEventListener('scroll', checkScrollMenu, false);
  hambMenu.addEventListener('click', menuAnimation, false);
  menuBtns.forEach((button) => {
    button.addEventListener('click', scrollSection, false);
  });

})();
