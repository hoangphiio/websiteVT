export default function scrollModule() {
  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
}
