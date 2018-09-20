window.onload = function () {
    /*
    * 获取事件源  绑定事件  书写事件驱动程序
    * */
    //获取ul imgList
    var imgList = document.getElementById('imgList');
    //获取所有的img
    var imgArr = document.getElementsByTagName('img');
    //设置ul适应宽 显示图片盒子的宽度 * 图片的个数
    imgList.style.width = 1210 * imgArr.length + 'px';


    /*设置导航按钮*/
    //获取导航栏
    var navDiv = document.getElementById('navDiv');
    //获取outer
    var outer = document.getElementsByClassName('outer')[0];
    //设置导航栏的left值 居中显示 获取父盒子的宽度 - 自身盒子的宽度 总和 / 2
    navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + 'px';

    /*默认显示图片的索引*/
    var index = 0;
    //获取所有的a
    var allA = document.getElementsByTagName('a');
    //a标签绑定图片的索引
    allA[index].style.opacity = '0.5';


    /*点击超链接显示对应的图片*/
    //为所有的超链接绑定响应事件函数
    for (var i = 0; i < allA.length; i++) {
        //为每一个超链接绑定添加属性保存自己的索引标记
        allA[i].num = i;
        allA[i].onclick = function () {
            // 将每个超链接保存的索引值赋值给index
            index = this.num;
            //切换图片
            //第一张图片的偏移量*图片的索引 = 每个图片的偏移量
            imgList.style.left = -1210 * index + 'px';

            /*修改选中的a标签*/
            setA(allA);
        }
    }
    //创建一个方法设置选中的a
    function setA(ele) {
        //遍历所有的a背景设置为
        for (var i = 0; i < ele.length; i++) {
            //排他思想 先让所有的a标签清除样式
            ele[i].style.opacity = '';
        }
        //在让所点击的a标签添加样式
        ele[index].style.opacity = '0.5';
    }
}