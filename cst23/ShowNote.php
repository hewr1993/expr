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
<center>
<b><a class="button red large" href="http://cst23.wayneho13.com/status.php" target="code">人人主页</a>能发状态了，上传照片和其他功能迟些再写～<a href="http://cst23.wayneho13.com/log.php" class="button gray large" target="code" >更新日志</a></b>
</center>
<?php

if (!isset($_GET['id'])){
	return;
}

$id=$_GET['id'];
echo "<input class=\"button blue medium\" type=\"button\" value=\"清澄P$id\" onclick=\"javascript:window.parent.code.location.href='http://oj.tsinsen.com/ViewGProblem.page?gpid=$id'\" />&nbsp;&nbsp;";
echo "<input class=\"button rosy medium\" type=\"button\" value=\"标程\" onclick=\"javascript:window.parent.code.location.href='ShowCode.php?id=$id'\" /><br><br>";
//echo "<a href='http://oj.tsinsen.com/ViewGProblem.page?gpid=$id' target='code'><font color=purple size=3px>清澄P$id</font></a><br>";
?>

<script type="text/javascript">
window.parent.code.location.href="http://oj.tsinsen.com/ViewGProblem.page?gpid=<?php echo $id; ?>";
</script>

<?php
$id = mysql_real_escape_string($_GET['id']);
if (illegal($id)) Show_Error('dont piss me off!');
$sql = "select `checkpoint` from `probs` where `prob_id`='$id'";
$result = mysql_query($sql);
$row = mysql_fetch_array($result);

echo "<font color=black size=3px>考察点</font>： <font color=red><b>".$row[0]."</b></font><br>";

?>
</body>

</html>
