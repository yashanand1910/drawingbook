var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
var bErasing = false;

//tabs
$(document).ready(function () {
            var tabID = 1;
            $('#btn-add-tab').click(function () {
                tabID++;
                $('#tab-list').append($('<li><a href="#tab' + tabID + '" role="tab" data-toggle="tab">Tab' + tabID + '<button class="close" type="button" title="Remove this page">x</button></a></li>'));
                $('#tab-content').append($('<div class="tab-pane fade" id="tab' + tabID + '">Tab '+ tabID +' content</div>'));
            });
            $('#tab-list').on('click','.close',function(){
                var tabID = $(this).parents('a').attr('href');
                $(this).parents('li').remove();
                $(tabID).remove();

                //display first tab
               var tabFirst = $('#tab-list a:first');
                 tabFirst.tab('show');
            });
            
            var list = document.getElementById("tab-list");
        });

//clearing canvas
 document.getElementById('clearcanvas').addEventListener('click', function() {
     context.clearRect(0,0, 800,500);}, false);

/*new window
function myFunction() {
    var mywindow = window.open("index.html");
}*/

//implementing eraser
function eraser() {
    return color="white";
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




