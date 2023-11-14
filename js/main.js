var slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // 2초마다 이미지 체인지
}

const goMyPage = () => {
    window.location.href = '../html/mypage.html';
}



/*like*/

// const likeBtn = document.getElementById('likeBtn');
// const empty = document.getElementById('emptyHeart');
// const fill = document.getElementById('fillHeart');

// likeBtn.addEventListener("click", function(){
//     if(fill.style.display == "flex"){
//         fill.style.display = "none";
//         empty.style.display = "flex";
//     }else{
//         fill.style.display = "flex";
//         empty.style.display = "none";
//     }
//
// })

/*cards*/

const setupCarousel = (wrapperClass, carouselClass) => {
    const wrapper = document.querySelector(`.${wrapperClass}`);
    const carousel = document.querySelector(`.${carouselClass}`);
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = wrapper.querySelectorAll(`.${wrapperClass} .arrow-btn`);
    const carouselChildrens = [...carousel.children];

    let isDragging = false, startX, startScrollLeft, timeoutId, isAutoPlay = true;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");


    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("fa-angle-left")) {
                // 왼쪽 화살표
                carousel.scrollLeft -= firstCardWidth;
            } else if (btn.classList.contains("fa-angle-right")) {
                // 오른쪽 화살표
                carousel.scrollLeft += firstCardWidth;
            }
        });
    });

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop); // 드래그 멈춤 추가
    carousel.addEventListener("scroll", infiniteScroll);

    function dragStart(e) {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    function dragging(e) {
        if(!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    function dragStop() {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    function infiniteScroll() {
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if(window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();
}

setupCarousel('wrapper1', 'carousel1');
setupCarousel('wrapper2', 'carousel2');


