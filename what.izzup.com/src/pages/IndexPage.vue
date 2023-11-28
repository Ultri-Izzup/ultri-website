<template>
  <q-page class="flex flex-center">
    <div class="row fit justify-center bg-grey-1">
      <div
        :class="Screen.lt.md ? ' fit ' : ''"
        :style="Screen.gt.sm ? ' width: 80%; max-width: 800px ' : ''"
      >
        <div
          class="text-h5 text-weight-bold q-pt-md q-pl-sm q-pb-non q-mb-none"
        >
          Sample the Fediverse, no account needed.
        </div>
        {{ fediverse.currentPosts }}
        <q-select
          filled
          emit-value
          v-model="fediHost"
          :options="fediverse.getSites"
          label="Fediverse Host"
        ></q-select>

        <template
          v-if="fediverse.currentPosts && fediverse.currentPosts.length > 0"
        >
          <div v-for="post in fediverse.currentPosts" :key="post.url">
            <post-template
              :data="post"
              :class="Screen.lt.md ? ' q-my-lg ' : ' q-my-xl '"
            ></post-template>
          </div>
        </template>

        <!-- <template v-if="fediFeeds.posts && fediFeeds.posts.length > 0">
          <div v-for="post in fediFeeds.posts" :key="post.url">
            <post-template
              :data="post"
              :class="Screen.lt.md ? ' q-my-lg ' : ' q-my-xl '"
            ></post-template>
          </div>
        </template> -->
      </div>
    </div>
    <!-- <q-card>
      <q-card-section>

      </q-card-section>
      <q-card-section v-if="fediFeeds.posts && fediFeeds.posts.length > 0">
        <div v-for="post in  fediFeeds.posts" :key="post.url">
          <post-template :post="post"></post-template>
        <hr />
        </div>
      </q-card-section>
    </q-card> -->
  </q-page>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { Screen } from "quasar";

import { useFediFeedsStore } from "../stores/fediFeeds";
import { useFediverseStore } from "../stores/fediverse";

import PostTemplate from "../components/PostTemplate.vue";

const fediFeeds = useFediFeedsStore();
const fediverse = useFediverseStore();

const fediHost = ref();

fediFeeds.loadFediverseFeed("https://mastodon.social/api/v1/trends/statuses");

// const posts = computed(() => {

//   const posts = [];

//   if(fediFeeds.fediSites) {
//     fediFeeds.fediSites.forEach((data,url) => {
//       posts.push({...data, ...{url: url}})
//     });
//   }

//   return posts;

// })

const siteNameFromUrl = (url) => {
  let host = new URL(url);
  console.log(host);
};

const viewFediSite = (site, done) => {
  console.log("WTRF", site);
  done();
};

watch(fediHost, (newVal, oldVal) => {
  fediverse.loadFediverseFeed(newVal);
});
</script>
