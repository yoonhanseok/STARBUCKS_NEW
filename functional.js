



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

  $(".lowerBar ul > li > div:nth-child(2)").hover(function(){
    $(this).addClass("popActive");
    $(this).prev().addClass("popActive");
    $(this).prev().css({
      color: "#669900",
      background: "#2C2A29",
      textDecoration: "underline",
    });
  }, function(){
    $(this).removeClass("popActive");
    $(this).prev().removeClass("popActive");
  });

  $("#submenuBackground, #submenuBackgroundLower").hover(function(){
    $(this).addClass("popActive");
  }, function(){
    $(this).removeClass("popActive");
  });

  $(".lowerBar ul > li > div:first-child").mouseover(function(){

    $(this).addClass("popActive");

    var thisClassName = $(this).attr("class");
    var subClassName = $(this).next().attr("class");
    var backAClassName = $("#submenuBackground").attr("class");
    var backBClassName = $("#submenuBackgroundLower").attr("class");

    $(this).css({
      color: "#669900",
      background: "#2C2A29",
      textDecoration: "underline",
    });

    $(this).next().stop().slideDown(1);
    // ==> [display: none]되어있을 경우 크기 값이 null 혹은 0으로 나오기 때문에 임의로 열어서 활성화

    var upperHeight = $(this).next().children().first().height();
    var lowerHeight = $(this).next().children().eq(1).height();

    $(this).next().stop().slideUp(1);
    // ==> 변수에 높이 값을 담은 후 빠르게 바로 닫기

    $("#submenuBackground").css({
      height: upperHeight,
    });
    $("#submenuBackgroundLower").css({
      height: lowerHeight,
    });
    // ==> 각 백그라운드에 높이 값 설정
    console.log(thisClassName);
    console.log(subClassName);
    console.log(backAClassName);
    console.log(backBClassName);

    $("#submenuBackground, #submenuBackgroundLower").stop().slideDown(200);
    $(this).next().stop().slideDown(200);
  });

  $(".lowerBar ul > li > div:first-child").mouseout(function(){
    var thisClassName = $(this).attr("class");
    var subClassName = $(this).next().attr("class");
    var backAClassName = $("#submenuBackground").attr("class");
    var backBClassName = $("#submenuBackgroundLower").attr("class");
    $(this).removeClass("popActive");
    $(this).css({
      color: "#333333",
      background: "#f6f5ef",
      textDecoration: "",
    });

    console.log(thisClassName);
    console.log(subClassName);
    console.log(backAClassName);
    console.log(backBClassName);

    if(thisClassName === "popActive" || subClassName === "popActive" || backAClassName === "popActive" || backBClassName === "popActive"){
    } else {

    $(this).css({
      color: "#333333",
      background: "#f6f5ef",
      textDecoration: "",
    });

    $("#submenuBackground, #submenuBackgroundLower").height(0);
    // ==> 값 초기화 (초기화 안하니까 처음 팝업된 크기로 고정되는 현상 발견)

    $("#submenuBackground, #submenuBackgroundLower").stop().slideUp(200);
    $(this).next().stop().slideUp(200);

    };

  });

  $(".lowerBar ul > li > div:nth-child(2)").mouseout(function(){
    var thisClassName = $(this).attr("class");
    var subClassName = $(this).next().attr("class");
    var backAClassName = $("#submenuBackground").attr("class");
    var backBClassName = $("#submenuBackgroundLower").attr("class");

    if(thisClassName === "popActive" || subClassName === "popActive" || backAClassName === "popActive" || backBClassName === "popActive"){
    } else {

    $(this).prev().css({
      color: "#333333",
      background: "#f6f5ef",
      textDecoration: "",
    });

    $("#submenuBackground, #submenuBackgroundLower").height(0);
    $("#submenuBackground, #submenuBackgroundLower").stop().slideUp(200);
    $(this).stop().slideUp(200);
    };

  });

  $("#submenuBackground, #submenuBackgroundLower").mouseout(function(){

    var backAClassName = $("#submenuBackground").attr("class");
    var backBClassName = $("#submenuBackgroundLower").attr("class");

    if(backAClassName === "popActive" || backBClassName === "popActive"){
    } else {

    $(".lowerBar ul > li > div:first-child").css({
      color: "#333333",
      background: "#f6f5ef",
      textDecoration: "",
    });

    $("#submenuBackground, #submenuBackgroundLower").height(0);
    $("#submenuBackground, #submenuBackgroundLower").stop().slideUp(200);
    $(this).next().stop().slideUp(200);
    };

  });

  $("#submenuBackgroundLower").mouseout(function(){
    var thisClassName = $(this).attr("class");
    var subClassName = $(this).next().attr("class");
    var backAClassName = $("#submenuBackground").attr("class");
    var backBClassName = $("#submenuBackgroundLower").attr("class");

    if(thisClassName === "popActive" || subClassName === "popActive" || backAClassName === "popActive" || backBClassName === "popActive"){
    } else {

    $(".lowerBar ul > li > div:first-child").css({
      color: "#333333",
      background: "#f6f5ef",
      textDecoration: "",
    });

    $("#submenuBackground, #submenuBackgroundLower").height(0);
    $("#submenuBackground, #submenuBackgroundLower").stop().slideUp(200);
    $(this).next().stop().slideUp(200);
    };

  });

  // ===== 메인 메뉴바 슬라이드 STRAT =====


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
