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






  
}(window))