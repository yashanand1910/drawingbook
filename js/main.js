var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
var bErasing = false;

//clearing canvas
 document.getElementById('clearcanvas').addEventListener('click', function() {
     context.clearRect(0,0, 800,500);}, false);

//new window
function myFunction() {
    var mywindow = window.open("index.html", "", "width=200,height=100");
}

$("#colors").on("click", "li", function() {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    color = $(".selected").css("background-color");
});

$canvas.mousedown(function(e) {
    lastEvent = e;
    mouseDown = true;

}).mousemove(function(e) {
    if (mouseDown) {
        //Draw lines
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function() {
    mouseDown = false;
}).mouseleave(function() {
    $canvas.mouseup();
});




