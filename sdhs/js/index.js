$(document).ready(function () {
    var next = 1;
    var imgSlide = $(".imgSlide>img");
    var max = imgSlide.length-1;

    imgSlide.eq(max).animate({left:800},0);
    imgSlide.eq(1).animate({left:800},0);

    function slide() {
        imgSlide.eq(next).animate({left:-800},0);
        imgSlide.eq(next -1).animate({left:800},1000);
        imgSlide.eq(next).animate({left:0},1000);

        next++;
        if(next > max)
            next = 0;
    }
    setInterval(slide,3000);

    $("#loginButton").click(function () {
        this.style.display = "block";
    })
});