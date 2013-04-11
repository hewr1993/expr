<html>

<head>
<link type="text/css" href="cst23.css" rel="stylesheet" />
<link type="text/css" href="button.css" rel="stylesheet" />
<?php
	require_once("./initsql.php");
	require_once("myfunc.php");
?>

<style type="text/css">
html {
	overflow-x:hidden;
}
body {
	background: #ededed;
	width: 100%;
}
</style>

</head>

<?php
//	require_once("widget_piwik.php");
?>

<body>
<?php

if (!isset($_GET['id'])){
	return;
}

function illegal2($str){
	return strpos($str, '\'') || strpos($str, '"');
}

function show($str){
	echo "<input class=\"button green medium\" style=\"width:50px\" type=\"button\" value=\"P$str\" onclick=\"javascript:window.parent.note.location.href='ShowNote.php?id=$str'\" />&nbsp;&nbsp;";
	//echo "<a href='ShowNote.php?id=".$str."' target='note'><font color=green size=4px><b>".$str."</b></font></a>&nbsp;&nbsp;";
}

$id = mysql_real_escape_string($_GET['id']);
if (illegal2($id)) Show_Error('dont piss me off!');
$sql = "select DISTINCT `prob_id` from `probs` where (`checkpoint` like '%$id%') order by prob_id";
$result = mysql_query($sql);
$cnt = 0;
while ($row = mysql_fetch_row($result)){
	show($row[0]);
	++$cnt;
}
echo "<br><br><font color=black>Total: ".$cnt."</font><br>";

?>


</body>

</html>
