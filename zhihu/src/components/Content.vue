<template>
  <div id="Content">
    <div class="cont">
      <div class="content_left">
        <div class="left_title">
          <div class="title_left">
            <i class="icon"></i>
            <span>已关注的话题动态</span>
          </div>
          <div class="title_right">
            <a href="#">
              共关注
              <span>41</span>
              个话题
            </a>

          </div>
        </div>
        <div class="left_nav">
          <ul>
            <li
              v-for="(tab,index) in tabs" :key="index"
              @mouseover="changeColor(index)"
              @mouseout="removeClass(index)"
            >
              <a
                :class="{bgColor:show&&index===current}"
                href="#">{{tab}}
              </a>
            </li>
          </ul>
        </div>
        <left_cont></left_cont>
        <a href="#">加载中...</a>
      </div>
      <div class="content_right">
        <div class="right_cont">
          <div class="topic">
            <a class="topic_a" href="#">进入话题广场</a>
            <a class="topic_b" href="#">来这个发现更多有趣话题</a>
          </div>
          <right_cont></right_cont>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import left_cont from './Left_cont'
  import right_cont from './Right_cont'

  export default {
    name: "Content",
    data() {
      return {
        tabs: [
          'iPhone',
          '电影',
          '音乐',
          '互联网',
          '时间管理',
          '游戏',
          '心理学',
          '设计',
          '苹果公司(Apple Inc.)',
          '跳槽',
          '数据库',
          '程序员',
          '拖延现象',
          'Ruby',
          '单机游戏',
          '职业发展',
          '手机游戏',
          '交互设计',
          '情绪',
          '互联网创业',
          '职场',
          '黑客(Hacker)',
          '数据分析',
          '机器学习',
          '经济学',
          '简历',
          '人际交往',
          '.NET',
          '心理健康',
          '前端工程师',
          'Nginx',
          'ASP.NET',
          '计算机科学',
          '中等专业学校（中专）',
          'Backbone.js',
          '日常行为分析',
          '大数据',
          '深度学习（Deep',
          'Learning）',
          'AngularJS',
          'React',
          'Vue.js',
        ],
        show: false
      }
    },
    components: {
      left_cont,
      right_cont
    },
    methods: {
      changeColor(index) {
        this.show = true
        this.current = index
      },
      removeClass(index) {
        this.show = false
        this.current = index
      }
    }
  }
</script>

<style scoped>
  #Content {
    width: 960px;
    margin: 25px auto 50px auto;
  }

  .cont {
    display: flex;
    flex-direction: row;

    width: 100%;
  }

  .content_left {
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-grow: 2;
  }

  .left_title {
    width: 100%;
    display: flex;
    height: 33px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 8px;

  }

  .title_left {
    font-size: 14px;
    font-weight: 700;
    color: #666;
  }

  .title_left i {
    width: 16px;
    height: 16px;
    vertical-align: -4px;
    margin-right: 5px;
    display: inline-block;
    background: url("../assets/icon.png") no-repeat -71px -88px;
  }

  .title_right a {
    padding: 0 10px;
    color: #999;
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
  }

  .left_nav ul {
    padding: 0 8px;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-wrap: wrap;
  }

  .left_nav ul li {
    display: flex;
    margin: 0 10px 15px 0;
    list-style: none;
  }

  .left_nav ul li a {
    padding: 0 10px;
    border-radius: 30px;
    text-decoration: none;
    border: 1px solid #daecf5;
    font-size: 14px;
    color: #222;
  }

  .content_right {
    display: flex;
    width: 30%;
  }

  .left_nav ul li .bgColor {
    background: #259;
    border-color: #259;
    color: #fff;
  }

  .content_left > a {
    display: block;
    border: 1px solid #ccc;
    border-radius: 3px;
    background: #ddd;
    margin: 20px 0;
    padding: 7px;
    font-size: 13px;
    text-align: center;
    text-decoration: none;
    color: #666;
  }
  .right_cont{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    position: relative;
    width: 270px;
  }
  .right_cont .topic {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 34px 0;
    border: 1px solid #cce1ef;
    border-radius: 4px;
    background: #eff6fA;
    text-align: center;
  }

  .topic .topic_a {
    color: #fff !important;
    background: linear-gradient(to bottom,#1d7fe2,#0865c2);
    border: 1px solid #0D6EB8;
    box-shadow: 0 1px 0 rgba(255,255,255,.2) inset,0 1px 0 rgba(0,0,0,.2);
    font-size: 14px;
    line-height: 1.7;
    text-decoration: none !important;
    padding: 4px 5px;
    border-radius: 3px;
    box-sizing: border-box;
    margin: 0 80px;
  }
  .topic .topic_b{
    display: block;
    margin-top: 20px;
    font-size: 13px;
    color: #5488b4;
    text-decoration: none;
  }

</style>
