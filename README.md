# Phone  
####[1]:http://s.codepen.io/zhoupipipipipipi/debug/oLmLEG  
####[2]:http://s.codepen.io/zhoupipipipipipi/debug/QEzrYq  
####[3]:http://s.codepen.io/zhoupipipipipipi/debug/zBrBqw  
####[4]:http://s.codepen.io/zhoupipipipipipi/debug/jAobXZ  
##手机端字体响应式 使用rem或em,不要用px  
###css实现响应式 
```@media only screen and (min-width: 401px){    
    html {  
        font-size: 25px !important;  
    }  
}  
@media only screen and (min-width: 428px){  
    html {  
        font-size: 26.75px !important;  
    }  
}  
@media only screen and (min-width: 481px){  
    html {  
        font-size: 30px !important;  
    }  
}  
@media only screen and (min-width: 569px){  
    html {  
        font-size: 35px !important;  
    }  
}  
@media only screen and (min-width: 641px){  
    html {  
        font-size: 40px !important;  
    }  
}```    
###js实现响应式(但是还没有试过）[链接]:http://www.cnblogs.com/qingmingsang/articles/5463938.html
##手机端触屏事件  
###touchstart：触摸开始的时候触发  
###touchmove：手指在屏幕上滑动的时候触发  
###touchend：触摸结束的时候触发  
###而每个触摸事件都包括了三个触摸列表，每个列表里包含了对应的一系列触摸点（用来实现多点触控）：  
###touches：当前位于屏幕上的所有手指的列表。  
###targetTouches：位于当前DOM元素上手指的列表。  
###changedTouches：涉及当前事件手指的列表  
###每个触摸点由包含了如下触摸信息（常用）：  
##轮播插件TouchSlide.js  
##!import 最高优先级  
##利用flex布局可以让div垂直居中  
##js在当前div元素前 插入一个新的div元素  parent.insertBefore(next,prev)  
##children和childnodes差异  
###childnodes返回的是指定元素的子元素集合，包括html节点，所有属性，文本。空格也算文本  
###children 返回的是html元素  
###firstChild lastChild nextSibing prevSibing返回的是指定元素的子元素集合，包括html节点，所有属性，文本。空格也算文本  
####http://snandy.iteye.com/blog/547369  
##js点击其他地方消失  
`$('html').click(function(e){
    //使用e.target 判断事件源 是否在 dropDown或者list上 来处理是否隐藏
    if($(e.target)[0].alt!='other'){
        $('ul').hide();
    }
});`  
##英文字母之间如果没有空格,系统认为这是一个单词,就不会自动换行.汉字就没有这种情况.
###在<td>中加入
###style="word-wrap:break-word;word-break:break-all;"
###或
###style="word-wrap:break-word;overflow:hidden;"
##js 实时监听输入框值变化的完美方案：oninput & onpropertychange event.target.value
