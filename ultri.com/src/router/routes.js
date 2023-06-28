const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      drawer: "Homepage"
    },
    children: [
      { name: "home", path: "", component: () => import("pages/IndexPage.vue") }
    ]
  },

  {
    path: "/pricing",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      drawer: "Homepage"
    },
    children: [
      {
        name: "pricing",
        path: "",
        component: () => import("pages/PricingPage.vue")
      }
    ]
  },

  {
    path: "/orgs",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      drawer: "Logbook"
    },
    children: [
      { name: "orgs", path: "", component: () => import("pages/OrgsPage.vue") }
    ]
  },

  {
    path: "/logbook",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      drawer: "Logbook"
    },
    children: [
      {
        name: "logbook",
        path: "",
        component: () => import("pages/LogbookPage.vue")
      }
    ]
  },

  {
    path: "/canvas",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      drawer: "Canvas"
    },
    children: [
      {
        name: "canvas",
        path: "",
        component: () => import("pages/CanvasPage.vue")
      }
    ]
  },


  {
    path: "/forms/:formName",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/FormWrapperPage.vue") }
    ]
  },

  {
    path: "/org/:orgUid",
    meta: {
      drawer: "Logbook"
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/OrgHomePage.vue") }]
  },

  {
    path: "/stores",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/StoresDebugPage.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
