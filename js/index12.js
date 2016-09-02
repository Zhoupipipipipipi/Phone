/**
 * Created by Administrator on 2016/8/30 0030.
 */
var car = false;   //判断是加入购物车还是立即购买
var tagColor = $('.column-tag');
//判断购物车有没有物品
var carNum = $('#carNum').html();
if(carNum==0){
    $('#carNum').hide();
}
var evaluate = $('#evaluate-container ul li p');
for(var i=0;i<evaluate.length;i++){;
    if(evaluate[i].innerHTML.length>36){
        var newEvaluate = evaluate[i].innerHTML.substr(0,35);
        evaluate[i].innerHTML=newEvaluate+'...';
    }
}

/*滚动显示header 监听事件*/
$(window).scroll(function(event){
    var headerHeight = $('#header').height();
    var center = headerHeight/2;
    var nav =$('.nav');
    if($(document).scrollTop()==0){
        nav.css('opacity','0');
        nav.css('display','none');
    }
    else if($(document).scrollTop()>headerHeight){
        nav.css('opacity','1');
        nav.css('display','block');
    }
    else if(center<$(document).scrollTop()<headerHeight){
        nav.css('opacity','0.5');
        nav.css('display','block');
    }
    if($(document).scrollTop()+$(window).height()-$('footer').height()/2>$(document.body).height()){
        $('#content').show();
    }
});


//给热销和新品加背景色
for(var i =0;i<tagColor.length;i++){
    tagColor[i].className = tagColor[i].innerHTML=='热销'?'column-tag column-tag-hot':'column-tag column-tag-new'
}

/*按键*/
$('html').click(function(e){
    var shareImg = $('#shareImg');
    var navImg = $('#navImg');
    var promote =$('#promote');
    if(e.target!=shareImg[0]&& e.target!=navImg[0]){
        $('#share').hide();
    }
});

/**分享显示**/
function showShare(){
    $('#share').show();
}

/*收藏*/
function collect(obj){
    var img = obj.children[0];
    img.src=img.alt!='1'?'image/detailsCollect.png':'image/lagouredHeart.jpg';
    img.alt=img.alt=='1'?'2':'1';
}

/*加入购物车*/
function addCar(){
    car=true;
    $('#carNum').show();
    $('#choose').slideDown();
}

/*显示隐藏促销内容*/
function showPromote(){
    $('#promote').slideDown();
}
function closeTab(){
    $('#promote').hide();
    $('#description').hide();
    $('#buy').hide();
}

/*显示遗产商品说明*/
function showDescription(){
    $('#description').slideDown();
}

/*立即购买内容*/
function showChoose(){
    car=false;
    $('#choose').slideDown();
}
function showBuy(){
    if(car){
        var num = document.getElementById('carNum');
        num.innerHTML=(parseInt(num.innerHTML)+1);
        $('#choose').slideUp();
        $('#tip').fadeIn().html('加入购物车成功！');
        setTimeout(function(){
            $('#tip').fadeOut();
        },1000);
    }
    else{
        $('#choose').slideUp();
        $('#buy').slideDown();
    }
}

/*数量加减**/
function reduceNum(){
    var num =parseInt($('#num').val());
    if(num>1){
        num--;
        $('#num').val(num);
    }
}
function addNum(){
    var num =parseInt($('#num').val());
    num++;
    $('#num').val(num);
}
/**选择规格*/
function chooseGoods(obj){
    var li = $('#colorStyle li');
    for(var i=0;i<li.length;i++){
        if(li[i].className.indexOf('choose-yes')>=0){
            li[i].className='choose-exist';
        }
        if(li[i].className.indexOf('choose-no')>=0){
            li[i].className='choose-no-exist';
        }
    }
    var styleName =obj.className;
    if(styleName.indexOf('choose-exist')>=0){
        obj.className='choose-exist choose-yes';
        $('#btnGoods').removeClass('btn-no-goods').html('确认');
    }
    else{
        obj.className='choose-exist choose-no';
        $('#btnGoods').addClass('btn-no-goods').html('到货通知');
    }
    $('#colorType').html('已选:'+obj.innerHTML);
}
function sureChoose(obj){
    if(obj.innerHTML=='确认'&&$('#colorType').html()!='请选择颜色'){
        var selected = $('#colorType').html().substr(3);
        console.log(selected);
        $('#selected').html(selected);
        showBuy();
    }
    else if($('#colorType').html()=='请选择颜色'){
        $('#tip').fadeIn().html('请选择颜色');
        setTimeout(function(){
            $('#tip').fadeOut();
        },1000);
    }
}

/*选择评价*/
function chooseEvaluate(obj){
    var li = $('#submenu-evaluate-choose li');
    for(var i=0;i<li.length;i++){
        li[i].className='';
    }
    obj.className='submenu-choose';
    var item = $('.submenu-item');
    if(obj.innerHTML.indexOf('全部')>=0){
        item.show();
    }
    else if(obj.innerHTML.indexOf('有图')>=0){
        item.hide();
        var showItem = $('.submenu-item .submenu-evaluate-pic').parent();
        showItem.css('display','block');
    }
    else if(obj.innerHTML.indexOf('有追评')>=0){
        item.hide();
        var showItem = $('.submenu-item .submenu-chase').parent();
        showItem.css('display','block');
    }
}

/*点赞*/
function zan(obj){
    var content = obj.children[1];
    var img = obj.children[0];
    if(img.alt=='false'){
        if(content.innerHTML=='赞'){
            content.innerHTML='1';
        }
        else{
            content.innerHTML=parseInt(content.innerHTML)+1;
        }
        img.alt='true';
        img.src='image/lagouzanRed.png';
    }
    else{
        if(content.innerHTML=='1'){
            content.innerHTML='赞';
        }
        else{
            content.innerHTML=parseInt(content.innerHTML)-1;
        }
        img.alt='false';
        img.src='image/lagouzan.png';
    }
}

/*显示评价内容*/
function showSubmenu(){
    $('body').animate({
        scrollTop:0
    },200);
    $('#submenu').slideDown();
}
function hidSubmenu(){
    $('#submenu').hide();
}
/*图文切换*/
function changePic(obj){
    var li = $('#picAndQue li');
    for(var i = 0;i<li.length;i++){
        li[i].className='';
    }
    obj.className='content-choose';
    $('.content-picture').show();
    $('.content-question').hide();
}
function changeQuestion(obj){
    var li = $('#picAndQue li');
    for(var i = 0;i<li.length;i++){
        li[i].className='';
    }
    obj.className='content-choose';
    $('.content-picture').hide();
    $('.content-question').show();
}

/*显示图文详情*/
function showContent(){
    $('#content').show();
}

/*地址选择*/
var json =[{
    "id": "2",
    "name": "\u5317\u4eac\u5e02",
    "child": [{
        "id": "2288",
        "name": "\u4e1c\u57ce\u533a"
    }, {
        "id": "2301",
        "name": "\u5927\u5174\u533a"
    }, {
        "id": "2300",
        "name": "\u660c\u5e73\u533a"
    }]
}];

var selectArea2 = new MobileSelectArea();
selectArea2.init({trigger:'#txt_area2',value:$('#txt-area2').data('value'),data:json,eventName:'click'});
