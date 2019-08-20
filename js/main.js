(function ($) {

    // Isotope init
    // var $grid = $(".grid").isotope({
    //
    //     // options
    //     itemSelector: ".grid-item",
    //     percentPosition: true
    // });

    // layout Isotope after each image loads
    // $grid.imagesLoaded().progress( function() {
    //     $grid.isotope();
    // });

    // layout Isotope after all images have loaded
    var $grid = $(".grid").imagesLoaded( function() {
        $grid.isotope({

            // options
            itemSelector: ".grid-item",
            percentPosition: true
        });
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

        // PrettyPhoto Gallery
        $("div." + filteredImg + " .overlay a").attr("rel", "prettyPhoto[gallery-" + filteredImg + "]");

    });

    $(".filter-all").click(function () {

        $grid.isotope({filter: "*"});
        $(".overlay a").attr("rel", "prettyPhoto[gallery-all]")
    });

    // Filter buttons active
    $(".btn-link").click(function () {

        var $this = $(this);

        $(".btn-link.active").removeClass("active");
        $this.addClass("active");
    });

    // PrettyPhoto init
    $("a[rel^='prettyPhoto']").prettyPhoto();

    // Copyright current year
    const date = new Date();
    const copyright = document.getElementById("footer-copyright");
    copyright.textContent = date.getFullYear();

})(jQuery);
