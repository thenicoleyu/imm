var app = function(app){

	app.makeView = function(stage, stageW, stageH, layoutManager){

		var view = {};

		// PAGE 1

		var page1 = view.page1 = new zim.Container( stageW, stageH )
			.addTo(stage);

		var logo = new zim.Rectangle(300,100, frame.blue)
			.addTo(page1);

		var content = new zim.Container(500,500)
			.addTo(page1);
		var object1 = new zim.Rectangle(500,500, frame.green)
			.addTo(content)

		var footer = new zim.Container(500, 100)
			.addTo(page1);
			// .pos(null, stageH-50);
		var tabs = view.tabs = new zim.Tabs({
				width: 500, 
				tabs: ["ONE", "TWO", "THREE"]
			}).addTo(footer);

		// LAYOUT

		layoutManager.add(
			new zim.Layout({
				holder: page1,
				regions: [
					{object: logo, marginTop: 5, maxWidth: 80, minHeight: 20, align: "center", valign: "top"},
					{object:content, marginTop:5, maxWidth:80, align: "center"},
					{object:footer, marginTop:5, maxWidth:80, height:20, backgroundColor: frame.orange}
				],
				lastMargin: 3,
				regionShape: new zim.Shape(),
				scalingObject: stage
			})
		);


		// PAGE 2

		var page2 = view.page2 = new zim.Container( stageW, stageH )
			.addTo(stage);

		var logo2 = new zim.Rectangle(300,100, frame.green)
			.addTo(page2);

		var content2 = new zim.Container(500,500)
			.addTo(page2);
		var object2 = new zim.Rectangle(500,500, frame.pink)
			.addTo(content2)

		var footer2 = new zim.Container(500, 100)
			.addTo(page2);
			// .pos(null, stageH-50);
		var tabs2 = view.tabs2 = new zim.Tabs({
				width: 500, 
				tabs: ["ONE", "TWO", "THREE"]
			}).addTo(footer2);

		// LAYOUT 2

		layoutManager.add(
			new zim.Layout({
				holder: page2,
				regions: [
					{object: logo2, marginTop: 5, maxWidth: 80, minHeight: 20, align: "center", valign: "top"},
					{object:content2, marginTop:5, maxWidth:80, align: "center"},
					{object:footer2, marginTop:5, maxWidth:80, height:20, backgroundColor: frame.orange}
				],
				lastMargin: 3,
				regionShape: new zim.Shape(),
				scalingObject: stage
			})
		);


		
		return view
	}; //end makePages

	return app;

}(app || {}); //use modual pattern to avoid overwriting variables 