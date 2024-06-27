<template>
  <!-- Section Locations Start -->
  <section class="section-worldwide">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-40 text-center mb-5">
            <h2 class="text-uppercase fw-bold">EXPLORE YOUR BAIC</h2>
            <h4 class="text-uppercase fw-light">
              Find Your BAIC In Your Country
            </h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="map-box mb-5">
            <img src="@/assets/images/map.png" class="img-fluid" alt="" />
            <div class="point mkr1">
              <div class="marker"></div>
              <div class="pulse"></div>
            </div>
            <div class="point mkr2" title="Venezuela">
              <div class="marker"></div>
              <div class="pulse"></div>
            </div>
            <div class="point mkr3" title="Venezuela">
              <div class="marker-wrap">
                <div class="marker"></div>
              </div>
              <ul class="dropdown-menu mappin-box">
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">UAE</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><img src="@/assets/images/si1.png"
                  /></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><img src="@/assets/images/si2.png"
                  /></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><img src="@/assets/images/si3.png"
                  /></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><img src="@/assets/images/si4.png"
                  /></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><img src="@/assets/images/si5.png"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="point mkr4" title="Venezuela">
              <div class="marker"></div>
              <div class="pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section Locations End -->
</template>
<script>
export default {
  data() {
    return {
      title: "Worldwide",
    };
  },
  head() {
    return { title: this.title };
  },
};
</script>
<style>
.section-locations {
  background: #ffffff url("@/assets/images/map_location_bg.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
}
.map-box {
  position: relative;
}
.map-box img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: auto;
}
.point {
  position: absolute;
}
.point.mkr1 {
  top: 27%;
  left: 27%;
}
.point.mkr2 {
  right: 30%;
  top: 15%;
}
.point.mkr3 {
  right: 38%;
  top: 30%;
}
.point.mkr4 {
  right: 43%;
  top: 45%;
}
.marker {
  z-index: 1;
  position: absolute;
  top: -14px;
  left: 0;
  right: 0;
  width: 26px;
  height: 26px;
  border-radius: 50px;
  background-color: #343434;
  margin: auto;
  bottom: 0;
}
.marker::after {
  content: "";
  z-index: 2;
  position: absolute;
  margin: auto;
  width: 12px;
  height: 12px;
  border-radius: 15px;
  background-color: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.marker::before {
  z-index: 0;
  content: "";
  position: absolute;
  top: 80%;
  left: 50%;
  margin-left: -10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #343434;
}
.mappin-box {
  background: #f3f3f3;
  border: 0;
  border-radius: 50px;
  margin: 0;
  text-align: center;
  width: 20rem;
  transform: none !important;
  top: -24px !important;
  left: 40px !important;
  display: block;
}
.mappin-box li {
  display: inline-block;
  border-right: 1px solid #cccccc;
  vertical-align: middle;
}
.mappin-box li:last-child {
  border-right: 0;
}
.mappin-box li a {
  display: block;
  padding: 6px 15px;
}
.mappin-box li a > img {
  height: 16px;
  width: auto;
}
.mappin-box li a:hover,
.mappin-box li a:focus {
  background-color: transparent;
}
.point.dropdown-toggle::after {
  display: none;
}
.point.dropdown-toggle.show .marker-wrap {
  width: 60px;
  height: 60px;
  background: transparent;
  border-radius: 50%;
  position: relative;
  z-index: 9999;
  margin-top: -30px;
}
.point.dropdown-toggle.show .marker-wrap {
  background: #343434;
}
.point.dropdown-toggle.show .marker-wrap .marker {
  background: #ffffff;
}
.point.dropdown-toggle.show .marker-wrap .marker::before {
  border-top: 20px solid #ffffff;
}
.point.dropdown-toggle.show .marker-wrap .marker::after {
  background-color: #343434;
}
</style>
