$(document).ready(function(){

	
var element = $("#printplanbody"); // global variable
var getCanvas; // global variable
 
    $("#downloadImg").on('click', function () {
         html2canvas(element, {
         onrendered: function (canvas) {
                getCanvas = canvas;
                var imgageData = getCanvas.toDataURL("image/png");
                var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
                $("#downloadImg").attr("download", "your_pic_name.png").attr("href", newData);
                }
             });
         });
    
    // Now browser starts downloading it instead of just showing it


});