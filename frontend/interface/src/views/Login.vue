<template>
  <div class="telaLogin">
    <p class="titulo">Sistemas Multimidia</p>
    <b-form @submit="doLogin" class="login">
      <b-form-group>
        <b-form-input
          id="inputemail"
          size="lg"
          v-model="login.email"
          type="email"
          placeholder="Digite seu E-Mail"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="inputPassword"
          size="lg"
          v-model="login.senha"
          type="password"
          placeholder="Digite seu Senha"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-button type="submit" size="lg" variant="primary">Entrar</b-button>
    </b-form>
    <div>
      <br />
      <cadastro />
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import cadastro from "../components/cadastro.vue";
export default {
  name: "Login",
  components: { cadastro },
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
      carregando: false,
      erroMsg: "",
      erro: false,
    };
  },
  methods: {
    async doLogin(event) {
      event.preventDefault();
      try {
        this.erro = false;
        this.erroMsg = "";
        this.carregando = true;
        var flag = await axios.post("http://localhost:3000/login", {
          login: {
            email: this.login.email,
            senha: this.login.senha,
          },
        });
        console.log(flag);
        window.localStorage.setItem("access_token", flag.data.Authorization);
        console.log(window.localStorage.getItem("access_token"));
        this.$router.push("/videos/");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.telaLogin {
  width: 100%;
  height: 100%;
}
.titulo {
  font-size: 50px;
  padding-top: 5%;
}
.login {
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.375rem 0.75rem;
}
</style>