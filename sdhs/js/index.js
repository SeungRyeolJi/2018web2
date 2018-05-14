$(document).ready(function () {
    //팝업창
    $("#loginButton").click(function () {
        $("#login_Popup").css({'display':'block'});
        $("#join_Popup").css({'display': 'none'});
        $("#mask").css({"display":"block"});
    });
    $("#close_login").click(function () {
        $("#login_Popup").css({'display': 'none'});
        $("#mask").css({"display":"none"});
    });
    function join_Popup(){
        $("#join_Popup").css({'display':'block'});
        $("#login_Popup").css({'display': 'none'});
        $("#mask").css({"display":"block"});
    }
    $("#login_Popup_join").click(function () {
        join_Popup();
    })
    $("#joinButton").click(function () {
        join_Popup();
    });
    $("#close_join").click(function () {
        $("#join_Popup").css({'display': 'none'});
        $("#mask").css({"display":"none"});
    });

    $(".mealBox>img").click(function () {
        $("#meal_Popup").css({"display":"block"});
        $("#mask").css({"display":"block"});
    })

    $("#meal_close").click(function () {
        $("#meal_Popup").css({"display":"none"});
        $("#mask").css({"display":"none"});
    })
    //메인 슬라이드
    var next = 1;
    var imgSlide = $(".imgSlide>img");
    var adSlide = $(".ad>img");
    var max = imgSlide.length-1;
    var adMax = adSlide.length-1;
    var intervalTime = 3000;
    slideSetting(imgSlide)
    function slideSetting(img) {
        for (var i=1 ;i<max+1;i++) {
            img.eq(i).animate({left: img.eq(i).width()}, 0);
        }
    }
    var slideCurrent = setInterval(function () { slide("mainSlide");},intervalTime);
    //메인, AD(서브) 오른쪽으로 슬라이드
    function slide(contentName) {
        if(contentName == "mainSlide"){
            main_circle_index(next)
            //에러
            imgSlide.eq(next).animate({left: -1000}, 0);
            imgSlide.eq(next - 1).animate({left: 1000}, 700);
            imgSlide.eq(next).animate({left: 0}, 700);

            next++;
            if ( next > max)
                next = 0;
        }
        else if(contentName == "adSlide"){
            adSlide.eq(adNext-1).css({'display': 'none'});
            $('.ad_circle').eq(adNext-1).css({ 'background':'#50506f'});
            adSlide.eq(adNext).css({'display': 'block'});
            $('.ad_circle').eq(adNext).css({ 'background':'#ffffff'});

            adNext++;
            if ( adNext > adMax)
                adNext = 0;
        }
    };
    //메인 현재 슬라이드와 같은 인덱스로 색 바뀜
    var msd= $(".main_slide_circle");
    msd.eq(0).css({'background' : '#50506f'});
    function main_circle_index(number){
        msd.eq(number).css({'background' : '#50506f'});
        if(msd.length<max)
            msd.eq(0).css({'background' : '#fff'});
        else
            msd.eq(number-1).css({'background' : '#fff'});
    }
    //메인 슬라이드 컨트롤러
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
    //메인, AD(서브) 정지와 시작
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
    //메인 슬라이드 왼쪽으로
    function minusSlide(){
        next--;
        if(next < 0 )
            next = max;
        imgSlide.eq(next-1).animate({left:imgSlide.eq(0).width()},0);
        imgSlide.eq(next).animate({left:-imgSlide.eq(0).width()},1000);
        imgSlide.eq(next -1).animate({left:0},1000);
    };
    //AD(서브) 슬라이드
    var adNext = 1;
    adSlide.eq(0).css({'display':'block'});
    $('.circle').eq(0).css({ 'background':'#ffffff'});
    adSlide.eq(0).css({'z-index':'100'});
    var ad_slideCurrent = setInterval(function () {slide("adSlide")},intervalTime);
    $(".circle").click(function () {
        currentImgChange( $(".circle").index(this) , $(".circle"), $(".ad>img"));
    })
    $("#stop_start").click(function () {
        stopAndStart($(this),"mainSlide");
    });
    $(".ad_control>img").click(function () {
        stopAndStart($(this),"adSlide");
    });
//클릭한 서브 슬라이드로 이동
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

    //공지사항, 가정통신문
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
});
