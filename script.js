var dis;
var show;
function addSize(){
   var img = document.getElementById('img-view');
    show = img.clientWidth;
 dis = (img.style.width = show + 20 + 'px');
}

function minSize(){
    var img = document.getElementById('img-view');
    dis = (img.style.width = show - 20 + 'px');
    addSize();
}
