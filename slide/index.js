$(document).ready(function () {
    //메인 슬라이드
    var next = 1;
    var imgSlide = $(".imgSlide>img");
    var max = imgSlide.length-1;
    var intervalTime = 3000;
    slideSetting(imgSlide);
    function slideSetting(img) {
        for (var i=1 ;i<max+1;i++) {
            img.eq(i).animate({left: img.eq(i).width()}, 0);
        }
    }
    var slideCurrent = setInterval(function () { slide();},intervalTime);
    //메인, AD(서브) 오른쪽으로 슬라이드
    function slide() {
            main_circle_index(next);
            imgSlide.eq(next).stop().animate({left: -1000}, 0);
            imgSlide.eq(next - 1).stop().animate({left: 1000}, 700);
            imgSlide.eq(next).animate({left: 0}, 700);
            next++;
            if ( next > max)
                next = 0;
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
    $("#left_arrow").click(function () {
        if( $("#stop_start").attr('src') == "img/stop.png") {
            clearInterval(slideCurrent);
            slide();
            slideCurrent = setInterval(function () { slide();}, intervalTime);
        }else{
            slide();
        }
    });
    $("#right_arrow").click(function () {
        if( $("#stop_start").attr('src') == "img/stop.png") {
            clearInterval(slideCurrent);
            minusSlide();
            slideCurrent = setInterval(function () { slide();}, intervalTime);
        }else{
            minusSlide();
        }
    });
    $("#stop_start").click(function(){stopAndStart()});
    //메인, AD(서브) 정지와 시작
    function stopAndStart() {
        if( $(".stop_start").attr('src') == "img/stop.png") {
            $(".stop_start").attr('src', 'img/start.png');
            clearInterval(slideCurrent);
        }
        else {
            $(".stop_start").attr('src', 'img/stop.png');
            slideCurrent = setInterval(function () { slide();},intervalTime);
        }
    }
    //메인 슬라이드 왼쪽으로
    function minusSlide(){
        next--;
        if(next < 0 )
            next = max;
        console.log(next);
        imgSlide.eq(next-1).animate({left:imgSlide.eq(0).width()},0);
        imgSlide.eq(next).animate({left:-imgSlide.eq(0).width()},700);
        imgSlide.eq(next -1).animate({left:0},700);
        //컨트롤러에 현재 인덱스를 표시하는 원의 색깔을 반대로 바꿈
        msd.eq(next-1).css({'background' : '#50506f'});
        if(next == max)
            msd.eq(0).css({'background' : '#fff'});
        msd.eq(next).css({'background' : '#fff'});

    };

});
