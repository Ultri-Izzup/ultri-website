import { defineStore } from "pinia";

import { useStorage } from "@vueuse/core";

const newSites = ["ioc.exchange"];

const popularSites = [
  "izzup.com",
  "ioc.exchange",
  "mastodon.social",
  "mastodon.online",
  "mas.to",
  "mastodon.gamedev.place",
  "ieji.de",
  "cr8r.gg",
  "mstdn.business",
  "hachyderm.io",
  "defcon.social",
  "graphics.social",
  "airwaves.social",
  "furry.engineer",
  "earthstream.social",
  "technews.social",
  "veganism.social",
  "hostux.social",
  "epicure.social",
  "mastodon.vanlife.is",
  "peoplemaking.games",
  "union.place",
  "urbanists.social",
  "musician.social",
  "toot.garden",
  "mastodon.au",
  "cosocial.ca"
];

export const useFediverseStore = defineStore("fediverse", {
  state: () => ({
    newPosts: useStorage("newPosts", []),
    popularPosts: useStorage("popularPosts", []),
    popularUrls: useStorage("popularUrls", new Set()),
    newUrls: useStorage("newUrls", new Set()),
    loading: []
  }),

  getters: {
    // Are we currently downloadign data?
    isLoading(state) {
      if (state.loading.length > 0) {
        return true;
      }

      return false;
    },
    // Return array of popular post objects, sorted by likes
    popularSorted(state) {
      const sorted = this.popularPosts.sort(
        (objA, objB) =>
          Number(objB.favourites_count) - Number(objA.favourites_count)
      );

      return sorted;
    },
    // Return array of new post objects, sorted by creation date.
    newSorted(state) {
      const sorted = this.newPosts.sort(
        (objA, objB) => Number(objB.created_at) - Number(objA.created_at)
      );

      return sorted;
    }
  },

  actions: {
    loadPopular() {
      popularSites.forEach((site) => {
        this.loading.push(site);

        fetch("https://" + site + "/api/v1/trends/statuses")
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              data.forEach((post) => {
                if (!this.popularUrls.has(post.url)) {
                  this.popularPosts.push(post);
                  this.popularUrls.add(post.url);
                }
              });
            }

            this.loading = this.loading.filter((value) => value !== site);
          });
      });
    },
    loadNew() {
      newSites.forEach((site) => {
        this.loading.push(site);

        fetch(
          "https://" +
            site +
            "/api/v1/timelines/public?local=true&only_media=false"
        )
          .then((response) => response.json())
          .then((data) => {
            if (data && data.length > 0) {
              data.forEach((post) => {
                if (!this.newUrls.has(post.url)) {
                  this.newPosts.push(post);
                  this.newUrls.add(post.url);
                }
              });
            }

            this.loading = this.loading.filter((value) => value !== site);
          });
      });
    }
  }
});
