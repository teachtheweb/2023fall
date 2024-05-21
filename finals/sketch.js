var canvas;

function windowResized () {
    resizeCanvas(windowWidth,windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position (0,0);
    canvas.style('z-index','-1');
    strokeWeight(1);
    stroke(0, 0, 238);
  }
  
  function touchMoved () {
    line(mouseX, mouseY, pmouseX, pmouseY);
    return false;
  }

  function mouseWheel(event) {
    event.preventDefault();
  }

  window.addEventListener('scroll', () => {
    document.querySelector('canvas').style.top = window.scrollY + 'px';
    document.querySelector('canvas').style.left = window.scrollX + 'px';
  });

  document.addEventListener('wheel', mouseWheel, { passive: false });