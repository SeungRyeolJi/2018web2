var num = 0;
$(document).ready(function(){
    setInterval(slide,4000);
})

function slide(){
    var img = $('#imgSlide .recruitBox');
    img.eq(num).fadeOut(800);
    num++;
    if(num>1)
        num = 0;
    img.eq(num).fadeIn(800);
}
