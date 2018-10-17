<template>
  <div id="Right_cont">
    <div class="opa_cont">
      <div class="opa_title">
        <span>其他人关注话题</span>
        <span><a href="#">换一换</a></span>
      </div>
      <div class="opa_item">
        <ul>
          <li v-for="(item,index) in items" :key="index">
            <div class="li_left">
              <img :src='item.src' alt=""/>
              <a href="#">{{item.name}}</a>
            </div>
            <div class="li_right">
              <i></i>
              <a href="#">关注</a></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import touzi from '../assets/touzi.jpg'
  import huaxue from '../assets/huaxie.jpg'
  import ziran from '../assets/ziran.jpg'
  import outdoorS from '../assets/huwai.jpg'
  import atp from '../assets/shenji.jpg'
  import football from '../assets/zuqiu.jpg'
  export default {
    name: "Right_cont",
    data() {
      return {
        items:[
          {
            src:touzi,
            name:'投资',
          },
          {
            src:huaxue,
            name:'化学',
          },
          {
            src:ziran,
            name:'自然科学',
          },
          {
            src:outdoorS,
            name:'户外运动',
          },
          {
            src:atp,
            name:'审计',
          },
          {
            src:football,
            name:'足球',
          },
        ]
      }
    }
  }
</script>

<style scoped>
  #Right_cont {

  }
  .opa_cont {
    border-top: 1px solid #ccc;
  }
  .opa_title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
  }
  .opa_title span {
    color: #666;
    font-weight: 700;
    font-size: 14px;
  }
  .opa_title span a {
    color: #698ebf;
    font-weight: 400;
    text-decoration: none;
  }

  .opa_item ul {
    list-style-type: none;
    position: relative;
  }
  .opa_item ul li{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin:0 0 10px -40px;

  }
  .opa_item ul li .li_left{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .opa_item ul li .li_left img {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    background-color: #eee;
  }
  .opa_item ul li .li_left a{
    color: #259;
    font-size: 14px;
    font-weight: 700;
    margin-left: 15px;
    text-decoration: none;
  }
  .opa_item ul li .li_right{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .opa_item ul li .li_right i {
    display: block;
    background: url("../assets/icon.png") no-repeat -97px -23px;
    width: 8px;
    height: 9px;
    margin-right: 5px;
  }
  .opa_item ul li .li_right a {
    text-decoration: none;
    color: #698ebf;
    font-size: 13px;
  }
</style>
