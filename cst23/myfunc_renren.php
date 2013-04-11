<?php

require_once "HttpClient.class.php";

function getTime(){
	$time = explode ( " ", microtime () );  
	$nt = explode(".", $time[0] * 1000);
	$nt = $nt[0];
	while (strlen($nt) < 3) $nt = "0".$nt;
	$time = $time [1] . $nt;
	return $time;
}

function gensig($params,$secret_key){
    ksort($params);
    reset($params);
    $str = "";
    foreach($params as $key=>$value){
        $str .= "$key=$value";
    }
    return md5($str.$secret_key);;
}

function initFans(){
	$SecretKey = 'f168b837a3c545c384a4410f2c2ec16f';
	$access_token = "218799|6.55aed343e61cbdbbf661f117a426fc2d.2592000.1357909200-501277626";
	$params = array("method"=>"pages.getFansList",
		"v"=>"1.0",
		"page_id"=>"601536829",
		"access_token"=>$access_token,
		"count"=>"10000",
		"call_id"=>getTime(),
		"format"=>"json");
        $params['sig'] = gensig($params,$SecretKey);
        $url = "http://api.renren.com/restserver.do";
        $json = HttpClient::quickPost($url,$params);
	$jsond = json_decode($json, true);
	$fans = $jsond['fans'];
	return $fans;
}

function getFan($fans, $Name){
	$Name = urldecode($Name);
	$len = count($fans);
	for ($i = 0; $i < $len; ++$i){
		$man = $fans[$i];
		if (!stripos(urldecode(" ".$man['name']), $Name)) continue;
		print_r($man);
		echo "<br>";
	}
}

$fans = initFans();
$fansjson = json_encode($fans);

?>
<script language="javascript" type="text/javascript">

var fans = <?php echo $fansjson; ?>;
var len = fans.length;

var $ = function(id){
	return document.getElementById(id);
}

var getFan = function(name){
	$("show").innerHTML = "";
	if (!name.length) return;
	for (i = 0; i < len; ++i){
		var man = fans[i];
		if (man['name'].indexOf(name) != -1){
			$("show").innerHTML += "<br><button class='button blue large' onclick=\"insAt('" + man['name'] + "(" + man['uid'] + ")')\"><img src=\"" + man['headurl'] + "\"><b>" + man['name'] + "</b></img></button>";
		}
	}
}

var updAt = function(){
	var name = $("at").value;
	getFan(name);
}

var insAt = function(name){
	var str = "@" + name + " ";
//	$("feedTx").innerHTML += str;
	var box = $("feedTx");
	var startPos = box.selectionStart;
	var endPos = box.selectionEnd;
	var restoreTop = box.scrollTop;
	box.value = box.value.substring(0, startPos) + str + box.value.substring(endPos, box.value.length);
	if (restoreTop > 0) {
		box.scrollTop = restoreTop;
	}
	box.focus();
	box.selectionStart = startPos + str.length;
	box.selectionEnd = startPos + str.length;
}

</script>
