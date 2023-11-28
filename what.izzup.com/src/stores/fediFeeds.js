import { defineStore } from "pinia";

import { useStorage } from "@vueuse/core";

export const useFediFeedsStore = defineStore("fediFeeds", {
  state: () => ({
    fediSites: useStorage("fediSites", new Map()),
    lastUpdated: useStorage("fediSitesUpdated", null)
  }),

  getters: {
    posts(state) {
      const posts = [];

      if (state.fediSites) {
        state.fediSites.forEach((data, url) => {
          console.log(url);
          data.forEach((post) => {
            console.log("POST", post);
            posts.push(post);
          });
        });
      }

      const sorted = posts.sort(
        (objA, objB) =>
          Number(objB.favourites_count) - Number(objA.favourites_count)
      );

      return posts;
    }
  },

  actions: {
    loadFediverseFeed(url) {
      console.log(url);
      if (!this.fediSites.has(url)) {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.fediSites.set(url, data);
            console.log(data);
          });
      }
    }
  }
});
