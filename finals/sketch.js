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

  window.addEventListener('scroll', () => {
    document.querySelector('canvas').style.top = window.scrollY + 'px';
    document.querySelector('canvas').style.left = window.scrollX + 'px';
  });

  function checkScreenWidth() {
    if (window.innerWidth >= 768) {
      new p5(initializeP5);
    } else {
      document.querySelectorAll('canvas').forEach(canvas => canvas.remove());
    }
  }

  checkScreenWidth(); // Initial check
  window.addEventListener('resize', checkScreenWidth); // Check on resize
  
