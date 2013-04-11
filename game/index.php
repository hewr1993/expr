<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>html5小游戏</title>
<center>
<b>
<?php
	exec("dir", $arr);
	for ($i = 0; $i < count($arr); ++$i){
		$s = $arr[$i];
		if (strcmp(substr($s, strlen($s) - 4, 4), ".php")) continue;
		if (!strcmp($s, "index.php")) continue;
		echo "<a href=\"".$s."\"><font color=green size=6em>".substr($s, 0, strlen($s) - 4)."</font></a><br>\n";
	}
?>
<a href="TD/index.html"><font color=green size=6em>TowerDefence</font></a><br>
</b>
</center>
