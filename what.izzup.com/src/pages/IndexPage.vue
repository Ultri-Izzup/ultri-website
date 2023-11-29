<template>
  <q-page class="flex">
    <div class="row fit justify-center bg-grey-1">
      <div
        :class="Screen.lt.md ? ' fit relative-position' : 'relative-position'"
        :style="Screen.gt.sm ? ' width: 80%; max-width: 800px ' : ''"
      >
        <div
          :class="
            Screen.lt.sm
              ? ' text-body1 text-weight-bold q-pt-md q-pl-sm'
              : ' text-h4 text-weight-bold q-py-lg q-pl-sm'
          "
        >
          Sample the Fediverse, no account needed. Loading:
        </div>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="popular" label="Popular"></q-tab>
          <q-tab name="new" label="New"></q-tab>
        </q-tabs>

        <q-separator></q-separator>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="popular">
            <div
              :class="
                'text-primary ' +
                (Screen.lt.sm
                  ? ' text-h6 '
                  : Screen.lt.md
                  ? ' text-h5 text-weight-bold'
                  : Screen.lt.lg
                  ? 'text-h4 text-weight-bold'
                  : 'text-h3 text-weight-bold')
              "
            >
              Popular Fediverse Posts
            </div>
            <template
              v-if="fediverse.popularPosts && fediverse.popularPosts.length > 0"
            >
              <div v-for="post in fediverse.popularSorted" :key="post.url">
                <post-template
                  :data="post"
                  :class="Screen.lt.md ? ' q-my-lg ' : ' q-my-xl '"
                ></post-template>
              </div>
            </template>
          </q-tab-panel>

          <q-tab-panel name="new">
            <div
              :class="
                'text-primary ' +
                (Screen.lt.sm
                  ? ' text-h6 '
                  : Screen.lt.md
                  ? ' text-h5 text-weight-bold'
                  : Screen.lt.lg
                  ? 'text-h4 text-weight-bold'
                  : 'text-h3 text-weight-bold')
              "
            >
              New Fediverse Posts
            </div>
            <template
              v-if="fediverse.newPosts && fediverse.newPosts.length > 0"
            >
              <div v-for="post in fediverse.newPosts" :key="post.url">
                <post-template
                  :data="post"
                  :class="Screen.lt.md ? ' q-my-lg ' : ' q-my-xl '"
                ></post-template>
              </div>
            </template>
          </q-tab-panel>
        </q-tab-panels>

        <div class="text-h6 q-pb-sm row full-width justify-center">
          If you want more, join the Fediverse.
        </div>

        <div class="row full-width justify-center q-py-md">
          <q-btn
            rounded
            color="orange-8"
            label="Join Fediverse"
            href="https://izzup.com"
            size="xl"
          ></q-btn>
        </div>
        <q-inner-loading :showing="fediverse.isLoading">
          <q-card>
            <q-card-section class="text-center">
              <q-spinner-grid size="50px" color="primary"></q-spinner-grid>
            </q-card-section>
            <q-card-section class="text-h5 text-center">
              Contacting the Fediverse,<br />please be patient.
            </q-card-section>
          </q-card>
        </q-inner-loading>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from "vue";

import { Screen, useQuasar } from "quasar";

import { useFediverseStore } from "../stores/fediverse";

import PostTemplate from "../components/PostTemplate.vue";

const $q = useQuasar();

const fediverse = useFediverseStore();

const tab = ref("popular");

fediverse.loadPopular();

// const showLoading = () => {
//   $q.loading.show({
//     message: "Doing something. Please wait...",
//     boxClass : "bg-grey-2 text-grey-9",
//     spinnerColor: "primary",
//   });
// };

watch(tab, (newVal, oldVal) => {
  if (newVal == "new") {
    console.log("LOAD NEW POSTS");
    if (!fediverse.newPosts || fediverse.newPosts.length < 1) {
      fediverse.loadNew();
    }
  }
});

// watch(
//   fediverse.loading,
//   (newVal, oldVal) => {
//     console.log(newVal);
//     if (newVal.length > 0) {
//     } else {
//       $q.loading.hide();
//     }
//   },
//   { immediate: true }
// );
</script>
