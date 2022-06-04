const menuItem = document.querySelectorAll('.top-menu-item');
const afterTopMenu = document.querySelector(".after-top-menu-line");
const afterMainMenu = document.querySelector('.after-main-menu-line');
const afterVideoSection = document.querySelector('.after-video-section-line');
const bigSectionDetail = document.querySelectorAll('.article-big-details');
const afterFirstBigBlog = document.querySelector('.after-first-big-blog-line');
const horizontalLine = document.querySelectorAll('.horizontal-line');
const boxOnImage = document.querySelector('.box-on-image');
const footer = document.querySelector('.footer');

// Bulb

const bulb = document.querySelector('.bulb');
const finalbulb = document.querySelector('.finalbulb');
const body = document.querySelector('.light');
const btncheck = document.querySelector('checking');


finalbulb.onclick = function() {
    audio.play();
    var lighton = body.classList.toggle('on');
    
    checking(lighton)
}


function checking (lighton) {
    if(lighton === true) {
        finalbulb.src = 'images/on.png';
        document.body.style.background = "#f2E9EB";
        boxOnImage.style.background = "#fedd89";
        footer.style.background= "#31383F";

        for(i=0; i<horizontalLine.length;i++) {
            horizontalLine[i].style.background = "#f2E9EB";
        }

        for(i=0; i<bigSectionDetail.length; i++) {
            bigSectionDetail[i].style.color = "#31383F";
        }
    }else {
        finalbulb.src = 'images/off2.png';
        finalbulb.style.width = '50px';
        // bigSectionDetail.style.color = "#F2E9EB";
        document.body.style.background = "#31383F";
        boxOnImage.style.background = "#dd8ea4";
        footer.style.background= "#dd8ea4";
        // menuItem.style.color = "#DD8EA4";
        for(i=0; i<horizontalLine.length;i++) {
            horizontalLine[i].style.background = "#31383F";
        }
        for(i=0; i<bigSectionDetail.length; i++) {
            bigSectionDetail[i].style.color = "#f2e9eb";
        }
    }
}   


// Coursel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    pagination:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
})
    




