// Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

// analytics ga object
window.ga = window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'G-QJP3KP3BGK', 'auto');
ga('send', 'pageview');

// Update : added throttle to increase performance
window.addEventListener('scroll', throttle(parallax, 14));
const copyrightDate = document.querySelector("#current-year");

const eventLink = document.querySelector("#event-link");
const mapLink = document.querySelector("#map-link");
const kaijudaysLink = document.querySelector("#kaijudays-link");

eventLink.addEventListener("click", analytics);
mapLink.addEventListener("click", analytics);
kaijudaysLink.addEventListener("click", analytics);

function analytics(e) {
  if(ga) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'link',
      eventAction: 'click',
      eventLabel: e.target.id
    });
  }
}

function setCurrentYear() {
  if (copyrightDate) {
    const date = new Date();
    copyrightDate.innerHTML = date.getFullYear();
  }
}

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.pageYOffset;
  var parallax1 = document.querySelector(".parallax-1");
  // var parallax2 = document.querySelector(".parallax-2");
  // You can adjust the 0.4 to change the speed
  var coords1 = (scrolled * 0.4);
  // var coords2 = (scrolled * 0.2);
  // console.log("coords1: ", coords1);
  // console.log("coords2: ", coords2);
  parallax1.style.transform = 'translateY(' + coords1 + 'px)';
  // parallax2.style.transform = 'translateY(' + coords2 + 'px)';
};

// init
setCurrentYear();