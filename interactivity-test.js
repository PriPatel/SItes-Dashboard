
$(function () {
        $("#stage1,#stage2,#stage3").sortable({
                connectWith: "#stage1,#stage2,#stage3",
                start: function (event, ui) {
                        ui.item.toggleClass("highlight");
                },
                stop: function (event, ui) {
                        ui.item.toggleClass("highlight");
                }
        });
        $("#stage1,#stage2,#stage3").disableSelection();
});




$( function() {
    $( "#sortable" ).sortable({
      placeholder: "drag-placeholder"
    });
    $( "#sortable" ).disableSelection();
  } );


$( "#sortable" ).sortable({
  distance: 50
});





var stage = $('.stage');



$('.add-new-stage-button').addEventListener("click", function(){
    $( "#sortable" ).append(stage);
    ;
});



