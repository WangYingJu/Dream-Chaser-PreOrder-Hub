$(function () {
  // 顯示gotop
  $(".anchor").hide(); // 20230210 新增
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50) {
      $(".anchor").fadeIn(300);
    } else {
      $(".anchor").fadeOut(300);
    }
  });

  // note顯示down箭頭
  // $(".down").hide();
  $(".note").on("scroll", function (e) {
    e.preventDefault();
    if ($(".note").scrollTop() >= 50) {
      $(".down").fadeOut(300);
    } else {
      $(".down").fadeIn(300);
    }
  });

  // right nav
  // go top
  // 向上捲動
  $(".goTop").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  // go reserve
  // 向上捲動
  $(".goOrder").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section1").offset().top }, 1000);
  });
});
