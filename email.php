<?php

  if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailForm = $_POST['mail'];
    $message = $_POST['message'];
  }
    $mailTo = "malihatanweer@gmail.com";
    $headers = "from: ".$mailForm;
    $txt = "You have recieved an email from ".$name."."\n\n".$message;

    if(mail($mailto, $subject,  $txt, $headers)) {
      echo "<h1>Message send succesflly </h1>"
    }   
    else {
      echo "Something went wrong";
    }
  
?>