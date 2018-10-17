<template>
  <div id="Content_cont">
    <div class="left-con">
      <div class="con_sorting">
        <div class="sorting_left">
          <a class="left">
            <img src="../assets/sorting.jpg" alt="">
          </a>
          <span><a href="#">iPhone</a></span>
        </div>
        <div class="sorting_right">
          <span>热门排序</span>
          <span>|</span>
          <span><a href="#">时间排序</a></span>
        </div>
      </div>
      <div class="con_cont">
        <h2><a href="#">iPhone XR 否值得购买?</a></h2>
        <div class="cont_main">
          <a href="#">20</a>
          <div class="user_main">
            <div class="user_cont">
              <span class="cont_user"><a href="#">Joker</a></span>
              <p>
                我感觉这次喷苹果的这块屏幕和几年前喷苹果的800万像素摄像头是一回事，那时候国内的媒体动不动就是：某某手机都做到4000万像素了，苹果要完。大多数媒体的一个通病就是只会抓着最容易量化最容易进行比较的指标不放，也就是那些简单粗暴的数值，比如摄像头…
              </p>
              <a href="#">显示全部</a>
              <div class="cont_footer">
                <a href="#">
                  <i></i>
                  关注问题
                </a>
                <a href="#">
                  <i></i>
                  9条评论
                </a>
                <a href="#">
                  <i></i>
                  感谢
                </a>
                <a href="#">
                  <i></i>
                  分享
                </a>
                <a href="#">
                  <i></i>
                  收藏
                </a>
                <a href="#">
                  <i></i>
                  没有帮助
                </a>
                <a href="#">
                  <i></i>
                  举报
                </a>
                <a href="#">
                  <i></i>
                  作者保留权利
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="con_cont">
        <h2><a href="#">iPhone XR 否值得购买?</a></h2>
        <div class="cont_main">
          <a href="#">20</a>
          <div class="user_main">
            <div class="user_cont">
              <span class="cont_user"><a href="#">Joker</a></span>
              <p>
                我感觉这次喷苹果的这块屏幕和几年前喷苹果的800万像素摄像头是一回事，那时候国内的媒体动不动就是：某某手机都做到4000万像素了，苹果要完。大多数媒体的一个通病就是只会抓着最容易量化最容易进行比较的指标不放，也就是那些简单粗暴的数值，比如摄像头…
              </p>
              <a href="#">显示全部</a>
              <div class="cont_footer">
                <a href="#">
                  <i></i>
                  关注问题
                </a>
                <a href="#">
                  <i></i>
                  9条评论
                </a>
                <a href="#">
                  <i></i>
                  感谢
                </a>
                <a href="#">
                  <i></i>
                  分享
                </a>
                <a href="#">
                  <i></i>
                  收藏
                </a>
                <a href="#">
                  <i></i>
                  没有帮助
                </a>
                <a href="#">
                  <i></i>
                  举报
                </a>
                <a href="#">
                  <i></i>
                  作者保留权利
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Content_cont",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  #Content_cont {

  }

  .con_sorting {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    line-height: 40px;
    margin-bottom: 16px;
  }

  .sorting_left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .sorting_left a img {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }

  .sorting_left span a {
    color: #555;
    font-weight: 900;
    font-size: 14px;
    text-decoration: none;
  }

  .sorting_right {
    padding: 0 0 15px;
  }

  .sorting_right span {
    color: #999;
    font-size: 12px;
  }

  .con_cont h2 a {
    text-decoration: none;
    color: #259;
    font-weight: 700;
    font-size: 14px;
  }

  .cont_main {
    display: flex;
    /*flex-direction: row;*/
  }

  .cont_main > a {
    display: block;
    color: #698ebf;
    padding:0 10px;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    width: 38px;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    background: #eff6fa;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    -webkit-text-size-adjust: none;
  }

  .user_cont {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    position: relative;
  }

  .cont_user a {
    color: #222;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;

  }
  .user_cont p {
    color: #222;
    font-size: 13px;
    line-height: 1.7;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  .user_cont>a {
    text-decoration: none;
    font-size: 13px;
    display: inline-block;
    padding: 0 3px;
    border-radius: 2px;
    position: absolute;
    right: 240px;
    bottom: 35px;
  }
  .cont_footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
  }
  .cont_footer a {
    color: #666;
    text-decoration: none;
    margin: 0 5px;
  }
  .cont_footer a i {
    display: inline-block;
    *margin-right: .3em;
    line-height: 10px;
    vertical-align: 0;
    background: url(../assets/icon.png) no-repeat -97px -23px;
    margin-right: 5px;
    width: 8px;
    height: 9px;
  }
</style>
