'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");

	});
			$("#submitBtn").click(animatePage);
	$("#testjs").text("Please wait...");
	$(".jumbotron p").toggleClass("active");

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

}

function animatePage(e) {

	var projectName = $("#project").val();
	
	var width = $("#width").val();
	var description=$("#description").val();

	$(projectName).width(width);
	if(description.length>0) {
		$(projectName + " .project-description").text(description);
	}
}

function jumboClick(e) {
	e.preventDefault;
	$(".jumbotron h1").text("just clicked jumbotron");
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

        var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    //doesn't wk
    	$(".jumbotron").fadeIn();
    }
}

// function projectClick(e) { 
// 	console.log("hello old friend");
//     // prevent the page from reloading      
//     e.preventDefault();
//     // In an event handler, $(this) refers to      
//     // the object that triggered the event      
//     $(this).css("background-color", "#7fff00");
// }