
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            freeMode: true,
           
            // mousewheel: false,
            // keyboard: true
        });



        
        var swiper = new Swiper(".mySwiper2", {


            slidesPerView: 4,
            spaceBetween: 25,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            freeMode: true,
           
            // mousewheel: false,
            // keyboard: true
        });



        var swiper = new Swiper(".mySwiper3", {


            slidesPerView: 3,
            spaceBetween: 25,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            freeMode: true,
           
            // mousewheel: false,
            // keyboard: true
        });

        function updateSwiperView() {
            if (window.innerWidth <= 768) { // You can adjust the breakpoint as needed
                swiper.params.slidesPerView = 3;
            } else {
                swiper.params.slidesPerView = 4;
            }
            swiper.update(); // Update swiper with new parameters
        }
        
        // Call the function on load and whenever the window is resized
        updateSwiper2View();
        window.addEventListener("resize", updateSwiperView);


        