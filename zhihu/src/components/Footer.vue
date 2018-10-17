<template>
  <div id="Footer">
    <div class="footer_wpr">
      <ul>
        <li
          v-for="(item, index) in footers"
          :key="index"
        >
          <a href="#">{{item}}</a>
        </li>
      </ul>
      <span>© 2018 知乎</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        footers: ['刘看山', '知乎指南', '建议反馈', '移动应用', '加入知乎', '知乎协议', '举报投诉', '隐私政策', '联系我们']
      }
    }
  }
</script>

<style scoped>
  #Footer {
    width: 100%;
    height: 63px;
    display: flex;
    flex-direction: row;

  }

  .footer_wpr {
    margin: 0 auto;
    border-top: 1px solid #333;
    width: 960px;
    padding: 20px 15px;
    text-align: right;
  }

  .footer_wpr ul {
    display: inline;

  }

  .footer_wpr li {
    display: inline;
    margin: 0 5px;
  }

  .footer_wpr li a {
    color: #999;
    font-size: 13px;
    text-decoration: none;
  }
  .footer_wpr span {
    float: left;
    color: #999;
    font-size: 14px;
  }
</style>
