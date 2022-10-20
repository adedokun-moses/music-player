<template>
  <div class="container">
    <div class="mobile">
      <i class="fa fa-bars fa-2x" @click="toggle()"></i>
      <img src="../assets/logo.svg" style="margin-left: 10px" />
      <input type="text" placeholder="Search" />
      <i class="fa fa-search fa-2x"></i>
    </div>
    <transition name="translateX">
      <div class="music_nav" v-if="navbar == true">
        <ul class="m-0 mt-1">
          <router-link to="/" @click="toggle()">
            <li >
              <i class="fas fa-home fa-2x mr-4" style="color: #facd66"></i>
              Home <i class="fa fa-times fa-3x out" style="float: right; color: red" ></i>
            </li></router-link
          >
          <li @click="toggle()"><i class="fa fa-record-vinyl fa-2x mr-4"></i> My Collection</li>
          <router-link to="/collection" @click="toggle()"
            ><li >
              <i class="fa-solid fa-music fa-2x mr-4"></i>Radio
            </li></router-link
          >
          <li @click="toggle()"><i class="fa-solid fa-radio fa-2x mr-4"></i>Music Videos</li>
          <li @click="toggle()"><i class="fa-solid fa-user fa-2x mr-4"></i>Profile</li>

          <li @click="toggle()"><i class="fa fa-sign-out fa-2x mr-4"></i>Log Out</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbar: false,
    };
  },
  methods: {
    toggle() {
      if (this.navbar == true) {
        return (this.navbar = false);
      }
      return (this.navbar = true);
    },
  },
};
</script>

<style scoped>
.container {
  display: none;
}
.container {
  display: none;
}

@media only screen and (max-width: 600px) {
  .container {
    display: block;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .mobile {
    margin: 0px;
    background: #1d2123;

    padding: 0px;
  }
  .mobile input {
    background: #1d2123;
    outline: none;
    padding: 20px;
    width: 70%;
    color: rgba(255, 255, 255, 0.25);
  }
  .music_nav {
    margin: 0px;
    width: 100%;
    position: absolute;
    z-index: 1;
    right: 0;
    left: 0;
    height: 100vh;
    background: #1d2123;
  }

  .music_nav ul {
    list-style: none;
    background: #1d2123;
  }
  .music_nav li {
    margin: 20px 0px;
    margin-top: 0px;
    padding: 10px 15px;
    color: rgba(239, 238, 224, 0.25);
  }
  .music_nav i {
    color: rgba(239, 238, 224, 0.25);
  }
  .music_nav a {
    text-decoration: none;
  }

  .translateX-enter {
    transform: translateX(-200px);
    opacity: 0;
  }

  .translateX-enter-active,
  .translateX-leave-active {
    transform-origin: top left 0;
    transition: 3s ease;
  }

  .translateX-leave-to {
    transform: translateX(-200px);
    opacity: 0;
  }
}
</style>