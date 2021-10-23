<template>
  <div class="app" id="app">
    <div class="container mx-auto">
      <div class="header-container">
        <p class="header gradient-text">⚔️ Metaverse Slayer ⚔️</p>
        <p class="sub-text">Team up to protect the Metaverse!</p>
        <div class="connect-wallet-container" v-if="!account">
          <img
            src="https://64.media.tumblr.com/tumblr_mbia5vdmRd1r1mkubo1_500.gifv"
            alt="Monty Python Gif"
          />
          <button class="cta-button connect-wallet-button" @click="connect">
            Connect Wallet To Get Started
          </button>
        </div>
        <select-character v-else-if="account && !characterNFT" />
        <arena v-else-if="account && characterNFT" />
      </div>
      <div class="footer-container">
        <img
          alt="Twitter Logo"
          class="twitter-logo"
          src="./assets/twitter-logo.svg"
        />
        <a
          class="footer-text"
          :href="twitter_link"
          target="_blank"
          rel="noreferrer"
          >built with @{{ twitter_handle }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import SelectCharacter from "./components/SelectCharacter.vue";
import Arena from "./components/Arena.vue";
export default {
  name: "App",
  data() {
    return {
      twitter_handle: "zouln96",
      twitter_link: "https://twitter.com/zouln96",
    };
  },
  methods: {
    async connect() {
      await this.$store.dispatch("connect", 1);
    },
  },
  async mounted() {
    await this.$store.dispatch("connect");
  },
  computed: {
    account() {
      return this.$store.getters.account;
    },
    mining() {
      return this.$store.getters.mining;
    },
    characterNFT() {
      return this.$store.getters.characterNFT;
    },
  },
  components: {
    SelectCharacter,
    Arena,
  },
};
</script>

<style>
.app {
  height: 100vh;
  background-color: #0d1116;
  overflow: scroll;
  text-align: center;
}

.container {
  height: 100%;
  background-color: #0d1116;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header-container {
  padding-top: 30px;
}

.header {
  margin: 0;
  font-size: 50px;
  font-weight: bold;
  color: white;
}

.sub-text {
  font-size: 25px;
  color: white;
}

.content-container {
  background-color: #a200d6;
}

.cta-button {
  height: 45px;
  border: 0;
  width: auto;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.connect-wallet-container {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 550px;
}

.connect-wallet-container img {
  padding-bottom: 20px;
}

.connect-wallet-button {
  background-image: linear-gradient(
    to right,
    #ff8177 0%,
    #ff867a 0%,
    #ff8c7f 21%,
    #f99185 52%,
    #cf556c 78%,
    #b12a5b 100%
  );
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
}

.mint-button {
  background: -webkit-linear-gradient(left, #a200d6, #ff6fdf);
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
  margin-right: 15px;
}

.opensea-button {
  background-color: rgb(32, 129, 226);
}

.mint-count {
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}

.twitter-logo {
  width: 35px;
  height: 35px;
}

.footer-text {
  color: white;
  font-size: 16px;
  font-weight: bold;
}

/* KeyFrames */
@-webkit-keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
