
<script type='text/javascript' src='js/jquery.js'></script>
    <script type='text/javascript' src='js/jquery-migrate.min.js'></script>
    <script type='text/javascript' src='js/scrollTo.js'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var mailchimpSF = {"ajax_url": "http:\/\/www.esmeth.com\/wp\/"};
        /* ]]> */
</script>
    <script type='text/javascript' src='js/mailchimp.js'></script>
    <script type='text/javascript' src='js/jquery.ui.core.min.js'></script>
    <script type='text/javascript' src='js/modernizr.js'></script>
<script type="text/javascript">
    jQuery(function($) {
        $('.date-pick').each(function () {
            var format = $(this).data('format') || 'mm/dd/yyyy';
            format = format.replace(/yyyy/i, 'yy');
            $(this).datepicker({
                autoFocusNextInput: true,
                constrainInput: false,
                changeMonth: true,
                changeYear: true,
                beforeShow: function (input, inst) { $('#ui-datepicker-div').addClass('show'); },
                dateFormat: format.toLowerCase(),
            });
        });
    d = new Date();
			$('.birthdate-pick').each(function() {
				var format = $(this).data('format') || 'mm/dd';
    format = format.replace(/yyyy/i, 'yy');
				$(this).datepicker({
        autoFocusNextInput: true,
    constrainInput: false,
    changeMonth: true,
    changeYear: false,
    minDate: new Date(d.getFullYear(), 1-1, 1),
    maxDate: new Date(d.getFullYear(), 12-1, 31),
					beforeShow: function(input, inst) {$('#ui-datepicker-div').removeClass('show'); },
    dateFormat: format.toLowerCase(),
});

});

});
	</script>

<script type="text/javascript">
    window._wpemojiSettings = {"baseUrl": "http:\/\/s.w.org\/images\/core\/emoji\/72x72\/","ext":".png","source":{"concatemoji": "http:\/\/didc.edu.bd\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.2.4"}};
			!function(a,b,c){function d(a) { var c = b.createElement("canvas"), d = c.getContext && c.getContext("2d"); return d && d.fillText ? (d.textBaseline = "top", d.font = "600 32px Arial", "flag" === a ? (d.fillText(String.fromCharCode(55356, 56812, 55356, 56807), 0, 0), c.toDataURL().length > 3e3) : (d.fillText(String.fromCharCode(55357, 56835), 0, 0), 0 !== d.getImageData(16, 16, 1, 1).data[0])) : !1 }function e(a){var c=b.createElement("script");c.src=a,c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g;c.supports={simple: d("simple"),flag:d("flag")},c.DOMReady=!1,c.readyCallback=function(){c.DOMReady = !0},c.supports.simple&&c.supports.flag||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete" === b.readyState && c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);
</script>

    <script>  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r; i[r]=i[r]||function(){
        (i[r].q = i[r].q || []).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      
        ga('create', 'UA-48936207-1', 'esmeth.com');
        ga('send', 'pageview');
      
      
</script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var core = {"startPage": "1","maxPages":"0","nextLink":"http:\/\/www.esmeth.com\/wp\/page\/2\/"};
        /* ]]> */
</script>
    <script type='text/javascript' src='js/ajax-load-posts.js'></script>
    <script type='text/javascript' src='js/comment-reply.min.js'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var _wpcf7 = {"loaderUrl": "http:\/\/www.esmeth.com\/wp\/wp-content\/plugins\/contact-form-7\/images\/ajax-loader.gif","sending":"Sending ..."};
        /* ]]> */
</script>
    <script type='text/javascript' src='js/bootstrap.min.js'></script>
    <script type='text/javascript' src='js/plugins.js'></script>
    <script type='text/javascript' src='js/custom.js'></script>

