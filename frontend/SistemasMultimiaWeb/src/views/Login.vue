<template>
  <div>
    <div>
      <h1>Login</h1>
      <div>
        {{ this.MsgoErro }}
      </div>
      <div>
        <label for="usuario">Usuario: </label>
        <div>
          <input type="text" v-model="login" id="usuario" />
        </div>
      </div>
      <div>
        <label for="senha">Senha: </label>
        <div>
          <input type="password" v-model="senha" id="senha" />
        </div>
        <Password v-model="value3" toggleMask></Password>
      </div>
      <div>
        <input type="submit" @click="doLogin" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "primevue/resources/themes/vela-green/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Password from "primevue/password";

export default {
  name: "Login",
  metaInfo: {
    title: "Entrar ",
  },
  data() {
    return {
      login: "",
      senha: "",
      MsgoErro: "",
      ip: "",
      porta: "",
    };
  },
  components: { Password },
  methods: {
    async doLogin() {
      console.log("aa");
      try {
        this.MsgoErro = "";

        await axios.post(`${ip}:${porta}/login`, { login, senha });
        this.$session.set("connectedBy", `${login}`);
        this.$router.push("/videos/");
      } catch (e) {
        console.log(e);
        this.MsgoErro = e;
      }
    },
  },
};
</script>

<style>
</style>