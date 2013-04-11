<html>

<head>

<link href="CFHighlight/prettify.css" rel="stylesheet" type="text/css"/>
<link charset="utf-8" href="CFHighlight/showprob.css" rel="stylesheet" type="text/css"/>
<SCRIPT charset="utf-8" src="CFHighlight/share.js" type="text/javascript"> </SCRIPT>
<LINK charset="utf-8" href="CFHighlight/community.css" rel="stylesheet" type="text/css"/>
<!--[if IE]><style>#sidebar { padding-left: 1em; margin: 1em 1em 1em 0; }</style><![endif]-->
<SCRIPT src="CFHighlight/showcode.js" type="text/javascript"> </SCRIPT>
</head>

<?php
//	require_once("widget_piwik.php");
	require_once('./initsql.php');
	require_once("myfunc.php");
?>

<?php
	if (!isset($_GET['id'])) Show_Error('Nothing to show');

	$id = $_GET['id'];
	exec("ls upload/", $arr);
	$ETS = Extension($arr[$id]);
	echo $arr[$id]." <a href='download.php?id=".$id."'>下载</a>";
	if (!stripos(" .cpp.c.pas.h", $ETS)) 
		exit(0);
?>

<body onload="prettyPrint()"><!-- Codeforces javascripts. -->

<script type="text/javascript">
$(document).ready(
	function() {
		$.ajaxSetup({ scriptCharset: "utf-8" ,contentType: "application/x-www-form-urlencoded; charset=UTF-8" });
		$(".second-level-menu-list").lavaLamp(
			{ fx: "backout",       speed: 1000   }
		);
		Codeforces.countdown();
		$("a[rel='photobox']").colorbox();
	}
);
</script>
<script type="text/javascript">
var	_gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-743380-5']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();
</script>

<div class="datatable" style="background-color: #E1E1E1;padding-bottom:3px;">
<div class="roundbox " style="margin-top:2em;font-size:11px;">
<div class="roundbox-lt">&nbsp;</div>
<div class="roundbox-rt">&nbsp;</div>

<div class="caption titled">&rarr; Source
<div class="top-links"></div>
</div>
<pre class="prettyprint" style="padding:0.5em;">
<?php
	$content = file_get_contents("upload/".$arr[$id]);
	echo htmlspecialchars($content);
?>
</pre>
</div>

</body>

</html>
