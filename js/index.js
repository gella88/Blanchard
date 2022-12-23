// BURGER-MENU
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#header_nav').classList.add('header_nav_active')
    })
});
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger_active').addEventListener('click', function() {
        document.querySelector('#header_nav').classList.remove('header_nav_active')
    })
});

// SEARCH - FORM

document.querySelector(".btn_search").addEventListener("click", function() {
    document.querySelector(".nav_form").classList.add('nav_form_active');
    this.classList.add("active");
})

document.querySelector(".search_x").addEventListener("click", function() {
    document.querySelector(".nav_form").classList.remove('nav_form_active');
    this.classList.remove("active");
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search_x').addEventListener('click', function() {
        document.querySelector(".btn_search").classList.remove("active")
    })
});


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search').addEventListener('click', function() {
        document.querySelector('#nav_form').classList.add('nav_form_active')
    })
});
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search_x').addEventListener('click', function() {
        document.querySelector('#nav_form').classList.remove('nav_form_active')
    })
});



// DROPDOWN MENU - SECOND NAVIGATION
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".list--item__btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".container--dropdown");

            document.querySelectorAll(".list--item__btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active--btn");
                }
            });

            document.querySelectorAll(".container--dropdown").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("active-list--item");
                }
            })
            dropdown.classList.toggle("active-list--item");
            btn.classList.toggle("active--btn")
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".list")) {
            document.querySelectorAll(".container--dropdown").forEach(el => {
                el.classList.remove("active-list--item");
            })
            document.querySelectorAll(".list--item__btn").forEach(el => {
                el.classList.remove("active--btn");
            });
        }
    })
})

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
        /* чтобы изначально ползунок был виден */
        autoHide: false,
        /* с помощью этого значения вы можете управлять высотой ползунка*/
        scrollbarMaxSize: 28,
    });
})



// Swiper HERO-BLOCK
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container-hero', {
        speed: 1500,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 500
        },
    });
});

// Галерея + чекбокс

new Swiper('.gallery__slider', {
    speed: 1000,
    preloadImages: true,
    allowTouchMove: false,
    pagination: {
        el: '.gallery__fraction',
        type: 'fraction',
    },

    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: '.gallery__btn--next',
        prevEl: '.gallery__btn--prev',
    },

    breakpoints: {
        1450: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 38
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    },

});


let swiperSlides = document.querySelector(".gallery").querySelectorAll(".gallery__item");
let modal = document.querySelector(".swiper-section-modal");
let modalBtn = modal.querySelector(".close");
swiperSlides.forEach(el => {
    el.addEventListener("click", function() {
        let img = this.querySelector("img");
        let link = img.getAttribute("src");
        console.log(modal.querySelector("img"));
        animation(modal, "modal-active", "play");
        modal.querySelector("img").setAttribute("src", link);
    })
})

modalBtn.addEventListener("click", function() {
    animation(modal, "modal-active", "reverse");
});

function animation(el, Class, flag) {
    if (flag === "play") {
        el.style.display = "flex";
        setTimeout(function() {
            el.classList.add(Class);
        }, 50)
    } else if (flag === "reverse") {
        el.classList.remove(Class);
        setTimeout(function() {
            el.style.display = "none";
        }, 700)
    }
}

const selector = document.querySelector(".select")

const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
        containerOuter: 'choices',
    },

});
let arr = [];
selector.addEventListener("change", function(event) {
    // document.querySelectorAll(`.swiper-slide[data-tab=${event.detail.value}]`).forEach(item => {
    //   arr.push(item);
    // });
    // console.log(arr);
    document.querySelectorAll(".swiper-slide-gallery").forEach((item, index) => {
            console.log(index)
            gallerySlider.removeSlide(index)
        })
        // arr.forEach((el, index) => {
        //   gallerySlider.addSlide(index, el)
        // })
});

// ACCODION 

$(function() {
    $(".ac--list").accordion({
        icons: false,
        heightStyle: "content",
    });
    document.querySelectorAll(".heading-item--btn").forEach(item => {
        item.addEventListener("click", function(e) {
            $(".ac--list").accordion({
                icons: false,
                heightStyle: "content",
                collapsible: true,
                active: false
            });
            let path = e.currentTarget.dataset.path;
            document.querySelectorAll(".tab-content").forEach(el => {
                el.classList.remove("tab-active");
            });
            document.querySelectorAll(".heading-item--btn").forEach(el => {
                el.classList.remove("btn-active");
            });
            document.querySelector(`[data-target='${path}']`).classList.add("tab-active")
            this.classList.add("btn-active");
        })
    })

    document.querySelectorAll(".tab-content").forEach(item => {
        // let btns = item.find(".ac--list__iten-tab");
        let btns = item.querySelectorAll(".ac--list__iten-tab");
        let articles = item.querySelectorAll(".article-content");
        btns.forEach(el => {
            el.addEventListener("click", function(e) {
                let path = e.currentTarget.dataset.path;
                let tabCont = item.querySelector(`[data-target='${path}']`);
                console.log(tabCont)
                articles.forEach(el => {
                    el.classList.remove("article-tabActive")
                })
                btns.forEach(el => {
                    el.classList.remove("article-btn-active")
                })
                tabCont.classList.add("article-tabActive")
                this.classList.add("article-btn-active");
            })
        })

    })
});

// EVENT SWIPER

let eventSlider = new Swiper(".swiper_event", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next_event",
        prevEl: ".swiper-button-prev_event"
    },

    breakpoints: {

        1450: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },

        1200: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },

        576: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },

        // 1200: {
        //     slidesPerView: 3,
        //     slidesPerGroup: 1,
        //     spaceBetween: 30,
        // }

    },

    a11y: {
        prevSlideMessage: 'Предыдущий',
        nextSlideMessage: 'Следующий',
    }

});

// PROJECT

let projectSlider = new Swiper(".swiper_project", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
    navigation: {
        nextEl: ".swiper-button-next_project",
        prevEl: ".swiper-button-prev_project"
    },

    breakpoints: {

        1450: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },

        1200: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },

        576: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },

    },

    a11y: {
        prevSlideMessage: 'Предыдущий',
        nextSlideMessage: 'Следующий',
    }

});

// tooltips

tippy('#tool-one', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'blanch'
});

tippy('#tool-two', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
    theme: 'blanch'
});

tippy('#tool-three', {
    content: 'В стремлении повысить качество',
    theme: 'blanch'
});

// PROJECTS SWIPER
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-projects', {
        speed: 500,
        loop: true,
        slidesPerView: 3,


        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
    });
});