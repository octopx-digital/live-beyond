(() => {
  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  var menuOpen = false;

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
        console.log(data.events);
        let container = document.querySelector('#events-container');
        data.events.forEach((event) => {
          console.log(event);
          let newEvent = `<div class="events">
            <div class="event-data">
              <h2>`+event.title+`</h2>
              <h3>`+event.date+`</h3>
              <img src="images/`+event.logo+`.png" alt="`+event.partner+`">

              <p>`+event.address+`</br>

              <a href="`+event.link+`"><p>Event Details</p></a>
              </div>
            </div>`;
            container.innerHTML += newEvent;
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getFacts.call();
  getStats.call();
  getMyths.call();
  getEvents.call();
  hambMenu.addEventListener('click', menuAnimation, false);

})();
