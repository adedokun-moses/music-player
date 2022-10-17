<template>
  <div class="music_nav desktop">
    <img src="../assets/logo.svg" style="margin-left: 10px" />
    <ul class="m-0 mt-4">
      <router-link to="/">
        <li><i class="fas fa-home fa-2x" style="color: #facd66"></i></li
      ></router-link>
      <router-link to="/collection"><li><i class="fa-solid fa-music fa-2x"></i></li></router-link>
      <li><i class="fa-solid fa-radio fa-2x"></i></li>
      <li><i class="fa-solid fa-record-vinyl fa-2x"></i></li>
    </ul>

    <ul class="m-0 mt-5">
      <li><i class="fa fa-user fa-2x"></i></li>
      <li><i class="fa fa-sign-in fa-2x"></i></li>
    </ul>
  </div>
</template>

<style scoped>
.music_nav ul {
  background: #1a1e1f;
  border-radius: 32px;
  list-style: none;
  margin-top: 20px;
  width: 100%;
}
.music_nav li {
  margin: 10px 0px;
  margin-top: 20px;
  padding: 10px 15px;
}
.music_nav i {
  color: rgba(239, 238, 224, 0.25);
}
.mobile {
  display: none;
}

@media only screen and (max-width: 600px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
}
</style>