;(function($, window, document, undefined){

	"use strict";

		var pluginName = 'defaultPluginName';
		var defaults = {
            propertyName: 'value'
        };

		function Plugin(element, options){
			this.$element = $(element);
			this.settings = $.extend({}, defaults, options, this.$element.data());
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		$.extend(Plugin.prototype,{
			init: function(){
                console.log('init');
			}
		});

		$.fn[pluginName] = function(options){
			return this.each(function(){
				if(!$.data(this, "plugin_" + pluginName)){
					$.data(this, "plugin_" + pluginName, new Plugin(this, options));
				}
			});
		};

})(jQuery, window, document);