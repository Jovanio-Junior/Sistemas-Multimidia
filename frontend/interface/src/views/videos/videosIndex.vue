<template>
  <div>
    <p class="titulo">Titulos Disponivels</p>
    <div class="videos">
      <div class="tumbs">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="http://45.191.205.222:3000/filmes/Awaken"
          allowfullscreen
        ></b-embed>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="http://45.191.205.222:3000/filmes/BattleAzeroth"
          allowfullscreen
        ></b-embed>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="http://45.191.205.222:3000/filmes/Dragonflight"
          allowfullscreen
        ></b-embed>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="http://45.191.205.222:3000/filmes/Dragons_"
          allowfullscreen
        ></b-embed>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="http://45.191.205.222:3000/filmes/thecall"
          allowfullscreen
        ></b-embed>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="http://45.191.205.222:3000/filmes/Wastelander"
          allowfullscreen
        ></b-embed>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Embed from "v-video-embed";
import videoplayer from "../../components/videosPlayer.vue";
export default {
  name: "videos",
  components: { videoplayer },
  data() {
    return {};
  },
};
</script>

<style>
.tumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.titulo {
  font-size: 40px;
  margin-bottom: 5%;
}
</style>