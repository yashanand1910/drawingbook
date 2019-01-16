
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
var bErasing = false;
var tabsAvailable=[]; // step1

//tabs
$(document).ready(function () {
            var tabID = 1;
            tabsAvailable.push(1);  // step 2 
            $('#btn-add-tab').click(function () {
                tabID = getTabNumber(tabsAvailable); // step 3 
                tabsAvailable.push(tabID); // step 4
                 $('#tab-list').append($('<li class="topTab" id="tab'+tabID+'" ><a id='+tabID+'href="#tab' + tabID + '" role="tab" data-toggle="tab">Tab' + tabID + '<button class="close" type="button" title="Remove this page">x</button></a></li>'));
                $('#tab-content').append($('<div class="tab-pane fade " id="tab' + tabID +'">Tab '+ tabID +' content</div>'));
                var id ="tab" + tabID ;
                var x=document.createElement("canvas");
                x.border="1px solid black";
                x.width="800";
                x.id="canvas"+tabID;
                x.height="500";
                document.getElementById("canvasAreaCenter").appendChild(x);
                hideOtherTabs(tabID);
                tabSelected(tabID);
            });

            $('#tab-list').on('click','.close',function(){
                var tabID = $(this).parents('a').attr('href');
                tabID = $(this).parents('a')[0].innerText.charAt(3)
                removeTab(tabID); // step 5  
                $(this).parents('li').remove();
                $(tabID).remove();
                tabSelected(tabsAvailable[0]);//step8
                //display first tab
               var tabFirst = $('#tab-list a:first');
                 tabFirst.tab('show');
            });

            var list = document.getElementById("tab-list");
        });
              
//clearing canvas
     document.getElementById('clearcanvas').addEventListener('click', function() {
        context.clearRect(0,0, 800,500);}, false);
//selection of tabs
function tabSelected(id){
     $canvas = $("canvas");
    context= document.getElementById("canvas"+id).getContext("2d");
    eventAddition();
}
//implementing eraser
function eraser() {
    return color="white";
}
// step 6
function removeTab(tabID){
    var index  = tabsAvailable.indexOf(parseInt(tabID));
    tabsAvailable.splice(index,1);
}
// step 7 
function getTabNumber(tabsAvailable){
    var highest=0;
    tabsAvailable.forEach(element => {
        highest=element>highest?element:highest;
    });
    return highest+1;
}
function hideOtherTabs(j){
    var tabs = document.getElementsByTagName('canvas');
    for(var i=0;i<tabs.length;i++){
        tabs[i].classList='mycanvas';
        tabs[i].classList.add('hide');
    }
    var cId='canvas'+j;
   document.getElementById(cId).classList='mycanvas';
}
$("#colors").on("click", "li", function() {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    color = $(".selected").css("background-color");
});
eventAddition();
function eventAddition(){
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
 $('.topTab').click(function (e) {
                 var id=e.currentTarget.id.substring(3);
                   hideOtherTabs(id); 
                   tabSelected(id);
              });
}
