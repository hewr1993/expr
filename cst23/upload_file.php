<?php
function check_type($file_name){
	$upload_type = '.cpp,.pas,.c,.h,';
	$findtype = strtolower(strrchr($file_name, '.'));
	echo $file_name;
	$allow = strpos($upload_type, $findtype);
	if ($allow === false){
		echo " not Proper File Type<br>";
		echo "Only for ".$upload_type;
		exit;
	}
}

//check_type($_FILES["file"]["name"]);

if ($_FILES["file"]["size"] < 1 * 1024 * 1024){
	if ($_FILES["file"]["error"] > 0){
		echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
	} else {
		echo "Upload: " . $_FILES["file"]["name"] . "<br>";
		echo "Type: " . $_FILES["file"]["type"] . "<br>";
		echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br>";
		echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br>";
	
		if (file_exists("upload/" . $_FILES["file"]["name"])){
			echo $_FILES["file"]["name"] . " already exists. ";
		} else {
//		 move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
			$str = file_get_contents($_FILES["file"]["tmp_name"]);
			$fout = fopen("upload/".$_FILES["file"]["name"], "w");
			fwrite($fout, $str);
			fclose($fout);
			echo "Stored in: upload";
		}
	}
} else {
	echo "Invalid file";
}

?>

<script type="text/javascript">
window.parent.list.location.reload();
</script>
