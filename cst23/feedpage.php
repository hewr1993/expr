<?php session_start();?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php 
require_once "HttpClient.class.php";
require_once "myfunc_renren.php";
 
$APIKey = '0a67d9a32cd241e99784008b7e07a41a';
$SecretKey = 'f168b837a3c545c384a4410f2c2ec16f';

$msg = $_POST['message'];
if (!strlen($msg)) exit(0);
echo $msg."<br>";

$access_token = "218799|6.f5258b68706a26553e26437d172a7881.2592000.1357891200-501277626";
$params = array("method"=>"status.set","v"=>"1.0",
		"page_id"=>"601536829",
		"access_token"=>$access_token,
		"call_id"=>getTime(),
		"status"=>$msg,
		"format"=>"json");
$params['sig'] = gensig($params,$SecretKey);
$url = "http://api.renren.com/restserver.do";
$json = HttpClient::quickPost($url,$params);
     
$jsond = json_decode($json);

if ($_GET['id'] == 23) 
	echo print_r($jsond);
echo "Succesful!<br>";

?>
