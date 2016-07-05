(function ($) {

    // Random images on home page carousel

    var randomBg = "url(img/honfleur.jpg)";

    $(".item-1").css("background-image", randomBg);

    // Isotope init
    var $grid = $(".grid").isotope({

        // options
        itemSelector: ".grid-item",
        percentPosition: true
    });
    // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });

    // Img scale on :hover
    $(".grid-item").mouseenter(function () {

        $(this).children(".overlay").css("opacity", "0.7");
        $(this).children("img").css("transform", "scale(1.05, 1.05)");
    }).mouseleave(function () {

        $(this).children(".overlay").css("opacity", "0");
        $(this).children("img").css("transform", "scale(1, 1)");
    });

    // Filter images
    $(".filter").click(function () {

        var $this = $(this);
        var filteredImg = $this.attr("rel");

        $grid.isotope({filter: "." + filteredImg });

    });

    $(".filter-all").click(function () {

        $grid.isotope({filter: "*"});
    });

    // Filter buttons active
    $(".btn-link").click(function () {

        var $this = $(this);

        $(".btn-link.active").removeClass("active");
        $this.addClass("active");
    });

})(jQuery);
