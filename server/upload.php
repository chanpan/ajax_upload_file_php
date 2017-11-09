<?php 
header('Access-Control-Allow-Origin: *'); 

$out = []; 
foreach($_FILES as $file){
	$imageFileType = pathinfo($_FILES[0]['name'],PATHINFO_EXTENSION); 
	$fileName = "Demo_".random_string(50).".$imageFileType";
	move_uploaded_file($file["tmp_name"], "uploads/$fileName"); 
	array_push($out, $fileName);
}

echo json_encode($out);
 

function random_string($length) {
    $key = '';
    $keys = array_merge(range(0, 9), range('a', 'z'));

    for ($i = 0; $i < $length; $i++) {
        $key .= $keys[array_rand($keys)];
    }

    return $key;
}

?>