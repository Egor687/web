import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class JQ {
		public $: any;
		public defaultOwlCarouselParams: Object;
		constructor(){
			this.$ = $;
			this.defaultOwlCarouselParams = {
				items: 6,
				itemsDesktop: [1000,5],
				itemsDesktopSmall: [900,3],
				itemsTablet: [600,2],
				itemsMobile: false,
				singleItem: false,
				pagination: false,
				autoPlay: 2000
			};
		}
		test(word = 'default value'){
				console.log(word);
		}
		scrollTop(position = 0){
				$('body').scrollTop(position);
		}
		initOwlCarousel(selector, params = this.defaultOwlCarouselParams){
			$('body').find(selector).owlCarousel(params);
		}
		inlineSvg(){
			$('html').find('img.svg').each(function(){
				var $img = $(this);
				var imgID = $img.attr('id');
				var imgClass = $img.attr('class');
				var imgURL = $img.attr('src');

				$.get(imgURL, function(data) {
					// Get the SVG tag, ignore the rest
					var $svg = $(data).find('svg');

					// Add replaced image's ID to the new SVG
					if(typeof imgID !== 'undefined') {
						$svg = $svg.attr('id', imgID);
					}
					// Add replaced image's classes to the new SVG
					if(typeof imgClass !== 'undefined') {
						$svg = $svg.attr('class', imgClass+' replaced-svg');
					}

					// Remove any invalid XML tags as per http://validator.w3.org
					$svg = $svg.removeAttr('xmlns:a');

					// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
					if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
						$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
					}

					// Replace image with new SVG
					$img.replaceWith($svg);

				}, 'xml');

			});
			$('html').find('svg use').each(function(){
				var $img = $(this);
				var imgID = $img.attr('id');
				var imgClass = $img.attr('class');
				var imgURL = $img.attr('xlink:href');

				$.get(imgURL, function(data) {
					// Get the SVG tag, ignore the rest
					var $svg = $(data).find('svg');

					// Add replaced image's ID to the new SVG
					if(typeof imgID !== 'undefined') {
						$svg = $svg.attr('id', imgID);
					}
					// Add replaced image's classes to the new SVG
					if(typeof imgClass !== 'undefined') {
						$svg = $svg.attr('class', imgClass+' replaced-svg');
					}

					// Remove any invalid XML tags as per http://validator.w3.org
					$svg = $svg.removeAttr('xmlns:a');

					// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
					if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
						$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
					}

					// Replace image with new SVG
					$img.replaceWith($svg);

				}, 'xml');

			});
		}
		animated_scroll(){
			$(document).ready(function(){
				var to_animate_elements = $.makeArray($('.to_animate:not(.hidden)'));
				function toAnimate(obj, animation = 'fadeIn', trigger = false){
					if($($(obj).data('trigger')).length > 1){
						console.log(`More the one element was found for selector: '${$(obj).data('trigger')}'`);
					}
					trigger = $($(obj).data('trigger')).length == 1
						? $($(obj).data('trigger'))
						: ( trigger === false ? $(obj) : trigger );
					animation = $(obj).data('animation') !== undefined && $(obj).data('animation') != ''
						? $(obj).data('animation')
						: animation;
					if (trigger.offset().top < window.pageYOffset + (window.screen.height * .7)){
						if($(obj).hasClass('animation_group')){
							$(obj).removeClass('to_animate');
							var timeout = 0,
							columns = 2,
							correction = 500;
							$(obj).find('.series').each(function(index, value){
								setTimeout(function(){
									toAnimate(value, animation, trigger);
								}, correction*index/2);
							});
						}else{
							if(!$(obj).hasClass('animated')){
								$(obj).removeClass('to_animate').addClass('animated').addClass(animation);
							}
						}
						return true;
					}
					return false;
				}
				if (to_animate_elements.length > 0){
					window.onscroll = function() {
						$.each(to_animate_elements, function(index, value){
							if(value !== undefined){
								if(toAnimate(value)){
									to_animate_elements.splice(index, 1);
								}
							}
						});
					}
				}
			});
		}
		isHomePage(){
			if(!$($('.contacts_page')[0].parentElement).prev().hasClass('home_page')){
				$('.contacts_page').find('.to_animate').each(function(index, item){
					$(item).removeClass('to_animate').addClass('animated');
				});
			}
		}
}