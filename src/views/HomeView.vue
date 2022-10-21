<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-1 m-0 p-3">
        <Mobile />
        <SideNav />
      </div>
      <div class="col-sm-11 m-0 p-3">
        <div class="row">
          <div class="col-sm-12 mt-0 d-none d-lg-block">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="search artist" class="inputbox" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-8 image">
            <img src="../assets/frame.png" class="d-none d-lg-block" />
            <img src="../assets/mobile_home.png" class="mobile_img" />
          </div>
          <div class="col-sm-4 chart">
            <h5>Top Chart</h5>
            <div class="row">
              <div class="chart_scroll">
                <router-link
                  to="/about"
                  style="text-decoration: none; color: white"
                >
                  <div class="col-sm-12 recent_playlist d-flex">
                    <div class="m-2 charts_details">
                      <img src="../assets/play1.png" />
                      <h4>
                        Golden age of 80s <br />
                        <span class="small">Sean swadder </span><br />
                        <span class="small">2:34:45</span>
                      </h4>
                    </div>
                    <div class="love_logo">
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  </div>
                </router-link>
                <router-link
                  to="/about"
                  style="text-decoration: none; color: white"
                >
                  <div class="col-sm-12 recent_playlist d-flex">
                    <div class="m-2 charts_details">
                      <img src="../assets/play1.png" />
                      <h4>
                        Golden age of 80s <br />
                        <span class="small">Sean swadder </span><br />
                        <span class="small">2:34:45</span>
                      </h4>
                    </div>
                    <div class="love_logo">
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  </div>
                </router-link>
                <router-link
                  to="/about"
                  style="text-decoration: none; color: white"
                >
                  <div class="col-sm-12 recent_playlist d-flex">
                    <div class="m-2 charts_details">
                      <img src="../assets/play1.png" />
                      <h4>
                        Golden age of 80s <br />
                        <span style="font-size: 10px">Sean swadder </span><br />
                        <span style="font-size: 10px">2:34:45</span>
                      </h4>
                    </div>
                    <div class="love_logo">
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-sm-12 moses mt-4">
            <h4 style="color: #efeee0; font-weight: bold">New Release</h4>
            <div class="row">
              <div class="music_det">
                <div class="col-sm-2 col-6">
                  <router-link
                    to="/about"
                    style="text-decoration: none; color: white"
                  >
                    <img src="../assets/image2.png" style="width: 100%" />
                    <h2 style="font-size: 10px; margin-top: 5px">
                      Life in a bubble
                    </h2>
                  </router-link>
                </div>
                <div class="col-sm-2 col-6">
                  <img src="../assets/musicplay.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                  </h2>
                </div>
                <div class="col-sm-2 col-6">
                  <img src="../assets/play2.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                  </h2>
                </div>
                <div class="col-sm-2 col-6">
                  <img src="../assets/play3.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                  </h2>
                </div>
                <div class="col-sm-2 col-6">
                  <img src="../assets/play5.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                  </h2>
                </div>
                <div class="col-sm-2 col-6">
                  <img src="../assets/play6.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                  </h2>
                </div>

                <div class="col-sm-2 col-6">
                  <img src="../assets/musicplay2.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                 
                  </h2>
                </div>
                 <div class="col-sm-2 col-6">
                  <img src="../assets/musicplay2.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 moses mt-4">
            <h4 style="color: #efeee0; font-weight: bold">
              Popular In Your Area
            </h4>
            <div class="row">
              <div class="music_det">
                <div class="col-sm-2 col-6">
                  <router-link
                    to="/about"
                    style="text-decoration: none; color: white"
                  >
                    <img src="../assets/play6.png" style="width: 100%" />
                    <h2 style="font-size: 10px; margin-top: 5px">
                      Life in a bubble
                    </h2>
                  </router-link>
                </div>
                <div class="col-sm-2 col-6">
                  <img src="../assets/image2.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                  </h2>
                </div>
                <div class="col-sm-2 col-6">
                  <img src="../assets/musicplay.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                  </h2>
                </div>
                <div class="col-sm-2 col-6">
                  <img src="../assets/musicplay.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                  </h2>
                </div>
                <div class="col-sm-2 col-6">
                  <img src="../assets/musicplay2.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                  </h2>
                </div>
                <div class="col-sm-2 col-6">
                  <img src="../assets/play6.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                  </h2>
                </div>

                <div class="col-sm-2 col-6">
                  <img src="../assets/play5.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
                    <!-- {{netStore.name}} -->
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="music_play m-0 p-0">
          <div class="row">
            <div class="col-sm-10 music_det mx-auto">
              <div class="mydet">
                <img src="../assets/newlog.png" />
                <h5>
                  Seasons In <br /><span style="font-size: 10px">James</span>
                </h5>
              </div>
              <div class="musiclogo mb-3">
                <div class="music_logo">
                  <ul>
                    <li>
                      <i class="fa-solid fa-shuffle d-none d-lg-block"></i>
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-backward-step d-none d-lg-block"
                      ></i>
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-circle-play"
                        style="color: #facd66"
                      ></i>
                    </li>
                    <li><i class="fa-solid fa-forward-step"></i></li>
                    <li>
                      <i
                        class="fa-solid fa-arrows-rotate d-none d-lg-block"
                      ></i>
                    </li>
                  </ul>
                  <div
                    class="progress mt-3"
                    style="
                      height: 5px;
                      background: rgba(255, 255, 255, 0.04);
                      width: 80%;
                      margin: auto;
                    "
                  >
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 25%; height: 5px; background: #facd66"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div style="flex-basis: 20%" class="d-flex">
                <i
                  class="fa-solid fa-volume-high mr-4 mt-3 d-none d-lg-block"
                ></i>
                <div
                  class="progress mt-4"
                  style="
                    height: 5px;
                    background: rgba(255, 255, 255, 0.04);
                    width: 100%;
                  "
                >
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 30%; height: 5px; background: #facd66"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from "@/components/sidenav.vue";
import Mobile from "@/components/mobile.vue";

//import { onMounted } from "vue";
import { useUserStore } from "../store/user";

export default {
  // name: 'HomeView',
  components: { SideNav, Mobile },
  /* setup() {
    const netStore = useUserStore();
     const getUsers = computed(() => {
      return store.getUsers;
    });
    const users = computed(() => {
      return store.users;
    });

    onMounted(() => {
      store.fetchUsers();
    }); 

    return {netStore};
  }, */
};
</script>


<style scoped>
@import "../../public/cssfolder/style.css";
</style>