<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          <span class="text-h4 text-weight-bolder text-italic"
            >What Izzup?</span
          >
        </q-toolbar-title>
        <q-space></q-space>
        <q-btn
          rounded
          color="orange-8"
          label="Join"
          href="https://izzup.com"
          size="md"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>

    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <div>
            An
            <a href="https://www.ultri.com" class="toolbar-text-link">Ultri</a>
            /
            <a href="https://izzup.com" class="toolbar-text-link">Izzup</a>
            service
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

// const leftDrawerOpen = ref(false);

// const toggleLeftDrawer = () => {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// };
</script>

<style lang="scss" scoped>
.no-link-style a {
  text-decoration: none;
}
</style>
