// Functions to set and resize images

const MIN = 320;
const MEDIUM = 640;
const LARGE = 1024;
var screensize;
var curSize = 'large';

//check screen size and sets screensize variable
function checkScreenSize() {
  if(this < MEDIUM || window.innerWidth < MEDIUM) {
    return screensize = 'small';
  }
  else if(this < LARGE || window.innerWidth < LARGE) {
    return screensize = 'medium';
  }
  else {
    return screensize = 'large';
  }
}

//set images size (small, medium or large) on load
function setImageSize() {
  for (let i = 0; i < this.length; i++) {
    this[i].src = this[i].src.replace('large', screensize);
  }
  curSize = screensize;
}

//set videos size (small, medium or large) on load
function setVideoSize() {
  for (let i = 0; i < this.length; i++) {
    this[i].poster = this[i].poster.replace('large', screensize);
    var vidsource = this[i].querySelectorAll('source');
    for (let j = 0; j < vidsource.length; j++) {
      vidsource[j].src = vidsource[j].src.replace('large', screensize);
    }
  }
  curSize = screensize;
}

// change images and videos size (small, medium or large) on screen resize
function changeImageSize() {
  if (curSize !== screensize) {
    var img = document.querySelectorAll('.media-change');
    for (let i = 0; i < img.length; i++) {
      img[i].src = img[i].src.replace(curSize, screensize);
    }
    var vid = document.querySelectorAll('.video-change');
    for (let i = 0; i < vid.length; i++) {
      vid[i].poster = vid[i].poster.replace(curSize, screensize);
    }
    curSize = screensize;
  }
}

module.exports = {
  checkScreenSize: checkScreenSize,
  setImageSize: setImageSize,
  changeImageSize: changeImageSize,
  setVideoSize: setVideoSize
}
