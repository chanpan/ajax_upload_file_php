$(function() {
    var file_str = "";
    $("#imageUploadForm").on("submit",function(e){//เมื่อกด submit form
         e.preventDefault();
        UploadImage(file_str); //เรียกใช้ function UploadImage
    });

    $("#myImage").change(function(e){ //เมื่อกด เลือดไฟล์ หรือ เกิด เหตุการณ์ change
        file_str = e.target.files;
    });

    function UploadImage(files) {
        console.log(files);
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