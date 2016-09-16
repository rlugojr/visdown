window.onload = function () {

	// Start a new marked instance and renderer
	var marked = window.marked;
	var renderer = new marked.Renderer();
	var counter = 0;

	// Render the ```vis as a vega-lite chart
	renderer.code = function (code, lang, escaped) {
		if (lang == "vis") {
			var jsonVis = YAML.parse(code);
			//var vgSpec = vl.compile(jsonVis).spec;
			var embedSpec = {mode: "vega-lite", spec: jsonVis, renderer: "svg" };
			counter++;
			el = "#vis-" + counter;
			vg.embed(el, embedSpec, function(error, result) {});
			htmlChart = "<div id='vis-" + counter + "'></div>";
			return htmlChart;
		}
		var result = marked.Renderer.prototype.code.call(this, code, lang, escaped);
		return result;
	};

	// Convert to markdown
	var input = document.querySelector("#input");
	var output = document.querySelector("#output");

	window.visdown = function () {
		console.log('visdown');
		var markdownText = input.value;
		output.innerHTML = marked(markdownText, { renderer: renderer });
	}
	visdown()

  // Theme configuration for Vegalite
theme =	{
	  "background": "#f9f9f9",

	  "marks": {
	    "color": "#ab5787",
	    "symbolSize": 20
	  },

	  "axis": {
	    "padding": 2,
	    "axisColor": "#979797",
	    "tickColor": "#979797",
	    "tickLabelColor": "#979797",
	    "axisWidth": 0.5,
	    "tickWidth": 0.2,
	    "titleColor": "#979797",
	    "titleFontWeight": "normal",
	    "gridWidth": 0.2
	  },

	  "axis_x": {
	    "tickSize": 10,
	    "tickSizeEnd": 0,
	    "grid": {
	      "ordinal": false,
	      "default": true
	    }
	  },

	  "axis_y": {
	    "tickSize": 0,
	    "axisColor": "transparent",
	    "grid": true
	  },

	  "legend": {
	    "padding": 1,
	    "labelFontSize": 11,
	    "symbolShape": "square",
	    "symbolStrokeWidth": 0
	  },

	  "range": {
	    "category10": ["#ab5787", "#51b2e5", "#703c5c", "#168dd9", "#d190b6",
	      "#00609f", "#d365ba", "#154866", "#666666", "#c4c4c4"]
	  }
	}


}
