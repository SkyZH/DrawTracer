(function($) {
  $.ctx = $("#mouseCanvas")[0].getContext("2d");
})($);

$(window).resize(function() {
  $("#mouseCanvas").css("width", $(window).width() + "px");
  $("#mouseCanvas").css("height", $(window).height() + "px");
  $("#mouseCanvas").attr("width", $(window).width());
  $("#mouseCanvas").attr("height", $(window).height());
  $.ctx.lineWidth = "3";
  $.ctx.strokeStyle = "red";
});

$(document).ready(function() {
  $(document).trigger("resize");
});

$("#mouseCanvas").on("mousemove", function(e) {
  $.ctx.lineTo(e.pageX, e.pageY);
  $.ctx.stroke();
  $.ctx.beginPath();
  $.ctx.moveTo(e.pageX, e.pageY);
});
