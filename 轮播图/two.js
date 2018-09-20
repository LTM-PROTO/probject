/**
 * 轮播图
 */
/*设置ul适应宽*/
var slideW = document.getElementById('slide-img');
var imgArr = document.getElementsByTagName('img');
slideW.style.width = 1190 * imgArr.length + 'px';
/*设置导航居中*/
var nav = document.getElementsByClassName('nav')[0];
var slide = document.getElementsByClassName('slide')[0];
nav.style.left = (slide.offsetWidth - nav.offsetWidth) / 2 + 'px';

/*设置导航栏绑定图片*/
var allA = document.getElementsByTagName('a');
var index = 0;
//第一个a标签设置样式
allA[index].style.opacity = '0.5';

for (var i = 0; i < allA.length; i++) {
    //所有的a标签绑定属性赋索引值
    allA[i].num = i;
    //添加事件
    allA[i].onclick = function () {
        //将现点击的a标签的索引值传给index
       index = this.num;
       //切换图片 有规律 图片的偏移量 * 索引值 = 第几个图片的偏移量
        slideW.style.left = -1190 * index + 'px';
        //没点击一次调用一次a标签方法
        setA();
    };
    function setA() {
        //排他思想 循环所有的a标签  清空样式
        for (var i = 0; i < allA.length; i++) {
            allA[i].style.opacity = '';
        }
        //给点击的a标签添加样式
        allA[index].style.opacity = '0.5';
    }
}


