$(document).ready(function () {
    var next = 1;
    var $imgSlide = $(".imgSlide>img");
    var imgSlide = $imgSlide;
    var max = imgSlide.length-1;
    var intervalTime = 3000;
    imgSlide.eq(max).animate({left:800},0);
    imgSlide.eq(1).animate({left:800},0);

    var slideCurrent = setInterval(slide,intervalTime);


    $("#loginButton").click(function () {
        $("#login_Popup").css({'display':'block'});
        $("#mask").css({'display':'blcok'});
    });
    $("#close_login").click(function () {
        $("#login_Popup").css({'display': 'none'});
        $("#mask").css({'display': 'none'});
    });

    $("#joinButton").click(function () {
        $("#join_Popup").css({'display':'block'});
        $("#mask").css({'display':'blcok'});
    })
    $("#close_join").click(function () {
        $("#join_Popup").css({'display': 'none'});
        $("#mask").css({'display': 'none'});
    })
    
    function slide() {
        imgSlide.eq(next).animate({left:-800},0);
        imgSlide.eq(next -1).animate({left:800},1000);
        imgSlide.eq(next).animate({left:0},1000);

        next++;
        if(next > max)
            next = 0;
    };
    function minusSlide(){
        next--;
        if(next < 0 )
            next = max;
        imgSlide.eq(next-1).animate({left:800},0);
        imgSlide.eq(next).animate({left:-800},1000);
        imgSlide.eq(next -1).animate({left:0},1000);
    }

    $("#left_arrow").hover(function () {
        $(this).attr('src','img/left_hover.png');
    },function () {
        $(this).attr('src','img/left.png');
    });
    $("#left_arrow").click(function () {
        if(  $("#stop_start").attr('src') == "img/stop.png") {
            clearInterval(slideCurrent);
            slide();
            slideCurrent = setInterval(slide, intervalTime);
        }else{
            slide();
        }
    });

    $("#right_arrow").hover(function () {
        $(this).attr('src','img/right_hover.png');
    },function () {
        $(this).attr('src','img/right.png');
    });
    $("#right_arrow").click(function () {
        if( $("#stop_start").attr('src') == "img/stop.png") {
            clearInterval(slideCurrent);
            minusSlide();
            slideCurrent = setInterval(slide, intervalTime);
        }else{
            minusSlide();
        }
    });

    $("#stop_start").click(function () {
        var st = $(this);
        if( st.attr('src') == "img/stop.png") {
            st.attr('src', 'img/start.png');
            clearInterval(slideCurrent);
        }
        else {
            slideCurrent = setInterval(slide,intervalTime);
            st.attr('src', 'img/stop.png');
        }
    })
});