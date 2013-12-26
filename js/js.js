
$(document).ready(function(){

  var robcmills = Snap.select('#robcmills');

  $(document).keydown(function(){
    Snap.animate(100, 0, function (val) {
      robcmills.attr({'stroke-dashoffset': val + 'px'});
    }, 2000);
  });
});
