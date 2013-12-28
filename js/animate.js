
animate = function() {
  Snap.animate(100, 0, function (val) {
    var robcmills = Snap.select('#robcmills');
    robcmills.attr({'stroke-dashoffset': val + 'px'});
  }, 2000);   
};

$(document).ready(function(){

  animate();

  setInterval(function() {
    animate();
  }, 5000);

  $(document).click(function(){
    animate();
  });
});
