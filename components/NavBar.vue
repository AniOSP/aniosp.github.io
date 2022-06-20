<template>
  <div class="navbar bg-base-100 shadow-2xl px-10" id="top-nav">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <img src="~/assets/img/aniosp-logo.png" />
      </button>
    </div>
    <div class="flex-1 p-2">
      <a class="btn btn-ghost normal-case text-xl">AniOSP</a>
    </div>

    <div class="navbar-end">
      <div class="flex-none">
        <ul class="menu menu-horizontal bg-base-100 rounded-box p-2">
          <li v-if="isHome()"><a href="/#home">Home</a></li>
          <li v-else>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li v-if="isHome()"><a href="/#features">Features</a></li>
          <li>
            <NuxtLink to="/downloads">Download</NuxtLink>
          </li>
          <li v-if="isHome()"><a href="/#team">Team</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

function isHome() {
  return route.path === "/";
}
</script>

<style>
#top-nav {
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 50px;
  margin-bottom: 20px;
  background: rgba(42, 48, 60, .4);
  z-index: 1010;
  backdrop-filter: blur(8px);
}
</style>
