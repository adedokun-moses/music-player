<template>
  <div class="container-fluid">
    <div class="row m-0">
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
                <div class="col-sm-11 recent_playlist d-flex">
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

                <div class="col-sm-11 recent_playlist d-flex">
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
                <div class="col-sm-11 recent_playlist d-flex">
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
              </div>
            </div>
          </div>
          <div class="col-sm-12 moses mt-4">
            <h4 style="color: #efeee0">New Release</h4>
            <div class="row">
              <div class="music_det">
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
                  <img src="../assets/musicplay.png" style="width: 100%" />
                  <h2 style="font-size: 10px; margin-top: 5px">
                    Life in a bubble
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
              <div class="mydet" style="flex-basis: 15%">
                <img src="../assets/newlog.png" />
                <h5 style="font-size: 10px">
                  Seasons In <br /><span style="font-size: 5px">James</span>
                </h5>
              </div>
              <div style="flex-basis: 90% mb-3">
                <div class="music_logo">
                  <ul>
                    <li><i class="fa-solid fa-shuffle"></i></li>
                    <li><i class="fa-solid fa-backward-step"></i></li>
                    <li>
                      <i
                        class="fa-solid fa-circle-play"
                        style="color: #facd66"
                      ></i>
                    </li>
                    <li><i class="fa-solid fa-forward-step"></i></li>
                    <li><i class="fa-solid fa-arrows-rotate"></i></li>
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
                <i class="fa-solid fa-volume-high mr-4 mt-3"></i>
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
export default {
  // name: 'HomeView',
  components: { SideNav, Mobile },
};
</script>


<style scoped>
@import "../../public/cssfolder/style.css";
</style>