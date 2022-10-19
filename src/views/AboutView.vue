<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-1 m-0 p-3">
        <Mobile/>
        <SideNav />
      </div>
      <div class="col-sm-11 m-0 p-3">
        <div class="row home_image">
          <div class="col-sm-12 mt-0 d-none d-lg-block">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="search artist" class="inputbox" />
          </div>

          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-4 lead_image">
                <img
                  src="../assets/leadimage.png"
                  alt="new"
                  style="width: 100%"
                />
              </div>
              <div class="col-sm-8 tunes">
                <h5>Tomorrow’s tunes</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam,<br />
                  purus sit amet luctus venenatis <br />
                  64 songs ~ 16 hrs+
                </p>
                <ul>
                  <li>
                    <i class="fa fa-play-circle" style="color: #facd66"></i>
                    Play All
                  </li>
                  <li>
                    <i class="fa fa-music" style="color: #facd66"></i> Add To
                    Collection
                  </li>
                  <li><i class="fa fa-heart" style="color: red"></i> Like </li>
                </ul>
              </div>

              <div class="col-sm-12 mx-auto - mt-3 mr-3">
                <div class="table">
                  <div>
                    <img src="../assets/table_img.png" />
                    <i
                      class="fa fa-heart"
                      style="color: red; margin-left: 8px"
                    ></i>
                  </div>
                  <div>
                    <h5>Let me love you ~ Krisx</h5>
                  </div>

                  <div>
                    <h5>4:17</h5>
                  </div>
                  <div>
                    <h5 style="margin-left: 10rem; color: #facd66">:</h5>
                  </div>
                </div>
                <div class="table">
                  <div>
                    <img src="../assets/table_img.png" />
                    <i
                      class="fa fa-heart"
                      style="color: red; margin-left: 8px"
                    ></i>
                  </div>
                  <div>
                    <h5>Let me love you ~ Krisx</h5>
                  </div>

                  <div>
                    <h5>4:17</h5>
                  </div>
                  <div>
                    <h5 style="margin-left: 10rem; color: #facd66">:</h5>
                  </div>
                </div>
                <div class="table">
                  <div>
                    <img src="../assets/table_img.png" />
                    <i
                      class="fa fa-heart"
                      style="color: red; margin-left: 8px"
                    ></i>
                  </div>
                  <div>
                    <h5>Let me love you ~ Krisx</h5>
                  </div>

                  <div>
                    <h5>4:17</h5>
                  </div>
                  <div>
                    <h5 style="margin-left: 10rem; color: #facd66">:</h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="music_play m-0 p-0 d-none d-lg-block">
                  <div class="row">
                    <div class="col-sm-12 music_det mx-auto">
                      <div class="mydet" style="flex-basis: 15%">
                        <img src="../assets/newlog.png" />
                        <h5 style="font-size: 10px">
                          Seasons In <br /><span style="font-size: 5px"
                            >James</span
                          >
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
                              style="
                                width: 25%;
                                height: 5px;
                                background: #facd66;
                              "
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideNav from "../components/sidenav.vue";
import Mobile from "../components/mobile.vue"
export default {
  components: { SideNav, Mobile },
  setup() {},
};
</script>
<style scoped>
@import "../../public/cssfolder/style.css";
</style>