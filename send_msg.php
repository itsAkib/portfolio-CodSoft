<?php

	$response=array();

        $message="Contact us form details";
        $message.=PHP_EOL."Name ".$_POST['name'];
        $message.=PHP_EOL."Contact No. ".$_POST['phone'];
        $message.=PHP_EOL."EmailID ".$_POST['email'];
        $message.=PHP_EOL.$_POST['msg'];
    
        $to="hbhalerao.ecti@gmail.com"; // Change to your email address
        
        $subject="Enquiry from ".$_POST['name'];
        
        $sender="info@sescureserver.net";       
        
        //******************* new code ************
        
        $headers = "Reply-To:<".$sender.">\r\n";
        $headers .= "Return-Path:<".$sender.">\r\n";
        $headers .= "From:<".$sender.">\r\n";
        
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
        $headers .= "X-Priority: 3\r\n";
        $headers .= "X-Mailer: PHP". phpversion() ."\r\n"; 
        
        //*******************new code end ***********
        
        $retval = @mail ($to,$subject,$message,$headers);

				// @ is used to hide error if any.

        $retval=true;
         
         if ($retval) {
               echo 'Mail Received: Thank you for your interest. We will get back to you soon...</p>';
         }
         else {
             echo "There is something error. Please try again...";
         }
         
         exit;
         
?>
