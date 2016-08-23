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
    var contentChild =content.children[content.children.length-1];
    if(b.innerHTML=='赞'){
        if(contentChild.className!='zan'){
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
        else {
            if(contentChild.children[(contentChild.children.length-1)].className=='commentContent'&&contentChild.children.length==2){
                var LastChildren =contentChild.children[(contentChild.children.length-1)];
                var newZanContent = document.createElement('div');
                newZanContent.setAttribute('class','zanContent');
                contentChild.insertBefore(newZanContent,LastChildren);
                var spanImg = document.createElement('span');
                newZanContent.appendChild(spanImg);
                var img = document.createElement('img');
                img.setAttribute('src','image/heartBlie.png');
                spanImg.appendChild(img);
                var span =document.createElement('span');
                span.innerHTML = user;
                newZanContent.appendChild(span);
                b.innerHTML = '取消';
            }
            else{
                b.innerHTML = '取消';
                var zan = obj.parentNode.parentNode.nextSibling.nextSibling;
                var zanItem = zan.children[1];
                var span =document.createElement('span');
                span.innerHTML = user;
                zanItem.appendChild(span);
            }
        }
    }
    else{   //取消赞
        b.innerHTML = '赞';
        var delZanItem = obj.parentNode.parentNode.nextSibling.nextSibling;
        console.log(delZanItem);
        var delZan = delZanItem.children[1];
        var item = delZan.getElementsByTagName('span');
        console.log(delZan);
        if(item.length==2&&delZanItem.children.length==2){
            delZanItem.remove();
        }
        else if(item.length==2){
            delZan.remove();
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

function comment(obj){
    var comment = obj.parentNode.parentNode.parentNode.nextSibling.nextSibling;
    var commentInput = comment.getElementsByTagName('input');
    commentInput[0].value='';
    comment.style.display="block";
    commentInput[0].focus();
}
/*评价*/
function send(obj){
    var sendParent = obj.parentNode;
    var sendVal = sendParent.children[0].value;
    var itemContent = sendParent.parentNode.children[1];
    var ifContent = itemContent.children;
    var ifContentLenght=ifContent.length;
    if(ifContent[ifContentLenght-1].className !='zan'){    //判断没有赞也没有评价
        var divZan = document.createElement('div');
        divZan.setAttribute('class','zan');
        itemContent.appendChild(divZan);
        var triangle = document.createElement('div');
        triangle.setAttribute('class','triangle');
        divZan.appendChild(triangle);
        var newCommentContent = document.createElement('div');
        newCommentContent.setAttribute('class','commentContent');
        divZan.appendChild(newCommentContent);
        var p = document.createElement('p');
        newCommentContent.appendChild(p);
        var span = document.createElement('span');
        p.appendChild(span);
        span.innerHTML=user;
        var b = document.createElement('b');
        p.appendChild(b);
        b.innerHTML=sendVal;
    }
    else{   //有赞或者有评价
        var ContentChild = ifContent[ifContentLenght-1].children;
        if(ContentChild.length!=3){
            var LastChild = ContentChild[1];
            if(LastChild.className == 'commentContent'){
                var p = document.createElement('p');
                LastChild.appendChild(p);
                var span = document.createElement('span');
                p.appendChild(span);
                span.innerHTML=user;
                var b = document.createElement('b');
                p.appendChild(b);
                b.innerHTML=sendVal;
            }
            else{
                var newCommentContent = document.createElement('div');
                newCommentContent.setAttribute('class','commentContent');
                ifContent[ifContentLenght-1].appendChild(newCommentContent);
                var p = document.createElement('p');
                newCommentContent.appendChild(p);
                var span = document.createElement('span');
                p.appendChild(span);
                span.innerHTML=user;
                var b = document.createElement('b');
                p.appendChild(b);
                b.innerHTML=sendVal;
                sendVal.value ='';
            }
        }
        else{
            var nowComment = ContentChild[2];
            var p = document.createElement('p');
            nowComment.appendChild(p);
            var span = document.createElement('span');
            p.appendChild(span);
            span.innerHTML=user;
            var b = document.createElement('b');
            p.appendChild(b);
            b.innerHTML=sendVal;
        }
    }
    sendVal='';
    sendParent.style.display='none';
}