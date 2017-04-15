var app = function(app){

	app.makeController = function(stage, view, pages){

		view.tabs.on("change", function(){
			zog(view.tabs.value);
			pages.go(view.page2, "right", "slide", 500);
		});

		view.tabs2.on("change", function(){
			zog(view.tabs.value);
			pages.go(view.page1, "left", "slide", 500);
		});
	}; //end makeController

	return app;

}(app || {});