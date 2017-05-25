



var stage = $(".stage");
var existingStages = $(".existing-stages");


var newStageButton = $("#new-stage");


function addNewStage() { 
	existingStages.append(stage);
}
 


newStageButton.onclick = addNewStage ();


