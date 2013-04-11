<?php
	require_once("./initsql.php");
	$fin = fopen("list.txt", "r");
	while (!feof($fin)){
		$str = fgets($fin, 1024);
		$i = 0;
		while ($str[$i] != ' ' && $i < strlen($str)) ++$i;
		if ($i == strlen($str)) break;
		$id = substr($str, 0, $i);
		$cp = substr($str, $i + 1, strlen($str));
		$sql = "insert into `probs` value('$id', '$cp')";
		mysql_query($sql);
		echo "$sql\n";
	}
?>
