
var gineretTestImg =function () {
    var elements = document.getElementsBySelector("img.imgGeneretToFrontEnd")
    for (var i = 0; i < elements.length; i++) {
        var obj = elements[i];
        console.log(obj);
    }

}
document.load(function(){
    alet(1)
    gineretTestImg()
});
