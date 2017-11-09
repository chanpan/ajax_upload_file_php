$(function() {
    var img = $("#imgDemo").attr('src');
    var st = img.replace(/^data:image\/(png|jpg);base64,/, "");
    console.log(st);

    $("#myImage").change(function(e) {
        //console.log(e.target.files);
        var files = e.target.files;
        //console.log(files);
        UploadImage(files);
    });


    function UploadImage(files) {
        var data = new FormData();
        $.each(files, function(k, v) {
            data.append(k, v);
        });
        $.ajax({
            url: "http://localhost/ajax_upload/server/upload.php",
            type: "POST",
            cache: false,
            contentType: false,
            processData: false,
            data: data,
            success: function(res) {
                console.log(res);
            }
        });
        return false;
    }
});