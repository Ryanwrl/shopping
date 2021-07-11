<template>
  <div class="profile">
    
    <navbar class="nav-bar">
      <div slot="center">shopping</div>
    </navbar>

    <scroll class="scroll-height">
      <login />
      <money />
      <div class="line"></div>
      <profile-list />
    </scroll>

  </div>
</template>

<script>

import Login from "./children/Login";
import Money from "./children/Money";
import ProfileList from "./children/profileList";
import Scroll from "components/common/Scroll/Scroll.vue";
import Navbar from 'components/common/Navbar/Navbar.vue';


export default {
  name: "Profile",
  components: { Scroll, ProfileList, Money, Login, Navbar }
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
}

.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
}
</style>
