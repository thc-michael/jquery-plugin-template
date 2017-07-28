;(function($, window, document, undefined){

	var pluginName = 'defaultPluginName';
	var dataKey = "plugin_" + pluginName;

	var Plugin = function(element, options) {
		this.$element = $(element);
		this._name = pluginName;

		this.settings = {
			propertyName: 'value'
		};

		this.init(options);
	};

	Plugin.prototype = {
		init: function(options) {
			this.settings = $.extend(true, this.settings, this.$element.data(), options);
		}
	};

	$.fn[pluginName] = function (options) {
		var plugin = this.data(dataKey);
		if (plugin instanceof Plugin) {
			if (typeof options !== 'undefined') {
				plugin.init(options);
			}
		} else {
			plugin = new Plugin(this, options);
			this.data(dataKey, plugin);
		}
		return plugin;
	};

}(jQuery, window, document));