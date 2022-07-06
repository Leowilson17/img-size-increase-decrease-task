var img;
var dis;
var show;
function addSize(){
   img = document.getElementById('img-view');
    show = img.clientWidth;
 dis = (img.style.width = show + 20 + 'px');
}

function minSize(){
    dis = (img.style.width = show - 20 + 'px');
    addSize();
}
