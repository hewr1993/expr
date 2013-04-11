<html>

<head>
<link type="text/css" href="cst23.css" rel="stylesheet" />
<link type="text/css" href="button.css" rel="stylesheet" />

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

function show($str, $id){
	echo "<input class=\"button red large\" type=\"button\" value=\"$str\" onclick=\"javascript:window.parent.list.location.href='ShowList.php?id=$id'\" />";
	//echo "<a href='ShowList.php?id=".$id."' target='list'><font color=blue size=4px><b>".$str."</b></font></a>&nbsp;&nbsp;";
}

echo "<input class=\"button blue large\" type=\"button\" value=\"资料库\" onclick=\"javascript:window.parent.list.location.href='ShowUpload.php'\" /><br>";

show("字符串处理", "字符");
show("文件操作", "文件");
show("指针", "指针");
show("链表", "链表");
show("NOIP真题", "NOIP");

?>
</body>

</html>
