<?php
//	define('DB_HOST',$_SERVER['HTTP_MYSQLPORT'].'.mysql.sae.sina.com.cn:'.$_SERVER['HTTP_MYSQLPORT']);
	static 	$DB_NAME = 'Tsinsen';
	static 	$DB_USER = 'root';
	static 	$DB_PASS = '22282633';
	static  $DB_HOST = 'localhost';
	static  $DB_LOCAL = true;

	if (!$DB_LOCAL){
		//for http install
		//Variables for connecting to your database.
		//These variable values come from your hosting account.
		$hostname = "cst23.db.10085961.hostedresource.com";
		$username = "cst23";
		$dbname = "cst23";
		$password = "Hewr22282633!";

		//Connecting to your database
		mysql_connect($hostname, $username, $password) 
		OR DIE ("Unable to connect to database! Please try again later.");
		mysql_select_db($dbname);
	} else {
		//for normal install
		if (!mysql_pconnect($DB_HOST,$DB_USER,$DB_PASS)) 
			die('Could not connect: ' . mysql_error());
		if(!mysql_select_db($DB_NAME))
			die('Can\'t use foo : ' . mysql_error());
	}
	// use db
	mysql_query("set names utf8");
	//if(!$OJ_SAE)mysql_set_charset("utf8");
	//sychronize php and mysql server
	date_default_timezone_set("PRC");
	mysql_query("SET time_zone ='+8:00'");
?>
