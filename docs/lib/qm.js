// qm.js by qxxst
function process() {
    var images = document.querySelectorAll('img:not([alt])');
    for (var i = 0; i < images.length; i++) {
        images[i].style.border = '5px solid red';
    }
}