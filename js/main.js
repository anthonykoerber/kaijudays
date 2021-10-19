// Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

// Update : added throttle to increase performance
window.addEventListener('scroll', throttle(parallax, 14));

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