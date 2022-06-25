<template>
  <div>
    <p class="titulo">Titulos Disponivels</p>
    <div class="videos">
      <div class="tumbs">
        <b-card
          img-src="../../assets/images/Awaken.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 ml-2 mt-2 mr-2"
        >
          <b-card-text> Awaken </b-card-text>

          <router-link :to="'/videos/Awaken'"
            ><b-button variant="primary">Assistir</b-button></router-link
          >
        </b-card>
        <b-card
          img-src="../../assets/images/BattleAzeroth.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 ml-2 mt-2 mr-2"
        >
          <b-card-text> BattleAzeroth </b-card-text>

          <router-link :to="'/videos/BattleAzeroth'"
            ><b-button variant="primary">Assistir</b-button></router-link
          >
        </b-card>
        <b-card
          img-src="../../assets/images/Dragonflight.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 ml-2 mt-2 mr-2"
        >
          <b-card-text> Dragonflight </b-card-text>

          <router-link :to="'/videos/Dragonflight'"
            ><b-button variant="primary">Assistir</b-button></router-link
          >
        </b-card>
        <b-card
          img-src="../../assets/images/Dragons_.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 ml-2 mt-2 mr-2"
        >
          <b-card-text> Dragons_ </b-card-text>

          <router-link :to="'/videos/Dragons_'"
            ><b-button variant="primary">Assistir</b-button></router-link
          >
        </b-card>
        <b-card
          img-src="../../assets/images/thecall.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 ml-2 mt-2 mr-2"
        >
          <b-card-text> Sthecall </b-card-text>

          <router-link :to="'/videos/thecall'"
            ><b-button variant="primary">Assistir</b-button></router-link
          >
        </b-card>
        <b-card
          img-src="../../assets/images/Wastelander.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 ml-2 mt-2 mr-2"
        >
          <b-card-text> Wastelander </b-card-text>
          <video-player></video-player>
          <router-link :to="'/videos/Wastelander'"
            ><b-button variant="primary">Assistir</b-button></router-link
          >
        </b-card>
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