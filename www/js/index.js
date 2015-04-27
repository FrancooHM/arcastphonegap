alert("Arranco index.js");

$(document).ready(
 
    function () {
        alert("Arranco $(document).ready");
        window.location.replace("http://192.99.46.56:1935/envivo/teleredtv/playlist.m3u8");
    }
);

//export ANDROID_HOME="/Applications/Android Studio.app/sdk"
//export ANDROID_TOOLS="/Applications/Android Studio.app/sdk/tools"
//export ANDROID_PLATFORM_TOOLS="/Applications/Android Studio.app/sdk/platform-tools"