jQuery AlertFix
========

Copyright (c) 2013 Artod - gartod@gmail.com

How to use
----------

To get started, download the plugin, unzip it and copy files to your website/application directory.
Load files in the 'head' section of your HTML document. Make sure you also add the jQuery library.

    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>		
        <script src="jquery.alertFix.js"></script>
    </head>

Example:

    <script>
		$(document).ready(function() {
			$('body').click(function() {
				$.alertFix('Done!');
			});
		});
    </script>
	
For colored alerts:

    <script>
		$.alertFix('Just message.', 'message');
		$.alertFix('Done!', 'succes');
		$.alertFix('Error!', 'error');
    </script>
	
Settings:

    <script>
		$.alertFix.setOpts({
			timeout: 3000,
			opacity: 0.8,
			bcgColorMessage: 'white',
			bcgColorError: '#FF7E6B',
			bcgColorSuccess: '#8DED7D'			
		})
    </script>