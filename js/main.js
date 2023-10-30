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

/*cards*/

const wrapper = document.querySelector(".wrapper");
const wrappernew = document.querySelector(".wrapper_new");

const likecarousel = document.querySelector(".wrapper .likecarousel");
const carousel = document.querySelector(".wrapper_new .carousel");
/*
const carousel = document.querySelector(".carousel");
*/
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const arrowBtnsnew = document.querySelectorAll(".wrapper_new i");

const likecarouselChildrens = [...likecarousel.children];
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;


let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


likecarouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    likecarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

likecarouselChildrens.slice(0, cardPerView).forEach(card => {
    likecarousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});


likecarousel.classList.add("no-transition");
likecarousel.scrollLeft = carousel.offsetWidth;
likecarousel.classList.remove("no-transition");

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");


arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        likecarousel.scrollLeft += btn.id === "likeleft" ? -firstCardWidth : firstCardWidth;
    });
});

arrowBtnsnew.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "newleft" ? -firstCardWidth : firstCardWidth;
    });
});


/*


const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    likecarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    newcaroselcarousel.scrollLeft = startScrollLeft - (e.pageX - startX);

}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
*/

const likeinfiniteScroll = () => {
    if(likecarousel.scrollLeft === 0) {
        likecarousel.classList.add("no-transition");
        likecarousel.scrollLeft = likecarousel.scrollWidth - (2 * likecarousel.offsetWidth);
        likecarousel.classList.remove("no-transition");
    }
    else if(Math.ceil(likecarousel.scrollLeft) === likecarousel.scrollWidth - likecarousel.offsetWidth) {
        likecarousel.classList.add("no-transition");
        likecarousel.scrollLeft = likecarousel.offsetWidth;
        likecarousel.classList.remove("no-transition");
    }


    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}


const newinfiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }


    clearTimeout(timeoutId);
    if(!wrappernew.matches(":hover")) autoPlay();
}


const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

/*
likecarousel.addEventListener("mousedown", dragStart);
likecarousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
*/


likecarousel.addEventListener("scroll", likeinfiniteScroll);
carousel.addEventListener("scroll", newinfiniteScroll);

wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

wrappernew.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrappernew.addEventListener("mouseleave", autoPlay);

/*like*/

const likeBtn = document.getElementsById('likeBtn_like');
const empty = document.getElementsById('emptyHeart_like');
const fill = document.getElementsById('fillHeart_like');

likeBtn.addEventListener("click", function(){
    if(fill.style.display == "flex"){
        fill.style.display = "none";
        empty.style.display = "flex";
    }else{
        fill.style.display = "flex";
        empty.style.display = "none";
    }

})


const mypageicon = document.querySelector('.goMyPage');

mypageicon.addEventListener("click",function (){
    window.location.href = 'mypage.html';
})



//like눌렀을 때 넘어가지 않아야 함
//모든 공연에 like가 떠야 함