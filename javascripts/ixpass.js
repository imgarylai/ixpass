$(document).ready(function(){
  $(".fluid-width-video-wrapper").fitVids();

  function videoOverlay () {
    var videoHeight = $(".fluid-width-video-wrapper").height();
    $(".video_overlays").css("height", videoHeight);
  }

  $(window).resize(function () {
    videoOverlay();
  });

  $(window).on("load", function () {
    videoOverlay();
  });
  videoOverlay();
});
