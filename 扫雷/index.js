//点击开始游戏主体区动态生成100个小格-100个div；

/*
leftClick 左击的时候如果没有雷就显示数字(代表当前小格为中心周围8个格子有的雷数)
如果当前周围8个格子没有雷会显示0 
就以周围8个格子为中心继续判断是0继续扩散
不是0就显示雷数停止扩散 
以自己为中心周围有雷的情况就停止扩散
如果点击有雷--》游戏结束
*/

/*  
    rightclick 标记 没有数字的情况下 如果有标记就取消标记 没有标记就标记 标记是否正确 雷数-1 10个都正确标记提示成功 标记不正确雷数不减
    有数字的情况 无效果
*/

var startBtn = document.getElementById('btn');
var box = document.getElementById('box');
var flagBox = document.getElementById('flagBox');
var alertBox = document.getElementById('alertBox');
var alertImg = document.getElementsByClassName('alertImg')[0];
var closeBtn = document.getElementById('closeBtn');
var score = document.getElementById('score');
var minesNum;//代表雷的数量
var mineover;//记录当前被标记雷的数量

var block;//100个格子

var mineMap = [];
var startGame = true;

//入口函数
bindEvent();
function bindEvent () {
    //点击开始按钮 box，flagBox 区域显示
    startBtn.onclick = function () {
        if (startGame) {
            box.style.display = 'block';
            flagBox.style.display = 'block';
            //同时生成100个格子
            init();
            startGame = false;
        }
    };
    //box 内 取消鼠标右键默认属性
    box.oncontextmenu =  function () {
        return false;
    };
    //box内 鼠标左击 获取事件委托
    box.onmousedown = function (e) {
        //e.target 获取事件源 获取鼠标点击的div事件源
        var event = e.target;
        //判断鼠标左击还是右击
        if ( e.which === 1 ) {
            //调用左击函数传递源事件
            leftClick(event);
        } else if (e.which === 3) {
            rightClick(event);
        }
    };
    //点击关闭按钮关闭遮罩层
    closeBtn.onclick = function () {
        //同时回到游戏初始状态
        alertBox.style.display = 'none';
        box.style.display = 'none';
        flagBox.style.display = 'none';
        //清空box里的所有元素
        box.innerHTML = '';
        startGame = true;
    }
}

//游戏初始化函数
function init() {
minesNum = 10;//总的雷数
mineover = 10;//被标记的雷数 标记一个减1；
score.innerHTML = mineover;

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            //双for循环生成行10 列10 的100个div
            var con = document.createElement('div');
            //classList 是className 类名的集合 每个小格都具有同样的类名，不同的id
            // block 用来添加样式大小 背景 边框
            con.classList.add('block');
            //为每个div元素添加属性用来记录每个div的位置 第几行第几列；
            con.setAttribute('id', i + '-' + j);
            //将每个div插入到box里面
            box.appendChild(con);
            //当生成一个div的时候 push一个对象到数组里 当作标记
            mineMap.push({
                mine:0
            });
        }
    }
    //获取100个div 类数组 100位；
    block = document.getElementsByClassName('block');
    //while 以雷的总数10当条件循环
    while (minesNum) {
        //取到100以内的随机数 当成雷要生成的位置
        var mineIndex = Math.floor(Math.random()*100);
        // 如果div对应minMap数组的随机数的mine值是0的话进入判断
        if (mineMap[mineIndex].mine === 0) {
            //进入判断的div标记的对象的值变成1 因为是随机很可能重复进入判断防止重复判断
            // 将div对应minMap数组的随机数的mine值变成1，这样生成雷的div就不会重复判断
            mineMap[mineIndex].mine = 1;
            //给生成雷的div在加个类名以标志这是雷
            block[mineIndex].classList.add('isLei');
            //生成一个雷 雷的总数就递减，否则一直循环10个到世界末日
            minesNum --;
        }
    }
}

//鼠标左击函数 接收源事件参数
function leftClick(dom) {
    if (dom.classList.contains('flag')) {
        return;
    }
    //取出是雷的元素
    var isLei = document.getElementsByClassName ('isLei');
    //判断 当前这个dom存在并且类名包含"isLei"的类名
    if (dom && dom.classList.contains('isLei')) {
        //以雷的长度循环
        for (var i = 0; i < isLei.length; i++) {
            //说明左击点到雷 gameover
            //把点击到的雷在添加一个新的类名
            isLei[i].classList.add('show');
        }
        //延迟时间方法
        setTimeout(function () {
            //让遮罩层弹出显示
            alertBox.style.display = 'block';
            //同时改变背景图片为游戏结束后 点击关闭按钮closeBtn
            alertImg.style.backgroundImage = 'url(./img/gameover.jpg)';
        },800)
    } else {
        //做一个判断生成数字插入到变成点击的html内容 以当前的格为中心
        var n = 0;
        // 获取到当前点击事件源的dom的属性id 位置 字符串以'-'拆分为数组
        var posArr = dom && dom.getAttribute('id').split('-');
        //数组的第0位为X轴 第1位 为Y轴
        var posX = posArr && +posArr[0];
        var posY = posArr && +posArr[1];
        //有这个元素并且为这个元素添加类名
        dom && dom.classList.add('num');
        //循环获取周围8个dom的位置
        for (var i = posX - 1; i < posX + 1; i++) {
            for (var j = posY - 1; j < posY + 1; j++) {
                //取得周围8个id位置
                var aroundBox = document.getElementById(i + "-" + j);
                //如果周围8个有雷的情况下
                if (aroundBox && aroundBox.classList.contains('isLei')) {
                    //自身中间的数+1
                    n ++;
                }
            }
        }
        //n代表周围有几个雷 点击之后将n赋值给点击的dom元素
        dom && (dom.innerHTML = n);
        if (n === 0) {
            for (var i = posX - 1; i < posX + 1; i++) {
                for (var j = posY - 1; j < posY + 1; j++) {
                    var nearBox = document.getElementById(i + "-" + j);
                    if (nearBox && nearBox.length !== 0) {
                        if (!nearBox.classList.contains('check')) {
                            nearBox.classList.add('check');
                            leftClick(nearBox);
                        }
                    }
                }
            }
        }
    }
}

function rightClick (dom) {
    if (dom.classList.contains('num')) {
        return;
    }
    //toggle 切换 原声的方法  有这个类名就切换掉 没有这个类名就加上
    dom.classList.toggle('flag');
    if (dom.classList.contains('isLei') && dom.classList.contains('flag')) {
        mineover --;
    }
    if (dom.classList.contains('isLei') && !dom.classList.contains('flag')) {
        mineover ++;
    }
    score.innerHTML = mineover;
    if (mineover === 0) {
        //让遮罩层弹出显示
        alertBox.style.display = 'block';
        //同时改变背景图片为游戏成功后 点击关闭按钮closeBtn
        alertImg.style.backgroundImage = 'url(./img/成功.jpeg)';
    }
}