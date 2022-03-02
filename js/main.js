/*hambergermenu*/

$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });

/*video-btn*/

const video = document.querySelector('#video');
const video_btn = document.querySelector('#video-btn');
let is_playing = false;

video_btn.addEventListener('click', () => {
  if (!is_playing) {
    video.play();
    is_playing = true;
  } else {
    video.pause();
    is_playing = false;
  }
});
/*video-btnの表示*/
$(function(){
    $(".video-btn").click(function () {//ボタンがクリックされたら
        $(".text1").toggleClass('active1');// activeクラスを付与し
        $(".text2").toggleClass('active2');// activeクラスを付与し
      });
});