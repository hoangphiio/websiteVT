export default function burgerMenuModule() {
  $(document).ready(function () {
    var hamburger = $(".mobile-menu"), // mobile-menu
      menu = $(".navbar-item"), //menu
      sub_menu = $(".mega-menu"), //sub-menu-wrapper
      menu_item = $(".header-dropdown-item"); //has-sub-menu

    hamburger.on("click", function () {
      menu.slideToggle();
      $(this).toggleClass("active");
    });

    menu_item.on("click", function () {
      $(this).children(".mega-menu").slideToggle();
    });
    $(".menu > ul > li:has( > ul)").addClass("menu-dropdown-icon");
    $(".menu > ul > li > ul:not(:has(ul))").addClass("normal-sub");
    $(".menu > ul").before('<a href="#" class="menu-mobile">&nbsp;</a>');
    $(".menu > ul > li").hover(function (e) {
      if ($(window).width() > 943) {
        $(this).children("ul").stop(true, false).fadeToggle(150);
        e.preventDefault();
      }
    });
    $(".menu > ul > li").click(function () {
      if ($(window).width() <= 943) {
        $(this).children("ul").fadeToggle(150);
      }
    });
    $(".menu-mobile").click(function (e) {
      $(".menu > ul").toggleClass("show-on-mobile");
      e.preventDefault();
    });
  });
}
