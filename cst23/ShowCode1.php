<html>

<head>

<style type="text/css">
body {
	background: #ededed;
	width: 100%;
}
</style>

<?php
	require_once('./initsql.php');
?>

<?php
function Show_Error($str){
	echo "<script language='javascript'>\n";
	if (!strpos($_SERVER["HTTP_USER_AGENT"],"Chrome")) echo "alert('".$str."');\n";
	echo "</script>";
	exit(0);
}
?>

<link href='highlight/styles/shCore.css' rel='stylesheet' type='text/css'/> 
<link href='highlight/styles/shThemeDefault.css' rel='stylesheet' type='text/css'/> 
<script src='highlight/scripts/shCore.js' type='text/javascript'></script> 
<script src='highlight/scripts/shBrushCpp.js' type='text/javascript'></script> 
<script src='highlight/scripts/shBrushJava.js' type='text/javascript'></script> 
<script src='highlight/scripts/shBrushDelphi.js' type='text/javascript'></script> 

<script language='javascript'> 
SyntaxHighlighter.config.bloggerMode = false;
SyntaxHighlighter.config.clipboardSwf = 'highlight/scripts/clipboard.swf';
SyntaxHighlighter.all();
</script>

</head>

<body>

<?php
	if (!isset($_GET['id'])) Show_Error('Nothing to show!');

	$id = $_GET['id'];
	$sql = "select `sourcecode` from `codes` where `prob_id`='".$id."'";
	$result = mysql_query($sql);
	$row = mysql_fetch_array($result);
	
	echo "<div align=left>";
	if (strcmp($row[0],"")!=0){
		$language_name=Array("C", "C++", "Pascal", "Java", "Other Language");
		$brush=strtolower("C++");
		if ($brush=='pascal') $brush='delphi';
		echo "<pre class=\"brush:".$brush.";\">";
		ob_start();
		$auth=ob_get_contents();
		ob_end_clean();
		echo htmlspecialchars(str_replace("\n\r","\n",$row[0]))."\n".$auth."</pre>";
	}
	echo "</div>";
?>

</body>

</html>
