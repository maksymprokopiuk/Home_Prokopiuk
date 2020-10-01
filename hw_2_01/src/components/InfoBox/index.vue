<template>
  <div id="container">
    <div id="header">
      <div class="header_block logo"><img :src="logo" alt="logo" /></div>
      <div class="header_block">Рекламна мережа</div>
    </div>
    <img :src="imgSrc" />
    <div>
      <a href="">{{ title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBox",
  props: {
    logo: {
      type: String,
    },
    imgSrc: {
      type: String,
      default:
        "https://lh3.googleusercontent.com/proxy/NRCaCLo705mO-qd3YxKKAC-UhqZZqqdCYL_MjR9lWIXeNgDPeFK_G0AfziGVZPPsG7lesVyZQroOIQhCspGZVpgmPbHdq78Oqm_wk9YXEVET8ydL0VNj9SPKGG3HfGHujwcegNqkdNl5_sOnjmGl4A",
    },
    title: {
      type: String,
      default: "No title",
    },
  },
};
</script>
    
<style scoped>
#container {
  background: #f3f3f3;
  width: 200px;
  height: auto;
}
#header {
  background: #424252;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header_block {
  color: white;
}
.logo {
  width: 70px;
}
img {
  width: 100%;
}
a {
  text-decoration: none;
}
</style>