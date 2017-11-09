<?php 
header('Access-Control-Allow-Origin: *'); 

//ถ้ามีหลายไฟล์ก็ foreach() เอา
move_uploaded_file($_FILES[0]["tmp_name"], "uploads/demo.jpg"); 

?>