<?php 
header('Access-Control-Allow-Origin: *'); 

move_uploaded_file($_FILES[0]["tmp_name"], "uploads/demo.jpg"); 

?>