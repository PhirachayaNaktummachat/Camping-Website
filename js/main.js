let menu = document.querySelector('.menu-icon');


menu.onclick=()=>{
    menu.classList.toggle("move");
}

// Category
var swiper = new Swiper(".categorySwiper", {
 
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //Responsive for all devices
    breakpoints: {
        280:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        510:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        750:{
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
  });

  // Sellingslider
var swiper = new Swiper(".selling-slider", {
 
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //Responsive for all devices
    breakpoints: {
        280:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        510:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        750:{
            slidesPerView: 3,
            spaceBetween: 15,
        },
        920:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
  });