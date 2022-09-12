



$(document).ready(function(){

// ===== 메뉴 슬라이드 팝업 START =====
  $(".menuBar_M_menuButton").click(function(){
    $("#popUpBack").css({
      display: "block",
    });
    $("#popUpslide").animate({
      right: 0,
    });
    $(".cancelationX").fadeIn().animate({
      right: "295px",
      rotate: "360deg",
    });
  });

  $(".cancelationX").click(function(){
    $("#popUpBack").css({
      display: "none",
    });
    $("#popUpslide").animate({
      right: "-275px",
    });
    $(".cancelationX").fadeOut().animate({
      right: "-50px",
      rotate: "0deg",
    });
  });
// ===== 메뉴 슬라이드 팝업 END =====


// ===== 메뉴이미지 속 애니메이션 START =====
  $(window).scroll(function(){

    if($(this).scrollTop() > "400") {
      $("#coffeePack, .productA_title").addClass("animate");
    } else {
      $("#coffeePack, .productA_title").removeClass("animate");
    }

    if($(this).scrollTop() > "1600") {
      $("#pyfTitle, .menuInfo_btn").addClass("animate");
      $(".menuInfo_title_word_Upper, .menuInfo_title_word_Lower").addClass("animateSlow");
    } else {
      $("#pyfTitle, .menuInfo_btn").removeClass("animate");
      $(".menuInfo_title_word_Upper, .menuInfo_title_word_Lower").removeClass("animateSlow");
    }

    if($(this).scrollTop() > "2000") {
      $(".reserveMagazine_img").addClass("animate");
    } else {
      $(".reserveMagazine_img").removeClass("animate");
    }

    if($(this).scrollTop() > "2400") {
      $(".storeInfoWordWrap div:nth-child(3)").addClass("animate");
      $(".storeInfoWordWrap div:first-child, .storeInfoWordWrap div:nth-child(2), .storeInfo_btn").addClass("animateSlow");
    } else {
      $(".storeInfoWordWrap div:nth-child(3)").removeClass("animate");
      $(".storeInfoWordWrap div:first-child, .storeInfoWordWrap div:nth-child(2), .storeInfo_btn").removeClass("animateSlow");
    }
  });
// ===== 메뉴이미지 속 애니메이션 END =====

// ===== 팝업 메뉴바 1차메뉴 작동 START =====
  $(".popUpMenu > div").click(function(){
    var className = $(this).attr("class");
    if(className === "menuOpened"){
      $(this).css({
        textDecoration: "underline",
      });
      $(this).removeClass("menuOpened");
      $(this).next().slideDown();
      $(this).children().css({
        rotate: "180deg",
      });
    } else {
        $(this).css({
          textDecoration: "none",
        });
        $(this).addClass("menuOpened");
        $(this).next().slideUp();
        $(this).children().css({
          rotate: "0deg",
        });
    };
  });
// ===== 팝업 메뉴바 1차메뉴 작동 END =====

// ===== 팝업 메뉴바 2차메뉴 작동 START=====
  $(".popUpMenu > ul > li > div").click(function(){
    var className = $(this).attr("class");
    if(className === "menuOpened"){
      $(this).css({
        textDecoration: "underline",
      });
      $(this).removeClass("menuOpened");
      $(this).next().slideDown();
      $(this).children().css({
        rotate: "180deg",
      });
    } else {
        $(this).css({
          textDecoration: "none",
        });
        $(this).addClass("menuOpened");
        $(this).next().slideUp();
        $(this).children().css({
          rotate: "0deg",
        });
    };
  });
// ===== 팝업 메뉴바 2차메뉴 작동 END =====


// ===== 풋터 메뉴바 1차메뉴 작동 START =====
  $(".footerMenuRow > div").click(function(){
    var className = $(this).attr("class");
    if(className === "menuOpened"){
      $(this).css({
        textDecoration: "underline",
      });
      $(this).removeClass("menuOpened");
      $(this).next().slideDown();
      $(this).children().css({
        rotate: "180deg",
      });
    } else {
        $(this).css({
          textDecoration: "none",
        });
        $(this).addClass("menuOpened");
        $(this).next().slideUp();
        $(this).children().css({
          rotate: "0deg",
        });
    };
  });
// ===== 풋터 메뉴바 1차메뉴 작동 END =====

// ===== 풋터 메뉴바 2차메뉴 작동 START =====
  $(".footerMenuRow > ul > li > div").click(function(){
    var className = $(this).attr("class");
    if(className === "menuOpened"){
      $(this).css({
        textDecoration: "underline",
      });
      $(this).removeClass("menuOpened");
      $(this).next().slideDown();
      $(this).children().css({
        rotate: "0deg",
      });
    } else {
        $(this).css({
          textDecoration: "none",
        });
        $(this).addClass("menuOpened");
        $(this).next().slideUp();
        $(this).children().css({
          rotate: "180deg",
        });
    };
  });
// ===== 풋터 메뉴바 2차메뉴 작동 END =====


// ===== 메인 메뉴바 슬라이드 STRAT =====
  $(".lowerBar ul > li > div:first-child").hover(function(){

    $(this).css({
      color: "#669900",
      background: "#2C2A29",
      textDecoration: "underline",
    });

    $(".submenuBackground, .submenuBackgroundLower").stop().css({
      opacity: "0.5",
    }).slideDown();
    $(this).next().stop().slideDown();
    var upperHeight = $(this).next().children().first().outerHeight(true);
    var lowerHeight = $(this).next().children().eq(1).outerHeight(true);
    // var wholeHeight = upperHeight+lowerHeight;
    $(".submenuBackground").height(upperHeight);
    $(".submenuBackgroundLower").height(lowerHeight);
    // $(".menuBarBackground").height(wholeHeight);

    console.log(upperHeight);
    console.log(lowerHeight);
    // console.log(wholeHeight);
    $(".submenuBackground, .submenuBackgroundLower").stop().css({
      opacity: "0",
    }).slideUp();
    $(this).next().stop().slideUp();

    $(".submenuBackground, .submenuBackgroundLower").stop().css({
      opacity: "1",
    }).slideDown(400);
    $(this).next().stop().slideDown(400);


  }, function(){


    $(this).css({
      color: "#333333",
      background: "#f6f5ef",
      textDecoration: "",
    });

    $(this).next().stop().slideUp(100);
    $(".submenuBackground, .submenuBackgroundLower, .menuBarBackground").stop().slideUp(200);

    var upperHeight = $(this).next().children().first().outerHeight(true);
    var lowerHeight = $(this).next().children().eq(1).outerHeight(true);
    // var wholeHeight = upperHeight+lowerHeight;

    $(".submenuBackground").height("0");
    $(".submenuBackgroundLower").height("0");
    $(".menuBarBackground").height("0");
    console.log(upperHeight);
    console.log(lowerHeight);
    // console.log(wholeHeight);
  });


  // ===== 화면 로딩 후 프로모션바 1회 닫기 START =====
  setTimeout(function(){
    $(".noticeBgColorPatternWrap > .patternRight > div > .noticeBarRightArrrow_active").click();
  }, 0);
  // ===== 화면 로딩 후 프로모션바 1회 닫기 END =====

  // ===== 스벅 프로모션바 슬라이드 START =====
  $(".noticeBgColorPatternWrap > span:nth-child(2) > div > div:nth-child(2)").click(function(){
    var classNamed = $(this).attr("class");
    if(classNamed === "noticeBarRightArrrow_active"){
      $(this).css({
        transform: "scaleY(1)",
      });
      $(this).addClass("downWardsArrow");

      $("#starbucksPromotion").slideUp();
    } else {
      $(this).css({
        transform: "scaleY(-1)",
      });
      $(this).removeClass("downWardsArrow");
      $("#starbucksPromotion").slideDown();
    };
  });
  // ===== 스벅 프로모션바 슬라이드 END =====

// ===== 스벅 프로모션 Bar BX슬라이드 START =====
  $('.starbucksPromotion_bxslider').bxSlider({
    auto: true,
    speed: 500,
    slideWidth: 891,
    autoControls: true,
    pager: true,
  });
// ===== 스벅 프로모션 Bar bxSlider END =====

// ===== 풋터 수상기록 BX슬라이드 START =====
  $('.award_bxslider').bxSlider({
    auto: true,
    autoControls: true,
    pager: true,
  });
// ===== 풋터 수상기록 BX슬라이드 END =====

});
