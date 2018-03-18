export default function eventArrows(){
  console.log('called arrows');
  let toLeft = document.querySelector('.nav-back');
  let toRight = document.querySelector('.nav-forward');
  let events = document.querySelector('#events-container');
  let thumbs = events.children.length;
  let thumbcount = events.querySelectorAll('.events');
  let thumb = thumbcount[0].offsetWidth;
  console.log('thumb '+thumb);
  let thumbWidth = events.offsetWidth;
  // let rightPos = events.getBoundingClientRect();
  // console.log(rightPos);
  var holder = document.querySelector('.events-holder').getBoundingClientRect().right;
  // console.log("holder right:"+holder);
  let leftPosition = 0;
  events.style.left = leftPosition+"px";

  toLeft.addEventListener('click', moveBack, false);
  toRight.addEventListener('click', moveForward, false);

  let moveSlide = function (value) {
    console.log("thumbWidth: "+thumbWidth);
      console.log("thumb: "+thumb);
      leftPosition += value * thumb;
      console.log("new position: "+leftPosition);
      events.style.left = leftPosition + 'px';
  };
  function moveBack(){
    console.log('back');
    if(leftPosition !== 0) {
      moveSlide(1);
    } else if (leftPosition === 0) {
        events.style.left = leftPosition + 'px';
      } else {
      leftPosition = (thumbs-1)* -thumbWidth;
      events.style.left = leftPosition + 'px';
    }
  }

  function moveForward(){
    console.log('forward');
    let rightPos = events.getBoundingClientRect().right;
    if (window.innerWidth > 640){
      if(Math.ceil(rightPos) <= Math.floor(holder + thumb)){
        console.log('equal');
        return;
      }
    }
    if (leftPosition > (thumbs-1) * -thumb) {
      moveSlide(-1);
    } else {
      leftPosition = 0;
      events.style.left = leftPosition + 'px';
    }
  }
}
