$(document).ready(function () {
    var next = 1;
    var adNext = 1;


    var imgSlide = $(".imgSlide>img");
    var adSlide = $(".ad>img");
    adSlide.eq(0).css({'display':'block'})
    $('.circle').eq(0).css({ 'background':'#ffffff'});

    var max = imgSlide.length-1;
    var adMax = adSlide.length-1;
    var intervalTime = 3000;
    imgSlide.eq(max).animate({left:800},0);
    imgSlide.eq(1).animate({left:800},0);
    adSlide.eq(0).css({'z-index':'100'});

    var slideCurrent = setInterval(function () { slide("mainSlide");},intervalTime);
    var ad_slideCurrent = setInterval(function () {slide("adSlide")},intervalTime);

    $(".circle").click(function () {
        currentImgChange( $(".circle").index(this) , $(".circle"), $(".ad>img"));
    })

    $(".mealBox>img").click(function () {
        $("#meal_Popup").css({"display":"block"});
    })

    $("#meal_close_login").click(function () {
        $("#meal_Popup").css({"display":"none"});
    })

    $("#stop_start").click(function () {
        stopAndStart($(this),"mainSlide");
    });
    $(".ad_control>img").click(function () {
        stopAndStart($(this),"adSlide");
    });

    function currentImgChange(currentIndex , tagName , changeImg) {
        tagName.eq(currentIndex).css({"background":"#ffffff"});
        tagName.not( tagName.eq(currentIndex)).css({"background":"#50506f"})
        adNext = currentIndex;
        clearInterval(ad_slideCurrent);
        changeImg.eq(currentIndex).css({"display":"block"});
        changeImg.not( changeImg.eq(currentIndex)).css({"display":"none"});
        slide("adSlide");
        ad_slideCurrent = setInterval(function () {slide("adSlide")},intervalTime);
    }

    function stopAndStart(st,kind) {
        if( st.attr('src') == "img/stop.png") {
            st.attr('src', 'img/start.png');
            if(kind == "adSlide" )
                clearInterval(ad_slideCurrent);
            else if(kind == "mainSlide")
                clearInterval(slideCurrent);
        }

        else {
            if(kind =="adSlide" )
                ad_slideCurrent = setInterval(function () { slide(kind);},intervalTime);
            else if(kind == "mainSlide")
                slideCurrent = setInterval(function () { slide(kind);},intervalTime);
            st.attr('src', 'img/stop.png');
        }
    }

    function slide(contentName) {
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
            adSlide.eq(adNext-1).css({'display': 'none'});
            $('.circle').eq(adNext-1).css({ 'background':'#50506f'});
            adSlide.eq(adNext).css({'display': 'block'});
            $('.circle').eq(adNext).css({ 'background':'#ffffff'});

            adNext++;
            if ( adNext > adMax)
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
        $("#join_Popup").css({'display': 'none'});
    });
    $("#close_login").click(function () {
        $("#login_Popup").css({'display': 'none'});
    });

    $("#joinButton").click(function () {
        $("#join_Popup").css({'display':'block'});
        $("#login_Popup").css({'display': 'none'});
    });
    $("#close_join").click(function () {
        $("#join_Popup").css({'display': 'none'});
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
