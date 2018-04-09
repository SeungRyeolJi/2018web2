<?php
include_once "./inc/db.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            var pw_origin = $("#pwd");
            var pw_check = $("#pwd_chk");

            $("#info_chk").click(function () {
                if(pw_check.val() == pw_origin.val())
                    alert("확인완료");
                else
                    alert("값이 다릅니다.");
            });

            $("#btn_up").click(function () {
                $("#sign form").attr("action","inc/php/update.php");
            });
            $("#btn_del").click(function () {
                $("#sign form").attr("action","inc/php/delete.php");
            });
        });
    </script>
    <link rel="stylesheet" href="inc/css/join.css">
</head>
<body>
<video autoplay muted loop id="myVideo" src="inc/video/seoul_night_scene.mp4">
</video>
<div id="sign">
    <img src="inc/img/logo.png" alt="">
    <form action="">
        <h2>회원가입</h2>
        <dl class="item_id">
            <!--          dl = descriptio list(서술)-->
            <dt><label for="id">아이디</label></dt>
            <dd><input type="text" id="id" name="id"></dd>
        </dl>
        <dl class="item_name">
            <dt><label for="name">이름</label></dt>
            <dd><input type="text" id="name" name="name"></dd>
        </dl>
        <dl class="item_pw">
            <dt><label for="pwd">비밀번호</label></dt>
            <dd> <input type="password" id="pwd" name="pwd"></dd>
            <dt><label for="pwd_chk">비밀번호 확인</label></dt>
            <dd><input type="text" id="pwd_chk" name="pwd_chk"></dd>
        </dl>
        <dl class="item_address">
            <dt><label for="address">주소</label></dt>
            <dd><input type="text" id="address" name="address"></dd>
        </dl>
        <button type="submit" id="info_chk">정보확인</button>
        <button type="submit" id="btn_up">수정</button>
        <button type="submit" id="btn_del">삭제</button>
    </form>
</div>
</body>
</html>