<?php
	require_once("./initsql.php");
	for ($i = 1; $i <= 2200; ++$i){
		$FileName = "src/".$i.".txt";
		if (!file_exists($FileName)){
			echo "$i not exists<br>";
			continue;
		}
		$src = file_get_contents($FileName);
		$str = mysql_real_escape_string($src);
		$sql = "insert into `codes`(`prob_id`, `sourcecode`) value('$i', '$str')";
		$res = mysql_query($sql);
		echo "$i finished<br>";
	}
?>
