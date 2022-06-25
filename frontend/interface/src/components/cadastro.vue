<template>
  <div class="cadastrar">
    <b-button id="show-btn" size="lg" @click="showModal">Cadastrar</b-button>

    <b-modal ref="my-modal" hide-footer title="Cadastro">
      <b-form @submit="doCadastro">
        <b-form-group>
          <b-form-input
            id="inputemail"
            size="lg"
            v-model="cadastro.email"
            type="email"
            placeholder="Digite seu E-Mail"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            size="lg"
            id="inputPassword"
            v-model="cadastro.senha"
            type="password"
            placeholder="Digite seu Senha"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-button type="submit" size="lg" variant="primary">Cadastrar</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      cadastro: {
        email: "",
        senha: "",
      },
      carregando: false,
      erroMsg: "",
      erro: false,
    };
  },
  methods: {
    async doCadastro(event) {
      event.preventDefault();
      try {
        this.erro = false;
        this.erroMsg = "";
        this.carregando = true;
        var flag = await axios.post("http://localhost:3000/cadastro", {
          login: {
            email: this.cadastro.email,
            senha: this.cadastro.senha,
          },
        });

        window.localStorage.setItem("access_token", flag.data.Authorization);
        console.log(window.localStorage.getItem("access_token"));
        this.hideModal();
        this.$router.push("/videos/");
      } catch (e) {
        console.log(e);
      }
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
};
</script>
<style>
</style>