<template>
  <div id="index">
    <topbar></topbar>
    <div id="fixedbar" :class="{'fix-nav': navBarFixed}">
      <topbar2></topbar2>
      <navbar></navbar>
    </div>
    <router-view />
    <myfooter></myfooter>
  </div>
</template>

<script>
  import topbar from "@/components/topbar";
  import topbar2 from "@/components/topbar2";
  import navbar from "@/components/nav";
  import myfooter from "@/components/footer";


  export default {
    name: "index",
    data() {
      return {
        navBarFixed: false,
      };
    },
    components: {
      topbar,
      topbar2,
      navbar,
      myfooter
    },
    methods: {
      watchScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var offsetTop = document.querySelector("#fixedbar").offsetHeight;
        if (scrollTop > offsetTop) {
          this.navBarFixed = true;
        } else {
          this.navBarFixed = false;
        }
      }
    },
    mounted() {
      // handleScroll为页面滚动的监听回调
      window.addEventListener('scroll', this.watchScroll);
    },
    destroyed() {
      // 移除事件监听
      window.removeEventListener("scroll", this.watchScroll);
    },
  }
</script>

<style>
  
  #fixedbar {
    width: 100%;
    height: 82px;
    margin: auto;
  }

  .fix-nav {
    position: fixed;
    top: 0;
    z-index: 999;
  }
*{
  margin: 0;
  padding: 0;
}
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  p,
  blockquote,
  pre,
  hr,
  figure,
  table,
  caption,
  th,
  td,
  form,
  fieldset,
  legend,
  input,
  button,
  textarea,
  menu {
    margin: 0;
    padding: 0;
  }

  header,
  footer,
  section,
  article,
  aside,
  nav,
  hgroup,
  address,
  figure,
  figcaption,
  menu,
  details {
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption,
  th {
    text-align: left;
    font-weight: normal;
  }

  html,
  body,
  fieldset,
  img,
  iframe,
  abbr {
    border: 0;
  }

  i,
  cite,
  em,
  var,
  address,
  dfn {
    font-style: normal;
  }

  [hidefocus],
  summary {
    outline: 0;
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  small {}

  sup,
  sub {
    font-size: 83%;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: inherit;
  }

  q:before,
  q:after {
    content: none;
  }

  textarea {
    overflow: auto;
    resize: none;
  }

  label,
  summary {
    cursor: default;
  }

  a,
  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  em,
  strong,
  b {
    font-weight: bold;
  }

  del,
  ins,
  u,
  s,
  a,
  a:hover {
    text-decoration: none;
  }

  body,
  textarea,
  input,
  button,
  select,
  keygen,
  legend {
    font: 12px/1.14 arial, \5b8b\4f53;
    color: #333;
    outline: 0;
  }

  body {
    background: #fff;
  }


  a {
    color: #fff;
  }
</style>