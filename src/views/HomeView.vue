<template>
  <div class="container-fluid">
    <div class="row m-0">
      <div class="col-sm-1 m-0 p-3">
        <SideNav />
      </div>
      <div class="col-sm-11 m-0 p-3">
        <div class="row">
          <div class="col-sm-12 mt-0">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="search artist" class="inputbox" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-8 image">
            <img src="../assets/frame.png" />
          </div>
          <div class="col-sm-4 chart">
            <h5>Top Chart</h5>
            <div class="row">
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
                  <i class="fa fa-bell"></i>
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
                  <i class="fa fa-bell"></i>
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
                  <i class="fa fa-bell"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 moses mt-4">
            <h4 style="color: #efeee0">New Release</h4>
            <div class="row">
              <div class="col-sm-2 music_list">
                <img src="../assets/musicplay.png" style="width: 100%" />
                <h2 style="font-size: 10px; margin-top: 5px">
                  Life in a bubble
                </h2>
              </div>
              <div class="col-sm-2 music_list">
                <img src="../assets/musicplay.png" style="width: 100%" />
                <h2 style="font-size: 10px; margin-top: 5px">
                  Life in a bubble
                </h2>
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
                    <li><i class="fa fa-random"></i></li>
                    <li><i class="fa fa-bell"></i></li>
                    <li><i class="fa fa-bell"></i></li>
                    <li><i class="fa fa-bell"></i></li>
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
                <i class="fa fa-bell mt-3 mr-4"></i>
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

  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-sm-1 m-0 p-3">
        <SideNav />
      </div>
      <div class="col-sm-11 m-0 p-3">
        <div class="row home_image">
          <div class="col-sm-12 mt-0">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="search artist" class="inputbox" />
          </div>

          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-4">
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
                  <li><i class="fa fa-heart" style="color: red"></i></li>
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
                <div class="music_play m-0 p-0">
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
                            <li><i class="fa fa-random"></i></li>
                            <li><i class="fa fa-bell"></i></li>
                            <li><i class="fa fa-bell"></i></li>
                            <li><i class="fa fa-bell"></i></li>
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
                        <i class="fa fa-bell mt-3 mr-4"></i>
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

  <div class="container-fluid" style="margin-top: 15rem">
    <div class="row mt-5">
      <div class="col-sm-1 m-0 p-3">
        <SideNav />
      </div>
      <div class="col-sm-11 m-0 p-3">
        <div class="row">
          <div class="col-sm-12 mt-0">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="search artist" class="inputbox" />
          </div>

          <div class="col-sm-12 collections">
            <ul>
              <li>My Collections</li>
              <li>Likes</li>
            </ul>
          </div>
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-2">
                <img src="../assets/musicplay.png" />
              </div>
              <div class="col-sm-2">
                <img src="../assets/musicplay2.png" />
              </div>
              <div class="col-sm-2">
                <img src="../assets/musicplay2.png" />
              </div>
              <div class="col-sm-2">
                <img src="../assets/musicplay2.png" />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12" style="margin-top: 20rem">
                <div class="music_play m-0 p-0">
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
                            <li><i class="fa fa-random"></i></li>
                            <li><i class="fa fa-bell"></i></li>
                            <li><i class="fa fa-bell"></i></li>
                            <li><i class="fa fa-bell"></i></li>
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
                        <i class="fa fa-bell mt-3 mr-4"></i>
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
// @ is an alias to /src
import SideNav from "@/components/sidenav.vue";
export default {
  // name: 'HomeView',
  components: { SideNav },
};
</script>

<style scoped>
.inputbox {
  background: #1d2123;
  outline: none;
  padding: 20px;
  width: 40%;
  color: rgba(255, 255, 255, 0.25);
  margin-left: 10px;
}
.music_nav {
  margin: 10px;
}
.music_nav img {
  padding: 10px 10px;
}
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
.image img {
  margin-top: 50px;
  width: 100%;
}
.chart h5 {
  margin-top: 40px;
}
.recent_playlist {
  background: #1a1e1f;
  border-radius: 20px;
  height: 90px;
  margin: 10px;
}
.charts_details {
  display: flex;
  align-items: center;
}
.charts_details h4 {
  font-size: 15px;
  line-height: 20px;
  margin: 0px 10px;
}
.love_logo {
  display: flex;
  align-items: center;
}
.love_logo i {
  margin-left: 100px;
}
/* .moses{
  position: relative;
} */
.music_play {
  background: url(../assets/bg.png);
  height: 70px;
  position: relative;
  width: 100%;
  filter: drop-shadow(0px -25px 100px rgba(16, 16, 16, 0.51));
  top: -28.6px;
}
.music_det {
  display: flex;
}
.music_det > div {
  width: 100%;
  margin-top: 15px;
}
/* .music_det img {
  display: flex;
  margin: 15px 0px;
  align-items: center;
} */
.mydet {
  display: flex;
  align-items: center;
}
.mydet h5 {
  margin: 0px;
  margin-bottom: 20px;
}

.music_logo ul {
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  width: 30%;
  margin: auto;
}
.music_logo li {
  margin: 0px 20px;
}

.home_image {
  background: url(../assets/newlogo.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}

.tunes h5 {
  color: #a4c7c6;
  margin-top: 8rem;
}
.tunes ul {
  list-style: none;
  display: flex;
  margin-top: 4.5rem;
}
.tunes li {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  margin: 0px 0px 0px 10px;
  padding: 10px 20px;
  border-radius: 20px;
}

.table {
  display: flex;
  background: rgba(51, 55, 59, 0.37);
  border-radius: 20px;
  padding: 12px;
  margin: 10px 0px;
  color: white;
  align-items: center;
}
.table > div {
  width: 100%;
}
.table h5 {
  text-align: center;
  font-size: 12px;
}
.collections ul {
  list-style: none;
  display: flex;
}
.collections li {
  margin: 0px 5px;
  background: #facd66;
  border-radius: 20px;
  padding: 10px 20px;
  color: #1d2123;
}
</style>
