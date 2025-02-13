export default [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: "*", // Ou ["https://seufrontend.vercel.app"]
      headers: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    },
  },
  "strapi::security",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
