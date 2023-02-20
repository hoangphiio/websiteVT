export default function popupModule() {
  $(function () {
    $(".footer-box-contact").click(function () {
      $(".footer-box-cover").fadeIn("300");
    });
    $(".footer-box-cover,.footer-box-close").click(function () {
      $(".footer-box-cover").fadeOut("300");
    });
    $(".close").click(function () {
      $(".footer-box-cover").fadeOut(300);
    });
    $(".footer-box-contents").click(function (e) {
      e.stopPropagation();
    });
    $(".three-dots").click(function () {
      $("#popup").toggle();
    });
  });
}
