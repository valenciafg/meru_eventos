$(document).ready(function(){
    $("body").vegas({
        slides: [
            { src: "dist/images/banner.jpg" },
            { src: "dist/images/hotels-desktop.jpg" },
            { src: "dist/images/restaurant.jpg" },
            { src: "dist/images/town.jpg" }
        ],
        overlay: 'bower_components/vegas/dist/overlays/06.png'
    });
});
