<?php

exec("ls upload/", $arr);
$filename = "upload/".$arr[$_GET['id']];
 
header("Content-Type: application/force-download");
header("Content-Disposition: attachment; filename=".$arr[$_GET['id']]); 
readfile($filename);

?>
