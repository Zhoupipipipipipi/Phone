/**
 * Created by Administrator on 2016/8/5 0005.
 */
var item = document.getElementById('FifthContent').getElementsByClassName('FifthItem');
for(var i = 0;i<item.length;i++){
    if(i%2!=0){
        item[i].style.float='left';
    }
    else{
        item[i].style.float='right';
    }
}

var li =  document.getElementById('FooterItem').getElementsByTagName('li');
for(var i = 0;i<li.length;i++){
    li[i].addEventListener('touchstart',touchStart,false);
}

var love = document.getElementById('SixContent').getElementsByTagName('small');
for (var i = 0; i < love.length; i++) {
    love[i].addEventListener('touchstart',lover,false);
}
var headerLeft = document.getElementById('headerLeft');
headerLeft.addEventListener('touchstart',touchHead,false);

function touchStart(e){
    var liImg = [];
    var liSpan = [];

    var li =  document.getElementById('FooterItem').getElementsByTagName('li');
    for(var i = 0;i<li.length;i++){
        if(i!=2){
            liImg[i] = li[i].children[0].children[0];
            liSpan[i] = li[i].children[1];
            liImg[i].setAttribute('src','image/huangguan.png');
            liSpan[i].className='';
        }
    }
    var img = this.children[0].children[0];
    var span = this.children[1];
    img.src = 'image/redhuangguan.png';
    span.className='hover';
}

function touchHead(){
    var show = document.getElementById('show');
    if(show.style.display == 'block'){
        show.style.display = 'none';
    }
    else{
        show.style.display = 'block';
    }
}

function lover(){
    var img = document.getElementById('collect');
    img.style.display="block";
    setTimeout("lose()",1000);
}

function lose(){
    var img = document.getElementById('collect');
    img.style.display="none";
}