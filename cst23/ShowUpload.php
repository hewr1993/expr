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

<form action="upload_file.php" target="code" method="post" enctype="multipart/form-data">
<input type="file" name="file" id="file" />
<input type="submit" name="submit" value="Submit" />
</form>

<?php

function show($str, $id){
	echo "<input class=\"button rosy small\" type=\"button\" value=\"$str\" onclick=\"javascript:window.parent.code.location.href='ShowUploadCode.php?id=$id'\" />";
}

exec("ls upload/", $arr);
for ($i = 0; $i < count($arr); ++$i) 
	show($arr[$i], $i);

?>
</body>

</html>
