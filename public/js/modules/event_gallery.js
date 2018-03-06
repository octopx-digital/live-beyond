export default function eventArrows(){
  let toLeft = document.querySelector('.nav-back');
  let toRight = document.querySelector('.nav-forward');
  let events = document.querySelector('#events-container');
  let thumbs = events.children.length;
  let thumbcount = events.querySelectorAll('.events');
  let thumb = thumbcount[0].offsetWidth;
  let thumbWidth = events.offsetWidth;
  let leftPosition = 0;
  events.style.left = leftPosition+"px";

  toLeft.addEventListener('click', moveBack, false);
  toRight.addEventListener('click', moveForward, false);

  let moveSlide = function (value) {
      leftPosition += value * thumb;
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
    if (leftPosition > (thumbs-1) * -thumb) {
      moveSlide(-1);
    } else {
      leftPosition = 0;
      events.style.left = leftPosition + 'px';
    }
  }
}
