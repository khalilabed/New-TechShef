var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 200,
    // pagination: {
    //     el: ".swiper-pagination",
    //     type: "fraction",
    // },
    navigation: {
        prevEl: ".swiper-button-next",
        nextEl: ".swiper-button-prev",
    },
});