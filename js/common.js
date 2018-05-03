function ajaxXHR(type, url, cb, params) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var data = JSON.parse(xhr.response); //解析返回的response
            cb(data);
        }
    }
    xhr.open(type, url, true);
    xhr.send(params);
}