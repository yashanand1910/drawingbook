var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
var bErasing = false;

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
$('resetcanvas').click(function(context){
    canvas.getContext('2d').clearRect(0,0,width,height);
canvas.width = canvas.width;
});

$("#eraser").click(function() {
        bErasing = true;
    });




var pageNum = 1;
$("#newpage").click(function(){
    pageNum = pageNum +1;        
    $("#container ul").append(`<li class="pageLink" onclick="pageLinkClick(` + pageNum + `)" ctab="` + pageNum + `"><a id="pagelink` + pageNum + `"><span class="tab">Page` + pageNum + `</span></a></li>`);
    
    // Create new Canva
    $("#canvasArea").append(`<center>
                <canvas id="mycanvas` + pageNum + `" class="mycanvas" width="800" height="500"></canvas>
            </center> `)
    
    //Hide every other canvas
    $("#canvasArea").find('.mycanvas').removeClass('active'); // Still need to be worked on.    

});


function pageLinkClick(linkNumber) {
    
    
    alert("page number: " + linkNumber + " clicked")
    
    
    
    
    
    
}



