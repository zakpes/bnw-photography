<?php

 // ++++++++++++++++++++++++++++++++++++
error_reporting(0);


 // configuration

$email_it_to = "83af240a42-1762fa@inbox.mailtrap.io";

$error_message = "Please complete the form first";

$rnd=$_POST['rnd'];
$name=$_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$body=$_POST['body'];


if(!isset($rnd) || !isset($name) || !isset($email) || !isset($subject) || !isset($body)) {
	echo $error_message;
    die();
}


$subject = stripslashes($subject);
$email_from = $email;

$email_message = "Message submitted by '".stripslashes($name);
$email_message .="' on ".date("d/m/Y")."\n\n";
$email_message .= stripslashes($body);
$email_message .="\n\n";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <'.$email_from.'>' . "\r\n";


mail($email_it_to,$subject,$email_message,$headers);
?>
