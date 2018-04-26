$(document).ready(function () {
    var next = 1;
    var adNext = 1;

    var imgSlide = $(".imgSlide>img");
    var adSlide = $(".ad>img");

    var max = imgSlide.length-1;
    var adMax = adSlide.length-1;
    var intervalTime = 3000;
    imgSlide.eq(max).animate({left:800},0);
    imgSlide.eq(1).animate({left:800},0);
    adSlide.eq(adMax).animate({left:265},0);
    adSlide.eq(1).animate({left:265},0);

    var slideCurrent = setInterval(function () { slide("mainSlide");},intervalTime);
    var ad_slideCurrent = setInterval(function () {slide("adSlide")},intervalTime);

    $("#stop_start").click(function () {
        stopAndStart($(this));
    });
    $(".ad_control>img").click(function () {
        stopAndStart($(this));
    });

    function stopAndStart(st) {
        if( st.attr('src') == "img/stop.png") {
            st.attr('src', 'img/start.png');
            if(st == $(".ad_control>img") )
                clearInterval(ad_slideCurrent);
            else
                clearInterval(slideCurrent);
        }

        else {
            if(st == $(".ad_control>img") )
                ad_slideCurrent = setInterval(function () { slide("adSlide");},intervalTime);
            else
                slideCurrent = setInterval(function () { slide("mainSlide");},intervalTime);

            st.attr('src', 'img/stop.png');
        }
    }

    function slide(contentName, imgGroup) {
        if(contentName == "mainSlide"){
            //에러
            imgSlide.eq(next).animate({left: -800}, 0);
            imgSlide.eq(next - 1).animate({left: 800}, 1000);
            imgSlide.eq(next).animate({left: 0}, 1000);

            next++;
            if ( next > max)
                next = 0;
        }
        else if(contentName == "adSlide"){
            adSlide.eq(adNext).animate({right: 265}, 0);
            adSlide.eq(adNext - 1).animate({right: -265}, 500);
            adSlide.eq(adNext).animate({right: 0},500);

            adNext++;
            if (adNext > adMax)
                adNext = 0;
        }
    };

    $(".infoBox>button:nth-child(1)").click(function () {
        $(this).css({'color':'#666bff'});
        infoBoxChange('n');
    });
    $(".infoBox>button:nth-child(2)").click(function () {
        infoBoxChange('c');
    });


    function infoBoxChange(result){
        if(result == 'n'){
            $(".infoBox>button:nth-child(1)").css({'color':'#666bff'});
            $(".infoBox>button:nth-child(2)").css({'color':'#000000'});
            $(".notice").css({'display':'block'});
            $(".cmuDoc").css({'display':'none'});
        }
        else if(result=='c'){
            $(".infoBox>button:nth-child(2)").css({'color':'#666bff'});
            $(".infoBox>button:nth-child(1)").css({'color':'#000000'});
            $(".cmuDoc").css({'display':'block'});
            $(".notice").css({'display':'none'});
        }
    }

    $("#loginButton").click(function () {
        $("#login_Popup").css({'display':'block'});
        $("#mask").css({'display':'blcok'});
        $("#join_Popup").css({'display': 'none'});
    });
    $("#close_login").click(function () {
        $("#login_Popup").css({'display': 'none'});
        $("#mask").css({'display': 'none'});
    });

    $("#joinButton").click(function () {
        $("#join_Popup").css({'display':'block'});
        $("#mask").css({'display':'blcok'});
        $("#login_Popup").css({'display': 'none'});
    });
    $("#close_join").click(function () {
        $("#join_Popup").css({'display': 'none'});
        $("#mask").css({'display': 'none'});
    });

    function minusSlide(){
        next--;
        if(next < 0 )
            next = max;
        imgSlide.eq(next-1).animate({left:800},0);
        imgSlide.eq(next).animate({left:-800},1000);
        imgSlide.eq(next -1).animate({left:0},1000);
    };

    $("#left_arrow").hover(function () {
        $(this).attr('src','img/left_hover.png');
    },function () {
        $(this).attr('src','img/left.png');
    });
    $("#left_arrow").click(function () {
        if(  $("#stop_start").attr('src') == "img/stop.png") {
            clearInterval(slideCurrent);
            slide("mainSlide");
            slideCurrent = setInterval(function () { slide("mainSlide");}, intervalTime);
        }else{
             slide("mainSlide");
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
            slideCurrent = setInterval(function () { slide("mainSlide");}, intervalTime);
        }else{
            minusSlide();
        }
    });
});