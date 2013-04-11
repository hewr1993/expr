<?php
	function Show_Error($str){
		echo $str;
		exit(0);
	}

	function illegal($id){
		for ($i = 0; $i < strlen($id); ++$i){
			if (strcmp($id[$i],'0') * strcmp($id[$i], '9') > 0) return 1;
		}
		return 0;
	}

	function Extension($Name){
		$ret = "";
		$i = strlen($Name);
		while ($i){
			--$i;
			if ($Name[$i] == ".") return $ret;
			$ret = $Name[$i].$ret;
		}
		return "WTF";
	}
?>
