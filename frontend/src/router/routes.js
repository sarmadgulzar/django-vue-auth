const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue"), name: "index" },
      {
        path: "register/",
        component: () => import("pages/Register.vue"),
        name: "register",
      },
      {
        path: "login/",
        component: () => import("pages/Login.vue"),
        name: "login",
      },
      {
        path: "dashboard/",
        component: () => import("pages/Dashboard.vue"),
        meta: { requiresAuth: true },
        name: "dashboard",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
