//Functions to control video
export default function videoCtrl(){
  var videosec = document.querySelector('#video-wrapper');
  var overvideo = videosec.querySelector('#over-video');
  var videobtn = overvideo.querySelector('#video-btn');
  var video = document.querySelector('#video');
  var videocontrol = videosec.querySelector("#video-controls");
  var videotime = videocontrol.querySelector('#video-time');
  var playbtn = videocontrol.querySelector('#play-btn');
  var seekbar = videocontrol.querySelector('#seek-bar');
  var progressbar = seekbar.querySelector('span');
  var volumebar = videocontrol.querySelector('#volume-bar')
  var volumebg = volumebar.querySelector('#volume-bg');
  var volumefg = volumebar.querySelector('#volume-fg');
  var volumebtn = videocontrol.querySelector('#volume-btn');
  var fullbtn = videocontrol.querySelector('#full-btn > .video-ctrl-bt');
  var videoduration;
  var prevvol = 0;
  var videoPlaying = false;
  video.volume = 0.8;

  var videoCtrlTl = new TimelineLite({
  paused: true
});

  // function to play/pause video
  function togglePlayVideo() {
    let icon = playbtn.querySelector('.video-ctrl-bt');
    if(video.paused) {
      videoduration = convertSecondsToMinutes(video.duration);
      overvideo.style.backgroundColor = 'transparent';
      video.play();
      playToPauseBtn(icon);
      videobtn.style.display = 'none';
      addVideoListeners();
      outVideoControl();
      videoPlaying = true;
    }
    else {
      video.pause();
      pauseToPlayBtn(icon);
      videobtn.style.display = 'block';
      removeVideoListeners();
      videoCtrlTl.reverse();
      videoPlaying = false;
    }
  }

  // function to present video on full screen
  function fullScreenVideo() {
    let isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    else {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  }

  // function to slide seek bar while video is playing
  function slideProgress() {
    let perc = (video.currentTime/video.duration)*100;
    progressbar.style.width = perc.toString()+'%';
  }
  //Add video event listeners
  function addVideoListeners() {
    let isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    video.addEventListener('timeupdate', updateVideoCurrentTime, false);
    video.addEventListener('timeupdate', slideProgress, false);
    video.addEventListener('ended', reloadVideo, false);
    videocontrol.addEventListener('mouseout', outVideoControl, false);
    videocontrol.addEventListener('mouseover', overVideoControl, false);
    if (!isFullScreen) {
      overvideo.addEventListener('mouseout', outVideoControl, false);
      overvideo.addEventListener('mouseover', overVideoControl, false);
    }
  }

  // move video and time regarding position clicked on seek bar
  function toggleSeekBar(evt) {
    let pos = evt.pageX;
    let voloffsets = seekbar.getBoundingClientRect();
    let volwidth = voloffsets.right-voloffsets.left;
    let perc = (pos-voloffsets.left)/volwidth;
    let time = video.duration * perc;
    video.currentTime = time;
    progressbar.style.width = (perc*100).toString()+'%';
  }
  // remove event listeners of video and controls
function removeVideoListeners() {
  video.removeEventListener('timeupdate', updateVideoCurrentTime, false);
  video.removeEventListener('ended', reloadVideo, false);
  overvideo.removeEventListener('mouseout', outVideoControl, false);
  overvideo.removeEventListener('mouseover', overVideoControl, false);
  videocontrol.removeEventListener('mouseout', outVideoControl, false);
  videocontrol.removeEventListener('mouseover', overVideoControl, false);
}

// update video running time on video control
function updateVideoCurrentTime() {
  let curtime = convertSecondsToMinutes(video.currentTime);
  videotime.innerHTML = curtime+' / '+videoduration;
}

//convert time in seconds.miliseconds to minutes:seconds
  function convertSecondsToMinutes(rawtime) {
    let inttime = Math.floor(rawtime);
    let minutes = Math.floor(inttime/60);
    let seconds = inttime-(minutes*60);
    let time = minutes.toString()+':'+('0'+seconds.toString()).slice(-2);
    return time;
  }

// function to check if video control must be hidden when video is playing and cursor is not over the video
  // plays timeline to hide video control
  function outVideoControl() {
    videoCtrlTl.play();
  }

  // function to check if video control must be shown when video is playing and cursor is over the video
  // plays timeline in reverse to show video control
  function overVideoControl() {
    videoCtrlTl.reverse();
  }

  // timelines to hide video control when video is playing and mouse is not over the video
  function hideVideoControl() {
    videoCtrlTl.to(videocontrol, 1, {opacity: 0});
  }

  // change Play button from play to pause icon
  function playToPauseBtn(el) {
    el.classList.remove('ion-play');
    el.classList.add('ion-pause');
  }

  // change Play button from pause to play icon
  function pauseToPlayBtn(el) {
    el.classList.remove('ion-pause');
    el.classList.add('ion-play');
  }

// reload video to its initial state
function reloadVideo() {
  let icon = playbtn.querySelector('.video-ctrl-bt');
  video.load();
  pauseToPlayBtn(icon);
  videobtn.style.display = 'block';
  videotime.innerHTML = '0:00 / '+videoduration;
  removeVideoListeners();
  videoCtrlTl.reverse();
  videoPlaying = false;
  progressbar.style.width = null;
}

  // change volume regarding position clicked on volume bar
  // also change position of colorful area of volume bar
  function volumeChange(evt) {
    let pos = evt.pageX;
    let voloffsets = volumefg.getBoundingClientRect();
    let volwidth = voloffsets.right-voloffsets.left;
    let perc = (pos-voloffsets.left)/volwidth;
    let value = (volwidth*perc)/16;
    volumefg.style.clip = 'rect(0, '+value+'rem, '+(volwidth/16)+'rem, 0)';
    video.volume = perc.toFixed(1);
    volumeChangeBtn();
  }

  // sets 0% and 100% volume if clicked before or after volume bar area
  function volumeOut(evt) {
    let pos = evt.pageX;
    let voloffsets = volumefg.getBoundingClientRect();
    if (pos < voloffsets.left && pos > voloffsets.left-8) {
      video.volume = 0;
    }
    else if (pos > voloffsets.right && pos < voloffsets.right+8) {
      video.volume = 1;
    }
    volumeChangeBar();
    volumeChangeBtn();
  }

  // change volume bar position regarding video volume level
  function volumeChangeBar() {
    let voloffsets = volumefg.getBoundingClientRect();
    let volwidth = voloffsets.right-voloffsets.left;
    volumefg.style.clip = 'rect(0, '+((video.volume*volwidth)/16)+'rem, '+(volwidth/16)+'rem, 0)';
  }

  // change volume button icon regarding video volume level
  function volumeChangeBtn() {
    let icon = volumebtn.querySelector('.video-ctrl-bt');
    let curclass;
    for (let i = 0; i < icon.classList.length; i++) {
      if (icon.classList[i].match('ion-android-volume')) {
        curclass = icon.classList[i];
      }
    }
    icon.classList.remove(curclass);
    if (video.volume === 0) {
      icon.classList.add('ion-android-volume-off');
    }
    else if (video.volume > 0.5) {
      icon.classList.add('ion-android-volume-up');
    }
    else {
      icon.classList.add('ion-android-volume-down');
    }
  }

  // mute and unmute video volume
  function toggleMuteVolume() {
    if (video.volume > 0) {
      prevvol = video.volume;
      video.volume = 0;
    }
    else {
      video.volume = prevvol;
      prevvol = 0;
    }
    volumeChangeBar();
    volumeChangeBtn();
  }

  function checkFullscreen() {
    let isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    if(isFullScreen) {
      overvideo.style.zIndex = 2147483647;
      videocontrol.style.zIndex = 2147483648;
      fullbtn.classList.remove('ion-arrow-expand');
      fullbtn.classList.add('ion-arrow-shrink');

      overvideo.removeEventListener('mouseout', outVideoControl, false);
      overvideo.removeEventListener('mouseover', overVideoControl, false);
      if (video.currentTime > 0 && !(video.paused) && !(video.ended)) {
        outVideoControl();
      }
    }
    else {
      overvideo.style.zIndex = null;
      videocontrol.style.zIndex = null;
      fullbtn.classList.remove('ion-arrow-shrink');
      fullbtn.classList.add('ion-arrow-expand');
      if (video.currentTime > 0 && !(video.paused) && !(video.ended)) {
        overvideo.addEventListener('mouseout', outVideoControl, false);
        overvideo.addEventListener('mouseover', overVideoControl, false);
      }
    }
  }

  window.addEventListener('load', hideVideoControl, false);
  video.addEventListener('click', togglePlayVideo, false);
  overvideo.addEventListener('click', togglePlayVideo, false);
  playbtn.addEventListener('click', togglePlayVideo, false);
  fullbtn.addEventListener('click', fullScreenVideo, false);
  seekbar.addEventListener('mousedown', toggleSeekBar, false);
  volumebg.addEventListener('mousedown', volumeChange, false);
  volumefg.addEventListener('mousedown', volumeChange, false);
  volumebar.addEventListener('mousedown', volumeOut, false);
  volumebtn.addEventListener('click', toggleMuteVolume, false);
  document.addEventListener('webkitfullscreenchange', checkFullscreen, false);
  document.addEventListener('mozfullscreenchange', checkFullscreen, false);
  document.addEventListener('fullscreenchange', checkFullscreen, false);
}
