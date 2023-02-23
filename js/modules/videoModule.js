export default function videoModules() {
  $(".vpop").on("click", function (e) {
    e.preventDefault();
    $(
      "#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close"
    ).show();

    var srchref = "",
      autoplay = "",
      id = $(this).data("id");
    if ($(this).data("type") == "youtube")
      var srchref = "https://www.youtube.com/embed/";

    if ($(this).data("autoplay") == true) autoplay = "?autoplay=1";
  });

  $("#video-popup-close, #video-popup-overlay").on("click", function (e) {
    $(
      "#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay"
    ).hide();
  });
}
