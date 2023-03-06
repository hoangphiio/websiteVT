export default function showhideModule() {
  $(document).ready(function () {
    $(".button-change").click(function () {
      $(this).text(function (i, v) {
        return v === "Xem thêm" ? "Rút gọn" : "Xem thêm";
      });
    });

    $("#show-hidden-menu").click(function () {
      $(".hidden").slideToggle("fast");
    });
  });
}
