/*
*
* */
window.onload = function () {
    /*ul宽*/
    var slideImg = document.getElementsByClassName('slide-img')[0];
    var imgArr = document.getElementsByTagName('img');
    slideImg.style.width = 1190 * imgArr.length + 'px';

    /*a居中*/
    var nav = document.getElementsByClassName('nav')[0];
    var slide = document.getElementsByClassName('slide')[0];
    nav.style.left = (slide.offsetWidth - nav.offsetWidth) / 2 + 'px';

    /*a绑定事件*/
    var aArr = document.getElementsByTagName('a');
    var index = 0;
    aArr[0].style.opacity = '0.5';
    for (var i = 0; i < aArr.length; i++) {
        // index = i;
        (function (x) {
            aArr[x].onmouseover = function () {
                slideImg.style.left = -1190 * x + 'px';
                for (var i = 0; i < aArr.length; i++) {
                    aArr[i].style.opacity = '';
                }
                this.style.opacity = '0.5'
            }
        })(i);
    }

    //自动切换图片
    function autoChange() {
        //定时器
        setImmediate(
            function () {
                index ++

            }, 3000)
    }

};