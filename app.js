$(document).ready(function () {

var HEART_POSITION = 40;

  $(".miniature").on("click", function () {
    var imgSrc = $(this).css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1').split('/').reverse()[0];
    console.log(imgSrc);
    var imgNum = imgSrc.replace(/[^0-9]/g,'');
    $("img").attr("src", "img/" + imgSrc);
    $.getJSON("file.json", function (data) {
      var info = data[imgNum];
      $(".active").css(info)
    })
  });

  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';

  $('.active').on("click", function (e) {
    var xPos = e.pageX - $(".img-container").offset().left - HEART_POSITION;
    var yPos = e.pageY - $(".img-container").offset().top - HEART_POSITION;
    $("<div></div>").css({
      "top": yPos,
      "left": xPos
    }).addClass("heart").appendTo(".img-container")
    $(".heart").one(animationEvent, function () {
      $(".heart").remove();
    });
  });
});
