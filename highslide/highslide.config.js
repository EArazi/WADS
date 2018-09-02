/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = '../highslide/graphics/';
hs.outlineType = 'custom';
hs.dimmingOpacity = 0.5;
hs.fadeInOut = true;
hs.align = 'center';
hs.allowMultipleInstances = false;
hs.captionEval = 'this.a.title';


// Add the slideshow controller
hs.addSlideshow({
	slideshowGroup: 'group1',
	interval: 5000,
	repeat: true,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		opacity: 0.75,
		position: 'below',
		offsetX: 0,
		offsetY: -15,
		hideOnMouseOut: true
	},
	thumbstrip: {
		mode: 'horizontal',
		position: 'bottom center',
		relativeTo: 'viewport'
	}

});

// gallery config object
var config1 = {
	slideshowGroup: 'group1',
	transitions: ['expand', 'crossfade']
};
