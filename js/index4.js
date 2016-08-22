/**
 * Created by Administrator on 2016/8/20 0020.
 */
var user = $('#user').html();
/*显示评价点赞*/
function show(obj){
    var ul =obj.parentNode.childNodes[3];
    if(ul.style.display=='none'||ul.style.display==''){
        $('ul').hide();
        ul.style.display='inline-block';
    }
    else{
        ul.style.display='none';
    }
}

$('html').click(function(e){
    //使用e.target 判断事件源 是否在 dropDown或者list上 来处理是否隐藏
    if($(e.target)[0].alt!='other'){
        $('ul').hide();
    }
});

/*显示大图*/
function showBig(obj){
    var big = document.getElementById('bigPic');
    var pic = big.children[0];
    var picSrc = obj.alt;
    pic.src = picSrc;
    $('#bigPic').fadeIn();
    big.style.display="flex";        //垂直居中
}
/*大图消失*/
function hidePic(obj){
    $('#bigPic').fadeOut();
}

/*点赞*/
function zan(obj){
    var b = obj.children[1];
    var content = obj.parentNode.parentNode.parentNode;
    var zanContent =obj.parentNode.parentNode.nextSibling.nextSibling;
    if(zanContent==null){
        b.innerHTML = '取消';
        var divZan = document.createElement('div');
        divZan.setAttribute('class','zan');
        content.appendChild(divZan);
        var triangle = document.createElement('div');
        triangle.setAttribute('class','triangle');
        divZan.appendChild(triangle);
        var newZanContent = document.createElement('div');
        newZanContent.setAttribute('class','zanContent');
        divZan.appendChild(newZanContent);
        var spanImg = document.createElement('span');
        newZanContent.appendChild(spanImg);
        var img = document.createElement('img');
        img.setAttribute('src','image/heartBlie.png');
        spanImg.appendChild(img);
        var span =document.createElement('span');
        span.innerHTML = user;
        newZanContent.appendChild(span);
    }
    else{
        if(b.innerHTML != '取消'){
            b.innerHTML = '取消';
            var zan = obj.parentNode.parentNode.nextSibling.nextSibling.childNodes[3];
            var span =document.createElement('span');
            span.innerHTML = user;
            zan.appendChild(span);
        }
        else{
            b.innerHTML = '赞';
            var delZanItem = obj.parentNode.parentNode.nextSibling.nextSibling;
            var delZan = delZanItem.children[1];
            var item = delZan.getElementsByTagName('span');
            if(item.length==2){
                zanContent.remove();
            }
            else{
                for(var i = 0;i<item.length;i++){
                    if(item[i].innerHTML ==user){
                        item[i].remove();
                    }
                }
            }
        }
    }
}