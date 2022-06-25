<template>
  <div>
    <p>Titulos Disponivels</p>
    <div class="videos">
      <div v-for="(video, key) in videos" :key="key">
        <b-card
          title="Card Title"
          img-src="`${video}`"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Embed from "v-video-embed";
export default {
  name: "videos",
  components: {},
  data() {
    return {
      videos: [
        "Awaken.jpg",
        "BattleAzeroth.jpg",
        "Dragonflight.jpg",
        "Dragons_.jpg",
        "thecall.jpg",
        "Wastelander.jpg",
      ],
    };
  },
  methods: {
    linkIMG(video) {
      return;
    },
  },
};
</script>

<style>
</style>