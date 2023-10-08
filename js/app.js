// navbar0=========================

// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//   if (document.documentElement.scrollTop > 20) {
//     nav.classList.add(".scroll-on");
//   } else {
//     nav.classList.remove(".scroll-on");
//   }
// };

// // nav hide ========================
// let navbar = document.querySelectorAll(".nav-link");
// let navcollaspes = document.querySelector(".navbar-collapse.collapse");
// navbar.forEach(function (a) {
//   a.addEventListener("click", function () {
//     navcollaspes.classList.remove("show");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  let nav = document.querySelector(".navigation-wrap");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("scroll-on");
    } else {
      nav.classList.remove("scroll-on");
    }
  };

  // nav hide ========================
  let navbar = document.querySelectorAll(".nav-link");
  let navcollapses = document.querySelector(".navbar-collapse.collapse");
  navbar.forEach(function (a) {
    a.addEventListener("click", function () {
      navcollapses.classList.remove("show");
    });
  });
});

// countersection=================================
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor((range / duration) * 10)); // Calculate step based on duration and range

    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        clearInterval(timer);
      }
    }, step);
  }
  counter("count", 0, 1287, 3000);
  counter("count2", 100, 1500, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 2110, 3000);
});

// bookfood

function bookTable() {
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  // Perform booking logic here
  // You can send the data to a server for processing

  alert("Booking successful!");
}
