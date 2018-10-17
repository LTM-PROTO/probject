<template>
  <div id="Header">
    <div class="header_box">
      <a href="#" class="logo">知乎</a>
      <div class="header_search">
        <input type="text" value="搜索你感兴趣的内容...">
        <button>
          <span class="icon"></span>
          <span></span>
        </button>
      </div>
      <div class="header_nav">
        <ul>
          <li>
            <a href="#">首页</a>
          </li>
          <li>
            <a href="#">话题</a>
          </li>
          <li>
            <a href="#">发现</a>
          </li>
          <li>
            <a href="#">消息</a>
          </li>
        </ul>
      </div>
      <div class="header_nav_why"><a href="#">提问</a></div>
      <div class="header_user">
        <img src="../assets/user.jpg" alt="">
        <span>天地一笼统</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  #Header {
    width: 100%;
    display: flex;
    background: linear-gradient(to bottom, #086ed5, #055db5);
  }

  .header_box {
    display: flex;
    flex-direction: row;
    width: 960px;
    height: 45px;
    margin: 0 auto;
    border-bottom: 1px solid #045bb2;
    align-items: center;
  }

  .header_box .logo {
    width: 8%;
    height: 100%;
    background: url('../assets/logo.png') no-repeat 0 8px;
    color: #fff;
    text-indent: -999px;
  }

  .header_box .header_search {
    position: relative;
    float: left;
    margin: 2px 0 0 12px;
    width: 367px;
  }

  .header_search input {
    padding: 7px 50px 7px 10px;
    width: 100%;
    color: #49525c;
    font-size: 14px;
    line-height: 17px;
    background-color: #e1eaf2;
    border: 1px solid #045bb2;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.2),0 1px 0 rgba(255,255,255,.1);
    outline: 0;
    box-sizing: border-box;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;

  }

  .header_search button {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    background: #0e78e7;
    background: -webkit-linear-gradient(top,#0e7bef,#0d73da);
    background: linear-gradient(to bottom,#0e7bef,#0d73da);
    border: 1px solid #045bb2;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 1px 2px rgba(0,0,0,.05),inset 0 1px 1px rgba(255,255,255,.15);
    box-sizing: border-box;
    outline: 0;
    cursor: pointer;

  }
  .header_search button span{
    font-size: 12px;
    color: #fff;
  }
  .header_search button .icon {
    position: absolute;
    text-indent: -999px;
    top: 10px;
    left: 10px;
    width: 15px;
    height: 15px;
    background: url("../assets/searchicon.png") no-repeat -82px 0;
  }


  .header_nav {
    display: flex;
    flex-direction: row;
    width: 30%;
  }

  .header_nav ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    list-style-type: none;
    width: 100%;
  }

  .header_nav ul li {
    display: flex;
    justify-content: center;
    width: 20.5%;
    text-align: center;
  }

  .header_nav li a {
    display: flex;
    align-items: center;

    color: #f2f4f5;
    font-size: 14px;
    text-decoration: none;
    text-align: center;
  }

  .header_nav_why {
    display: flex;
    width: 5%;
    height: 33px;
    position: absolute;
    right: 370px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .05), inset 0 1px 1px rgba(255, 255, 255, .15);
    border: 1px solid #045bb2;
    border-radius: 4px;
    background: linear-gradient(to bottom, #0e7bef, #0d73da);
    box-sizing: border-box;
  }

  .header_nav_why a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }

  .header_user {
    width: 25%;
    display: flex;
    justify-content: flex-end;
    margin-left: 10%;
  }

  .header_user img {
    width: 27px;
    height: 27px;
    display: flex;
    border: 1px solid #045bb2;
    border-radius: 4px;

  }

  .header_user span {
    margin-left: 5px;
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
  }

</style>
