(function () {
  var my_audio_up = document.getElementById("audio_up");  //滚动条上层的div
  var my_time = document.getElementById("time");   //显示的时间
  var my_music = document.getElementById("music");   //音乐
  var my_voice = document.getElementById("voice");    //音量图像
  var my_voice_control = document.getElementById("voice_control");   //控制音量div
  var my_voice_down = document.getElementById("voice_down");   //下层音量div
  var my_voice_up = document.getElementById("voice_up");   //上层音量div
  my_music.ontimeupdate = function(){
    var now_time = parseInt(my_time.currentTime);
    var minute = parseInt(my_music.currentTime / 60);
    var second = parseInt(my_music.currentTime % 60);
    if(second < 10){
      my_time.innerHTML = "0" + minute + ":" + "0" + second;
    }else {
      my_time.innerHTML = "0" + minute + ":" + second;
    }
    my_audio_up.style.width = my_music.currentTime / my_music.duration * 100 + "%";
  }
  var my_music_start = document.getElementsByClassName("music_start")[0];
  var my_zanting = document.getElementById("zanting");
  my_music_start.onclick = function() {
    my_music.pause();
    my_zanting.style.display = "block";
  }
  my_zanting.onclick = function(){
    my_music.play();
    my_zanting.style.display = "none";
  }
  //音量出现与消失
  my_voice.onmouseover = function() {
    if(my_voice_control.classList.contains("noshow")){
      my_voice_control.className = "show";
      my_voice.style.visibility = "hidden";
    }else {
      my_voice_control.className = "noshow";
      my_voice.style.visibility = "visible";
    }
  }
  my_voice_control.onmouseout = function(){
      my_voice_control.className = "noshow";
      my_voice.style.visibility = "visible";
  }
    my_voice_up.style.width = my_music.volume * 80 + "%"
  //音量拖动事件
  var my_yuandian = document.getElementById("yuandian");
  var drag_start,small_div,big_div,drag_end,length;
  my_yuandian.ondragstart = function(event){
      drag_start = event.clientX;    //鼠标的位置
      big_div = my_voice_down.clientWidth;     //下层div的宽
      small_div = my_voice_up.clientWidth;     //上层div的宽
  }
  my_yuandian.ondragend = function(event){
      drag_end = event.clientX;     //鼠标移动后的位置
      length = (small_div - drag_start + drag_end) / big_div;
      console.log(length);
      if(length < 0) {
        my_music.volume = 0;
      }else if (length > 1) {
        my_music.volume = 1;
      }else {
        my_music.volume = length;
      }
      my_voice_up.style.width = my_music.volume * 100 + "%";
  }
     //听相似歌曲
  var my_sound_like = document.getElementById("sound_like");
  var my_sound = document.getElementById("sound");
  my_sound_like.onmouseover = function(){
      my_sound.src = "image/sound1.png";
  }
  my_sound_like.onmouseout = function(){
      my_sound.src = "image/sound.png";
  }
      //来下载吧
  var my_xiazai = document.getElementById("xiazai");
  var my_xiazaiba = document.getElementById("xiazaiba");
  my_xiazai.onmouseover = function(){
      my_xiazaiba.src = "image/xiazai1.png";
  }
  my_xiazai.onmouseout = function(){
      my_xiazaiba.src = "image/xiazai.png";
  }
      //左侧标志
  var my_chuxian = document.getElementById("chuxian");
  my_chuxian.onmouseover = function () {
    my_chuxian.src = "image/chuxian1.png";
  }
  my_chuxian.onmouseout = function () {
    my_chuxian.src = "image/chuxian.png";
  }
  //鼠标放在圆圈上变换图片和文字
  var my_tupian = document.getElementById("tupian1");
  var yuan1 = document.getElementById("yuan1");
  var yuan2 = document.getElementById("yuan2");
  var yuan3 = document.getElementById("yuan3");
  var yuan4 = document.getElementById("yuan4");
  var yuan5 = document.getElementById("yuan5");
  var yuan6 = document.getElementById("yuan6");
  var song_name = document.getElementById("song_name");
  var song_shuoming = document.getElementById("song_shuoming");
  window.setInterval(qiehuan, 5000);
  function qiehuan() {
    if(my_tupian.src.match("image/sing.png")){
      my_tupian.src = "image/girl.png";
      song_name.innerHTML = "さよならの夏 ～コクリコ坂から～ <br>(主題歌 別バージョン) 系MHz";
      song_shuoming.innerHTML = "为你推荐与 手嶌葵 - さよならの夏 ～コクリコ坂から～ <br>(主題歌 別バージョン) 相似的歌曲";
      yuan2.style.backgroundColor = "#9DD6C5";
      yuan1.style.backgroundColor = "#D4E1DC";
      yuan3.style.backgroundColor = "#D4E1DC";
      yuan4.style.backgroundColor = "#D4E1DC";
      yuan5.style.backgroundColor = "#D4E1DC";
      yuan6.style.backgroundColor = "#D4E1DC";
    }else if (my_tupian.src.match("image/girl.png")) {
      my_tupian.src = "image/sexy.png";
      song_name.innerHTML = "She 系MHz";
      song_shuoming.innerHTML = "为你推荐与 Groove Coverage - She 相似的歌曲";
      yuan3.style.backgroundColor = "#9DD6C5";
      yuan1.style.backgroundColor = "#D4E1DC";
      yuan2.style.backgroundColor = "#D4E1DC";
      yuan4.style.backgroundColor = "#D4E1DC";
      yuan5.style.backgroundColor = "#D4E1DC";
      yuan6.style.backgroundColor = "#D4E1DC";
    }else if (my_tupian.src.match("image/sexy.png")) {
      my_tupian.src = "image/nanshan.png";
      song_name.innerHTML = "南山南 系MHz";
      song_shuoming.innerHTML = "为你推荐与 马頔 - 南山南 相似的歌曲";
      yuan4.style.backgroundColor = "#9DD6C5";
      yuan1.style.backgroundColor = "#D4E1DC";
      yuan3.style.backgroundColor = "#D4E1DC";
      yuan2.style.backgroundColor = "#D4E1DC";
      yuan5.style.backgroundColor = "#D4E1DC";
      yuan6.style.backgroundColor = "#D4E1DC";
    }else if (my_tupian.src.match("image/nanshan.png")) {
      my_tupian.src = "image/piano.png";
      song_name.innerHTML = "映画『天空の城ラピュタ』：<br>innocent 系MHz";
      song_shuoming.innerHTML = "为你推荐与 久石譲 - 映画『天空の城ラピュタ』：<br>innocent 相似的歌曲";
      yuan5.style.backgroundColor = "#9DD6C5";
      yuan1.style.backgroundColor = "#D4E1DC";
      yuan3.style.backgroundColor = "#D4E1DC";
      yuan4.style.backgroundColor = "#D4E1DC";
      yuan2.style.backgroundColor = "#D4E1DC";
      yuan6.style.backgroundColor = "#D4E1DC";
    }else if (my_tupian.src.match("image/piano.png")) {
      my_tupian.src = "image/cute.png";
      song_name.innerHTML = "SK-II 最初的梦MHz";
      song_shuoming.innerHTML = "热门歌曲：夜空中最亮的星 / 最初的梦想（Cover 范玮<br>琪） / 一万次悲伤50首歌曲";
      yuan6.style.backgroundColor = "#9DD6C5";
      yuan1.style.backgroundColor = "#D4E1DC";
      yuan3.style.backgroundColor = "#D4E1DC";
      yuan4.style.backgroundColor = "#D4E1DC";
      yuan5.style.backgroundColor = "#D4E1DC";
      yuan2.style.backgroundColor = "#D4E1DC";
    }else {
      my_tupian.src = "image/sing.png";
      song_name.innerHTML = "Love the Way You Lie 系MHz";
      song_shuoming.innerHTML = "为你推荐与 Skylar Grey - Love the Way You Lie 相似<br>的歌曲";
      yuan1.style.backgroundColor = "#9DD6C5";
      yuan2.style.backgroundColor = "#D4E1DC";
      yuan3.style.backgroundColor = "#D4E1DC";
      yuan4.style.backgroundColor = "#D4E1DC";
      yuan5.style.backgroundColor = "#D4E1DC";
      yuan6.style.backgroundColor = "#D4E1DC";
    }
  }
  yuan1.onmouseover = function(){
      my_tupian.src = "image/sing.png";
      song_name.innerHTML = "Love the Way You Lie 系MHz";
      song_shuoming.innerHTML = "为你推荐与 Skylar Grey - Love the Way You Lie 相似<br>的歌曲";
      yuan1.style.backgroundColor = "#9DD6C5";
      yuan2.style.backgroundColor = "#D4E1DC";
      yuan3.style.backgroundColor = "#D4E1DC";
      yuan4.style.backgroundColor = "#D4E1DC";
      yuan5.style.backgroundColor = "#D4E1DC";
      yuan6.style.backgroundColor = "#D4E1DC";
  }
  yuan2.onmouseover = function(){
      my_tupian.src = "image/girl.png";
      song_name.innerHTML = "さよならの夏 ～コクリコ坂から～ <br>(主題歌 別バージョン) 系MHz";
      song_shuoming.innerHTML = "为你推荐与 手嶌葵 - さよならの夏 ～コクリコ坂から～ <br>(主題歌 別バージョン) 相似的歌曲";
      yuan2.style.backgroundColor = "#9DD6C5";
      yuan1.style.backgroundColor = "#D4E1DC";
      yuan3.style.backgroundColor = "#D4E1DC";
      yuan4.style.backgroundColor = "#D4E1DC";
      yuan5.style.backgroundColor = "#D4E1DC";
      yuan6.style.backgroundColor = "#D4E1DC";
  }
  yuan3.onmouseover = function(){
      my_tupian.src = "image/sexy.png";
      song_name.innerHTML = "She 系MHz";
      song_shuoming.innerHTML = "为你推荐与 Groove Coverage - She 相似的歌曲";
      yuan3.style.backgroundColor = "#9DD6C5";
      yuan1.style.backgroundColor = "#D4E1DC";
      yuan2.style.backgroundColor = "#D4E1DC";
      yuan4.style.backgroundColor = "#D4E1DC";
      yuan5.style.backgroundColor = "#D4E1DC";
      yuan6.style.backgroundColor = "#D4E1DC";
  }
  yuan4.onmouseover = function(){
      my_tupian.src = "image/nanshan.png";
      song_name.innerHTML = "南山南 系MHz";
      song_shuoming.innerHTML = "为你推荐与 马頔 - 南山南 相似的歌曲";
      yuan4.style.backgroundColor = "#9DD6C5";
      yuan1.style.backgroundColor = "#D4E1DC";
      yuan3.style.backgroundColor = "#D4E1DC";
      yuan2.style.backgroundColor = "#D4E1DC";
      yuan5.style.backgroundColor = "#D4E1DC";
      yuan6.style.backgroundColor = "#D4E1DC";
  }
  yuan5.onmouseover = function(){
      my_tupian.src = "image/piano.png";
      song_name.innerHTML = "映画『天空の城ラピュタ』：<br>innocent 系MHz";
      song_shuoming.innerHTML = "为你推荐与 久石譲 - 映画『天空の城ラピュタ』：<br>innocent 相似的歌曲";
      yuan5.style.backgroundColor = "#9DD6C5";
      yuan1.style.backgroundColor = "#D4E1DC";
      yuan3.style.backgroundColor = "#D4E1DC";
      yuan4.style.backgroundColor = "#D4E1DC";
      yuan2.style.backgroundColor = "#D4E1DC";
      yuan6.style.backgroundColor = "#D4E1DC";
  }
  yuan6.onmouseover = function(){
      my_tupian.src = "image/cute.png";
      song_name.innerHTML = "SK-II 最初的梦MHz";
      song_shuoming.innerHTML = "热门歌曲：夜空中最亮的星 / 最初的梦想（Cover 范玮<br>琪） / 一万次悲伤50首歌曲";
      yuan6.style.backgroundColor = "#9DD6C5";
      yuan1.style.backgroundColor = "#D4E1DC";
      yuan3.style.backgroundColor = "#D4E1DC";
      yuan4.style.backgroundColor = "#D4E1DC";
      yuan5.style.backgroundColor = "#D4E1DC";
      yuan2.style.backgroundColor = "#D4E1DC";
  }




  
}(window))