export default function navigationModule() {
  $(document).ready(function () {
    // fade in #section
    $(function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop() + 300;
        var scrollBottom =
          $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 500) {
          $(".menuabout").addClass("fixedmenu");
        } else {
          $(".menuabout").removeClass("fixedmenu");
        }

        if (scroll >= $("#about-info").offset().top) {
          $(".menuabout li").removeClass("selected");
          $("li.company-info").addClass("selected");
        }
        if (scroll >= $("#dev-milestone").offset().top) {
          $(".menuabout li").removeClass("selected");
          $("li.dev-milestone").addClass("selected");
        }
        if (scroll >= $("#vision-mission").offset().top) {
          $(".menuabout li").removeClass("selected");
          $("li.vision-mission").addClass("selected");
        }
        if (scroll >= $("#commitment-quality").offset().top) {
          $(".menuabout li").removeClass("selected");
          $("li.commitment-quality").addClass("selected");
        }
      });
    });
    // Click menu run to section
    $("html,body").animate(
      {
        scrollTop: $("#about-info").offset().top,
      },
      "fast"
    );

    $("li.company-info a").click(function () {
      $("html,body").animate(
        {
          scrollTop: $("#about-info").offset().top,
        },
        "fast"
      );
    });

    $("li.dev-milestone a").click(function () {
      $("html,body").animate(
        {
          scrollTop: $("#dev-milestone").offset().top,
        },
        "fast"
      );
    });

    $("li.vision-mission a").click(function () {
      $("html,body").animate(
        {
          scrollTop: $("#vision-mission").offset().top,
        },
        "fast"
      );
    });

    $("li.commitment-quality a").click(function () {
      $("html,body").animate(
        {
          scrollTop: $("#commitment-quality").offset().top,
        },
        "fast"
      );
    });
  });
}
