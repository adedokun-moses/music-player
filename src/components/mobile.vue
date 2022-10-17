<template>
  <div class="mobile">
    <i class="fa fa-bars fa-2x" @click="toggle()"></i>
    <img src="../assets/logo.svg" style="margin-left: 10px" />
    <input type="text" />
    <i class="fa fa-search fa-2x"></i>
  </div>
  <div class="music_nav" v-if="navbar == true">
    <ul class="m-0 mt-1">
      <router-link to="/">
        <li>
          <i class="fas fa-home fa-2x mr-4" style="color: #facd66"></i>
          Home
        </li></router-link
      >
      <li><i class="fa fa-record-vinyl fa-2x mr-4"></i> My Collection</li>
      <router-link to="/collection"
        ><li><i class="fa-solid fa-music fa-2x mr-4"></i>Radio</li></router-link
      >
      <li><i class="fa-solid fa-radio fa-2x mr-4"></i>Music Videos</li>
      <li><i class="fa-solid fa-user fa-2x mr-4"></i>Profile</li>

      <li><i class="fa fa-sign-out fa-2x mr-4"></i>Log Out</li>
    </ul>
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
.mobile {
  display: none;
}
.mobile {
  display: none;
}

@media only screen and (max-width: 600px) {
  .mobile {
    display: block;
    margin: 0px;
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
  .music_nav a{
    text-decoration: none;
  }
}
</style>