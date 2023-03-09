export default function showhideModule() {
  $(document).ready(function () {
    $("#show-hidden-menu").click(function () {
      $('.location-button').addClass('hidden-btn');
      $(".hidden").slideToggle("fast");
    });
  });
}
