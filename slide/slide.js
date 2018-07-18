var next_img = 1;
$( document ).ready(function() {
  //이미지 추가
  for(var i = 1 ; i<=10; i++){
      $("#imgSlide").append("<img src=img/"+i+".jpg><img");
  }
  var main_slide_img = $("#imgSlide>img");
  //슬라이드 반복 변수 - main_slide 정의
  main_slide = setInterval(function functionName() {
      slide_right(main_slide_img);
  },2500);
  //슬라이드 설정 실행
  slide_setting(main_slide_img);
  });
//슬라이드 설정 함수
 function slide_setting(slideImg){
   slideImg.eq(0).css({right:"0px"});
   slideImg.eq(0).siblings().css({left:"800px"});
 }
 //오른쪽으로 슬라이드
 function slide_right(slideImg){
   slideImg.eq(next_img-1).animate({left:"800px"},500);
   slideImg.eq(next_img).css({left:"-800px"});
   slideImg.eq(next_img).animate({left:"0px"},500);
   next_img++;
   console.log(next_img);
   if(next_img >= 10 ){
     console.log(slideImg.eq(slideImg.length));
     slideImg.eq(slideImg.length-1).animate({left:"800px"},500);
     next_img = 1;
   }
 }
