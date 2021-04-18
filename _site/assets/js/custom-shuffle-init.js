
	var ImageDemo = (function($, imagesLoaded) {

	var $projectsContainer = $('.list-items-container'),
		$imgs = $projectsContainer.find('img'),
		imgLoad,

	init = function() {
		imgLoad = new imagesLoaded($imgs.get());
		imgLoad.on('always', onAllImagesFinished);
	},

	onAllImagesFinished = function(instance) {

		// Adds visibility: visible;
		$projectsContainer.addClass('images-loaded');

        var Shuffle = window.Shuffle;
        var shuffleInstance = new Shuffle($projectsContainer, {
            itemSelector: '.list-item',
            delimeter: ' ',
            group: 'every',
        });

        $('#filter li').on('click', function (e) {
        	e.preventDefault();

        	$('#filter li').removeClass('active');
        	$(this).addClass('active');

        	var groupName = $(this).attr('data-group');
            shuffleInstance.filter(groupName);
        });
	};

	return {
		init: init
	};

	}( jQuery, window.imagesLoaded ));

	$(document).ready(function() {
		ImageDemo.init();
	});