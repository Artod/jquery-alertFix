/*
* jQuery AlertFix
* 26.09.2013 (c) http://artod.ru
*/

;(function($, undefined) {
	'use strict';

    var __alertFix,
        __inited,
        __init = function() {
            __inited = true;

            $('body').append($('<div id="alertFix" style="display:none; z-index:99999; box-shadow: 0 0 10px rgba(0,0,0,0.5); position:fixed; top: 0px; left:0px; width:100%; height: 50px;"><div id="alerFixBack" style="width:100%; height: 100%; position: absolute; top:0px; left:0px;"></div><div id="alertFixMess" style="height:50px; width:100%; text-align:center; line-height:50px; position:relative;"></div></div>'));

            __alertFix = new AlertFix();            
        };        

    var AlertFix = (function() {		
		var AlertFix = function($alert, options) {
            this.$alert = $('#alertFix');
            this.$alertBack = $('#alerFixBack');
            this.$alertMess = $('#alertFixMess');
            this.timeoutHide = null;

			this.opts = $.extend({
                timeout: 3000,
                bcgColorMessage: 'white',
                bcgColorError: '#FF7E6B',
                bcgColorSuccess: '#8DED7D',
                opacity: 0.8
            }, options);            
		};

		AlertFix.prototype = {
			show: function(message, type) {
                clearTimeout(this.timeoutHide);

                this.$alert.hide();

                var bcgColor = this.opts.bcgColorMessage;
                switch(type) {
                    case 'error':
                        bcgColor = this.opts.bcgColorError;
                        break;
                    case 'success':
                        bcgColor = this.opts.bcgColorSuccess;
                        break;
                }

                this.$alertMess.text(message);
                this.$alertBack.css({
                    opacity: this.opts.opacity,
                    backgroundColor: bcgColor
                });

                var height = this.$alert.height();
                this.$alert.css({
                    top: -height + 'px'
                }).show().animate({
                    top: '0px'
                }, {
                    queue: false
                });

                var that = this;

                this.timeoutHide = setTimeout(function() {
                    that.$alert.animate({
                        top: -height + 'px'
                    }, {
                        queue: false,
                        complete: function() {
                            that.$alert.hide();
                        }
                    });
                }, this.opts.timeout);
            }
		};
		
		return AlertFix;
	})();

    $.alertFix = function(message, type) {
		if (!__inited) {
            __init();
        }

        __alertFix.show(message, type);
    };

    $.alertFix.setOpts = function(opts) {
		if (!__inited) {
            __init();
        }

        $.extend(__alertFix.opts, opts);
    };

})(jQuery);