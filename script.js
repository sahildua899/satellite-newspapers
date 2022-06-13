const menuItem = document.querySelectorAll('.top-menu-item');
const afterTopMenu = document.querySelector(".after-top-menu-line");
const afterMainMenu = document.querySelector('.after-main-menu-line');
const afterVideoSection = document.querySelector('.after-video-section-line');
const bigSectionDetail = document.querySelectorAll('.article-big-details');
const afterFirstBigBlog = document.querySelector('.after-first-big-blog-line');
const horizontalLine = document.querySelectorAll('.horizontal-line');
const boxOnImage = document.querySelector('.box-on-image');
const articleSidebarDetails = document.querySelectorAll('.article-sidebar-details');
const footer = document.querySelector('.footer');
const newsletter = document.querySelector('.newsletter-section');
const categorySection = document.querySelectorAll('.category-section');
const card = document.querySelectorAll('.card');
const MostPopular = document.querySelector('.most-popular');
const cardArticleDetails = document.querySelectorAll('.card-article-details');
const mainHeaderContainer = document.querySelector('.main-header-container');
const clockHour = document.querySelector('#hour');
const clockminutes = document.querySelector('#minutes');
const clockseconds = document.querySelector('#seconds');
const clockampm = document.querySelector('#ampm');
const scrollLine = document.querySelector('.scroll-line')

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
        newsletter.style.color = "#31383F";
        MostPopular.style.background = "#fedd89";
        MostPopular.style.color = "#31383F";
        mainHeaderContainer.style.background="#f2E9EB";
        clockHour.style.color = "#31383F";
        clockminutes.style.color = "#31383F";
        clockseconds.style.color = "#31383F";
        clockampm.style.color = "#31383F";
        scrollLine.style.background = "#31383F";


        for(i=0; i<horizontalLine.length;i++) {
            horizontalLine[i].style.background = "#f2E9EB";
        }

        for(i=0; i<bigSectionDetail.length; i++) {
            bigSectionDetail[i].style.color = "#31383F";
        }

        for(i=0; i<articleSidebarDetails.length; i++) {
            articleSidebarDetails[i].style.color = "#31383F"
        }
        for(i=0; i<categorySection.length; i++) {
            categorySection[i].style.color = "#31383F"
            categorySection[i].style.border = "1px solid #31383F"
        }
        for(i=0; i<card.length; i++) {
            card[i].style.background = "#31383F"
        }
        for(i=0; i<cardArticleDetails.length; i++) {
            cardArticleDetails[i].style.color = "#FFF"
        }

    }else {
        finalbulb.src = 'images/off2.png';
        finalbulb.style.width = '50px';
        // bigSectionDetail.style.color = "#F2E9EB";
        document.body.style.background = "#31383F";
        boxOnImage.style.background = "#dd8ea4";
        footer.style.background= "#dd8ea4";
        newsletter.style.color = "#f2e9eb";
        MostPopular.style.background = "#dd8ea4";
        MostPopular.style.color = "#f2e9eb";
        mainHeaderContainer.style.background="#31383F";
        clockHour.style.color = "#f2e9eb";
        clockminutes.style.color = "#f2e9eb";
        clockseconds.style.color = "#f2e9eb";
        clockampm.style.color = "#f2e9eb";
        scrollLine.style.background = "#DD8EA4";
        // menuItem.style.color = "#DD8EA4";
        for(i=0; i<horizontalLine.length;i++) {
            horizontalLine[i].style.background = "#31383F";
        }
        for(i=0; i<bigSectionDetail.length; i++) {
            bigSectionDetail[i].style.color = "#f2e9eb";
        }
        for(i=0; i<articleSidebarDetails.length; i++) {
            articleSidebarDetails[i].style.color = "#f2e9eb"
        }
        for(i=0; i<categorySection.length; i++) {
            categorySection[i].style.color = "#f2e9eb";
            categorySection[i].style.border = "1px solid #f2e9eb";
        }
        for(i=0; i<card.length; i++) {
            card[i].style.background = "#f2E9EB";
        }
        for(i=0; i<cardArticleDetails.length; i++) {
            cardArticleDetails[i].style.color = "#31383F"
        }
    }
}   




// Digital Clock

setInterval(()=>{

    // Digital CLock

    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // add zero before single digit number

        h=(h<10)? "0" + h :h;
        m=(m<10)? "0" + m :m;
        s=(s<10)? "0" + s :s;
        
        let am = h >= 12 ? "PM":"AM";

    // Convert 24 hours clock to 12 hours
    if(h>12) {
        h=h-12;
    }


    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
    })

    // Scroll Line

    $(document).ready(function(){
        $(window).scroll(function(){
          var windowTop = $(window).scrollTop(),
          documentHeight = $(document).height(),
          windowHeight = $(window).height();
          var scroll = (windowTop / (documentHeight - windowHeight))*100;
          $('.scroll-line').css("width", (scroll + '%'));
        });
      });
    




