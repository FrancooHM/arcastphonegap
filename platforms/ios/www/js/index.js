alert("Arranco index.js");

$(document).ready(
 
    function () {
        alert("Arranco $(document).ready");
        window.location.replace("http://192.99.46.56:1935/envivo/teleredtv/playlist.m3u8");
    }
);