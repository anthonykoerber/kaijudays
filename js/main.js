// Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

// analytics 
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-10YF1JCMN6');

// Update : added throttle to increase performance
window.addEventListener('scroll', throttle(parallax, 14));
const copyrightDate = document.querySelector("#current-year");

// const eventLink = document.querySelector("#event-link");
// const mapLink = document.querySelector("#map-link");
// const kaijudaysLink = document.querySelector("#kaijudays-link");

// eventLink.addEventListener("click", analytics);
// mapLink.addEventListener("click", analytics);
// kaijudaysLink.addEventListener("click", analytics);

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
  var coords1 = (scrolled * 0.4);
  parallax1.style.transform = 'translateY(' + coords1 + 'px)';
};

// init
setCurrentYear();