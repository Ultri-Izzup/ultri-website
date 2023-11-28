import { defineStore } from "pinia";

import { useStorage } from "@vueuse/core";

const fediSites = new Map([
  [
    "mastodon.social",
    {
      description:
        "The original server operated by the Mastodon gGmbH non-profit."
    }
  ],
  ["izzup.com", { description: "Our own premier Fediverse server." }],
  [
    "mastodon.online",
    { description: "A newer server operated by the Mastodon gGmbH non-profit." }
  ],
  [
    "mastodon.world",
    { description: "A newer server operated by the Mastodon gGmbH non-profit." }
  ],
  [
    "mas.to",
    { description: "A newer server operated by the Mastodon gGmbH non-profit." }
  ],
  [
    "mastodon.gamedev.place",
    {
      description:
        "Mastodon server focused on game development and related topics."
    }
  ],
  [
    "ieji.de",
    {
      description:
        "ieji.de is a generalistic mastodon instance, with the goal of being the fastest mastodon instance in Europe and with a focus on user privacy, like being usable via the tor network."
    }
  ],
  [
    "cr8r.gg",
    {
      description:
        "A community for all types of creators (and those who consume the creations)"
    }
  ],
  [
    "birdon.social",
    { description: "A Mastodon server dedicated to bird and nature lovers." }
  ],
  [
    "mstdn.business",
    {
      description:
        "Business-friendly Mastodon server,open for everyone interested to contribute with their real name, business, brand, or startup to build a professional community. Hosted on Hetzner Cloud in Helsinki."
    }
  ],
  [
    "hachyderm.io",
    {
      description:
        "Hachyderm is a safe space, LGBTQIA+ and BLM, primarily comprised of tech industry professionals world wide. Note that many non-user account types have restrictions - please see our About page."
    }
  ],
  [
    "defcon.social",
    {
      description:
        "DEFCON.social is a place for hackers, researchers, artists, infosec, cyberpunks & those interested in the intersection of technology and society."
    }
  ],
  [
    "graphics.social",
    {
      description:
        "A gathering place for the computer graphics community to discuss 3D and 2D graphics, computer science, and any related topics. Everyone is welcome here."
    }
  ],
  [
    "airwaves.social",
    {
      description:
        "The Airwaves Social mastodon server is radio hobby & industry focused on topics such as flight & ship tracking, amateur radio, satellites, and more. Sponsored by Airframes, but an effort for all."
    }
  ],
  [
    "furry.engineer",
    {
      description:
        "This server aimed at techies and engineers of all types within the furry fandom, but anyone is welcome. We're friendly towards members of the LGBTQ+ community and aiming to offer a safe"
    }
  ],
  [
    "earthstream.social",
    {
      description:
        "earthstream federated social server running Mastodon - focus on environmental, trade, human rights, and other social and global issues."
    }
  ],
  [
    "technews.social",
    {
      description:
        "TechNews.Social is a site dedicated to stories about technology, primarily, but not exclusively as it is used in business and commerce. Sponsored by ITWC Canada."
    }
  ],
  [
    "veganism.social",
    {
      description:
        "Veganism Social is a welcoming space on the internet for vegans to connect and engage with the broader decentralized social media community."
    }
  ],
  [
    "hostux.social",
    {
      description:
        "European mastodon instance hosted in Luxembourg. Also beer, privacy and free software lovers. Join us! This service is managed by alarig and valere. Photo from https://www.flickr.com/photos/cogdog/"
    }
  ],
  [
    "epicure.social",
    {
      description:
        "A Mastodon community with a food and wine focus. Mainly English speaking, open to all epicurians."
    }
  ],
  [
    "mastodon.vanlife.is",
    {
      description:
        "This is a Mastodon server meant for those who are living or are curious about living the #vanlife. But all are welcome!"
    }
  ],
  [
    "squawk.mytransponder.com",
    { description: "myTransponder makes aviation more social." }
  ],
  [
    "peoplemaking.games",
    {
      description:
        "We're a community of folks who celebrate the craft of creating interactive experiences, whether they're working in games or around them! This is a space for games folks and creatives to call home!"
    }
  ],
  [
    "union.place",
    {
      description:
        "The Union Place: a federated server for union members, organizations, friends, and allies. If you support labor and labor rights, you have a place here!"
    }
  ],
  [
    "urbanists.social",
    {
      description:
        "We're a server for people who like bikes, transit, and walkable cities. Let's get to know each other!"
    }
  ],
  [
    "musician.social",
    { description: "Mastodon site for Musicians and people into Music." }
  ],
  [
    "toot.garden",
    {
      description:
        "A server for the creative mind. Focused primarily on casual gaming, art, and the general things in life. We are all linked through nature, kindness, humanity, and now- the internet."
    }
  ],
  [
    "social.veraciousnetwork.com",
    {
      description:
        "Veracious Network hosted in central Ohio, US is comprised of folks interested in gaming, technology, science, and open source. 18+ content allowed (only with content warning included)."
    }
  ],
  [
    "mastodonapp.uk",
    {
      description:
        "UK Hosted and Managed Mastodon Instance. General communal space for discussion, everyone welcome!"
    }
  ],
  [
    "mastodon.au",
    {
      description:
        "No description because we couldn't make up our minds and went fishing instead 😆"
    }
  ],
  [
    "cosocial.ca",
    {
      description:
        "A co-op run social media server for all Canadians. More info at https://cosocial.info/"
    }
  ]
]);

export const useFediverseStore = defineStore("fediverse", {
  state: () => ({
    sites: useStorage("fediverseSites", new Map(fediSites)),
    posts: useStorage("posts", new Map()),
    lastUpdated: useStorage("fediverseLastUpdated", null)
  }),

  getters: {
    getSites(state) {
      return Array.from(state.sites.keys());
    },
    // Return sorted array of post objects
    currentPosts(state) {
      const postArr = Array.from(this.posts.values());

      console.log("POST ARRAY", postArr);

      const sorted = postArr.sort(
        (objA, objB) =>
          Number(objB.favourites_count) - Number(objA.favourites_count)
      );

      return sorted;
    }
  },

  actions: {
    loadFediverseFeed(site) {
      console.log(site);
      //  if (! this.sites.has(site)) {
      fetch("https://" + site + "/api/v1/trends/statuses")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.forEach((post) => {
            console.log("SETTING PostID: ", post.id);
            console.log("POST: ", post);
            this.posts.set(post.id, post);
          });
        });
      //  }
    }
  }
});
