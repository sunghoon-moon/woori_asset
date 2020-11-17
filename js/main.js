// main.js
let $isMenuBtnClicked = false;

function click() {if ((event.button==2) || (event.button==2)) {alert('무단복사를 막기 위해 마우스 우클릭 금지가 설정되어 있습니다');}}document.onmousedown=click

// gnb hover
$(function(){
  $('#gnb > .depth1 > li').hover(
    function(){
      if($isMenuBtnClicked) return
      $('#header_wrap').addClass('hover');
      $('#header_bg').addClass('show');
      $('.depth2').addClass('depth2_open');
    },
    function(){
      if($isMenuBtnClicked) return
      $('#header_wrap').removeClass('hover');
      $('#header_bg').removeClass('show');
      $('.depth2').removeClass('depth2_open');
    }
  )
})

// header language
$(function(){
  $("#language_box .btn_language").on("click", function(){
    if(!$(this).hasClass("on")) {
        $(this).addClass("on");
        $("#language_box .language_list").stop().slideDown(200);
    } else {
        $(this).removeClass("on");
        $("#language_box .language_list").stop().slideUp(200);
    }
  }).focusout(function(){
    setTimeout(function(){
        $("#language_box .btn_language").removeClass("on");
        $("#language_box .language_list").stop().slideUp(200);
    }, 200);
  });
})

// header fixed
$(document).ready(function() {
  var jbOffset = $('#header_wrap').offset();
  $(window).scroll(function() {
    if ($(document).scrollTop() > jbOffset.top) {
      $('#header_wrap').addClass('fixed');
    } else {
      $('#header_wrap').removeClass('fixed');
    }
  });
});

// menu open
$(function(){
  $('#menu_opener').click(
    function() {
      $isMenuBtnClicked = !$isMenuBtnClicked
      $('#header_wrap').stop().toggleClass('open');
      $('#header_bg').stop().toggleClass('show')
      $('.depth2').stop().toggleClass('depth2_open');
    }
  )
})

// main banner
$(function(){
  var mySwiper = new Swiper('.swiper-container', {
      // 설정 옵션
      direction: 'horizontal',
      loop: true,  
      // autoplay
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
        // pagination
      pagination: {
          el: '.swiper-pagination',
          clickable: true
      },
        // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  })
})

// Aside menu
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() >= 700) {
      $('#aside_menu').fadeIn(300);
    } else {
      $('#aside_menu').fadeOut(300);
    }
  })

  $('#top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 1000);
  });
});

// fund info
$(document).ready(function(){
  fadeSlides();
  });
  function fadeSlides(){
        var index = 0;
        var duration= 1000;
        var slideFirst= 1;

        fadeSlide(slideFirst);

        $('.fund_list').on('click', function(e) {
            e.preventDefault();
            var idx = $('.bsiness_list li').index($(this).parent());
            $('.bsiness_list li').removeClass('on');
            $('.bsiness_list li:eq('+(idx)+')').addClass('on');
            fadeSlide(idx + 1);
        });
        function fadeSlide(n) {
            $('#buslnese_explan ul li').stop(true).animate({'opacity':0},duration,function() {$(this).css({'display':'none'});});
            $('#sub_slider .slider_con ul li').stop(true).animate({'opacity':0},duration,function() {$(this).css({'display':'none'});});
            $('#sub_slider .mask_wrap li').css({'display':'none'}).stop(true);
            
            
            $('#buslnese_explan ul li:eq('+(n - 1)+')').css({'display':'block'}).stop(true).animate({'opacity':1},duration);
            $('#sub_slider .mask_wrap li:eq('+(n - 1)+')').css({'display':'block'});
            $('#sub_slider .slider_con ul li:eq('+(n - 1)+')').css({'display':'block'}).stop(true).animate({'opacity':1},duration);
            
            $('.bsiness_list li').removeClass('on');
            $('.bsiness_list li:eq('+(n - 1)+')').addClass('on');
            index = n;
        }      
  }

  // care
  $(document).ready(function(){
  setImageSlide('div#care_slider_circle_wrap div', 1, true, 2000);
  function setImageSlide(selector, first, status, speed) {
  var numSlide = $(selector).length;
  var slideNow = 0;
  var slideNext = 0;
  var slideFirst = first;
  var timerId = null;
  var isTimerOn = status;
  var timerSpeed = speed;

  showSlide(slideFirst);

  $(selector).find('a.slide_btn').on('click focusin', function() {
      var index = $(this).parent().index();
      showSlide(index + 1);
  });

  function showSlide(n) {
      clearTimeout(timerId);
      $(selector).removeClass('on');
      $(selector).find('img.on').css({'opacity': 0});
      $(selector).find('img.off').css({'opacity': 1, 'z-index': 0});
      $(selector).eq(n - 1).addClass('on');
      $(selector).eq(n - 1).find('img.on').css({'transition':'opacity 0.5s ease', 'opacity': 1, 'z-index': 1});
      slideNow = n;
      slideNext = (n >= numSlide) ? 1 : (n + 1);
      if (isTimerOn === true) {
          timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
      }
    }
  }
});

// footer_ family site
$(function(){
  $("#family_site .btn").on("click", function(){
    if(!$(this).hasClass("on")) {
        $(this).addClass("on");
        $("#family_site .site_list").stop().slideDown(200);
    } else {
        $(this).removeClass("on");
        $("#family_site .site_list").stop().slideUp(200);
    }
  }).focusout(function(){
    setTimeout(function(){
        $("#family_site .btn").removeClass("on");
        $("#family_site .site_list").stop().slideUp(200);
    }, 200);
  });
})

// lnb
$(function(){
  var menu = 0;
  // $('#visual #lnb li').removeClass();
  // $('#visual #lnb li').eq(menu).addClass('active');

  $('#visual #lnb li').click(function(){
      $('#visual #lnb li').removeClass();
      $(this).eq(menu).addClass('active');
  })

  // history
  enterView({
      selector: '.history_img',
      enter: function(el) {
          el.classList.add('play');
      }
  });
})

// header asset
const header = {
  id: '#header_wrap', // HTML 문서상의 요소명
  url: "./components/header.html"  // 파일 경로
}

// footer asset
const footer = {
  id: '#main_footer',
  url: "./components/footer.html"
}

function loadAssets(asset) {
  $.ajax({
    url: asset.url,
    success: function (data) {
      $(asset.id).html(data);
    }
  });
}

// 헤더 로드
loadAssets(header)

// 푸터 로드
loadAssets(footer)
