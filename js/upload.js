$(function() {
    $("#myImage").change(function(e) {
        var files = e.target.files;
        UploadImage(files); //เรียกใช้ function UploadImage
    });


    function UploadImage(files) {
        var data = new FormData(); // เตรียมข้อมูล form สำหรับส่ง
        $.each(files, function(k, v) { //ลูป กรณีมีหลายไฟล์
            data.append(k, v);
        });
        $.ajax({ //ส่งข้อมูลไปให้ php ผ่าน webservice
            url: "http://localhost/ajax/server/upload.php",
            type: "POST", //ส่งแบบ post ไม่แสดง parameter บน url
            cache: false,
            contentType: false,
            processData: false,
            data: data, //ข้อมูล data ที่เตรียมไว้
            success: function(res) { //ถ้าส่งสำเร็จ
                console.log(res);
            },
            error: function(err) { //ถ้า error
                console.log(err);
            }
        });
        return false; //ไม่ให้ โหลดหน้าใหม่
    }
});