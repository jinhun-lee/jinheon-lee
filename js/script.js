$(document).ready(function(){
//햄버거버튼요소 클릭하면 그요소에 on클래스를 첨가해준다
  let mobileBtn = $('.mobile-btn')

//요소명(객체).이벤트(할일)})
mobileBtn.click(function(){
$(this).toggleClass("on")
$('.mobile-nav').toggleClass("on")
$('.window-mask').toggleClass("on")
})

const $menu = $('header ul li'),
$contents = $('section')
// console.log($contents)
// 주menu click시 해당 section으로 이동
$menu.click(function(){
$(this).addClass('on');
// 클릭한 메뉴(li)의 index number를 가져온다.
let idx = $(this).index();
let $section = $contents.eq(idx);
// console.log($section)
let sectionDistance = $section.offset().top - 50
console.log(sectionDistance)
$("html, body").animate({
  scrollTop: sectionDistance            
})
})
// mobile menu click시 해당 section으로 이동
$('.mobile-nav li').click(function(){
$(this).addClass('on');
// 클릭한 메뉴(li)의 index number를 가져온다.
let idx = $(this).index();
let $section = $contents.eq(idx);
// console.log($section)
let sectionDistance = $section.offset().top - 50
console.log(sectionDistance)
$("html, body").animate({
  scrollTop: sectionDistance            
})
})


$(window).scroll(function(){
  if($(document).scrollTop()>980){
      // 스크롤발생시 할일
      $('header').addClass('scroll')

  }else {
      // 스크롤발생안됐을경우 할일
      $('header').removeClass('scroll')
  }        
  // console.log($(window).scrollTop())스크롤별
  $contents.each(function(){
      if($(this).offset().top <= $(window).scrollTop()+1000){
          let idx = $(this).index();
          $menu.removeClass("on");
          $menu.eq(idx).addClass("on")
          $('.menu-mobile li').removeClass('active')
          $('.menu-mobile li').eq(idx).addClass('active')

      }
  })
})







});


$(window).on('resize', function(){
  var windowWidth = $(window).width();
  var mobileNav = $('.mobile-nav');
  var mobileBtn = $('.mobile-btn');
  var windowMask = $('.window-mask')


  if (windowWidth > 900 && mobileNav.hasClass('on')) {
  mobileNav.removeClass('on');
  mobileBtn.removeClass('on');
  windowMask.removeClass('on');
  }


})


// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.

function onYouTubePlayerAPIReady() {
    // <div id=player>
    new YT.Player('player', {    
    videoId: 'HSDjG4TwkiM',
    playerVars: {
        autoplay: true,
        loop: true,
        playlist: 'HSDjG4TwkiM', 
    },
    events: {
        onReady: function(event){
            event.target.mute();
        }
    }

    });
}


// swiper JS

var swiper = new Swiper(".video", {
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // centeredSlides: true,

  navigation: {
    nextEl: ".video-button-next",
    prevEl: ".video-button-prev",
  },
  breakpoints: {
    1350 : {
      slidesPerView : 3,
      spaceBetween: 30,
      },
      850 : {
        slidesPerView : 2,
        spaceBetween: 30,
      },
      300 : {
        slidesPerView : 1,
        spaceBetween: 30,
      }
  } 
});

var swiper = new Swiper(".live", {
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // centeredSlides: true,

  navigation: {
    nextEl: ".live-button-next",
    prevEl: ".live-button-prev",
  },
  breakpoints: {
    1350 : {
      slidesPerView : 3,
      spaceBetween: 30,
      },
      850 : {
        slidesPerView : 2,
        spaceBetween: 30,
      },
      300 : {
        slidesPerView : 1,
        spaceBetween: 30,
      }
  } 
});

var swiper = new Swiper(".radio", {
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // centeredSlides: true,

  navigation: {
    nextEl: ".radio-button-next",
    prevEl: ".radio-button-prev",
  },
  breakpoints: {
    1350 : {
      slidesPerView : 3,
      spaceBetween: 30,
      },
      850 : {
        slidesPerView : 2,
        spaceBetween: 30,
      },
      300 : {
        slidesPerView : 1,
        spaceBetween: 30,
      }
  } 
});


// 팝업 팝업

$(document).ready(function(){
  let gridImgs = $('.swiper-slide')
  console.log(gridImgs)
  gridImgs.click(function(e){

      $('.window-content, .window').fadeIn(500)
      
      // $('.window-content').append(`<iframe src='https://www.youtube.com/embed/$($(this).data("video")}?rel=0&playsinline=1&autoplay=1`

      $('.window-content').append("<iframe src='https://www.youtube.com/embed/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' frameborder='0' allowfullscreen></iframe>")
  })
// 팝업종료
$('.window close').click(function(){
  $('.window, .window-content').fadeOut(500)
})

// gridImgs.mouseover(function(){
// $(this).attr('src',$(this).data("animated"))
// })


// gridImgs.mouseover(function(){
// $(this).find('img').attr('src',$(this).find('img').data("animated"))
// })

// gridImgs.mouseout(function(){
//   $(this).find('img').attr('src',$(this).find('img').data("static"))
//  })

})