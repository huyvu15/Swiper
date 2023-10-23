/*inspiration
https://www.behance.net/gallery/91768571/Artist-UI-Concept
*/

let mySidenav = document.getElementById("mySidenav");
let main = document.getElementById("main");
let navIcon = document.getElementById("nav-icon");

function toggleNav() {
  navIcon.classList.toggle("open");
  mySidenav.classList.toggle("active");
  main.classList.toggle("active");
}

function closeNav() {
  navIcon.classList.remove("open");
  mySidenav.classList.remove("active");
  main.classList.remove("active");
}

$(".portfolio-slides").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$(".portfolio-slides-second").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

$(".portfolio-slides").slickLightbox({
  itemSelector: "a",
  navigateByKeyboard: true
});

$(".portfolio-slides-second").slickLightbox({
  itemSelector: "a",
  navigateByKeyboard: true
});

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "grid";
  document.body.style.overflow = "hidden";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};
