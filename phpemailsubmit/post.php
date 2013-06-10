<?php  
$apikey = 'XC8U-N3L1-XTF8-7EWE';
$formid = 'australia-quiz-email-form';
$data = $_POST['email'];  
$fieldid = '1';  
$req = 'w_api_key='.$apikey.'&w_form='.$formid.'&'.$fieldid.'='.$data;  
  
$ch = curl_init("http://delawarenorth.wufoo.com/api/insert/");   
curl_setopt($ch, CURLOPT_HEADER, 0);  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
curl_setopt($ch, CURLOPT_POSTFIELDS, $req);  
$resp = curl_exec($ch);  
curl_close ($ch);  
  
echo $resp;  
  
?>