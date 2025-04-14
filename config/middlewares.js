module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      // L'option 'enabled' est dépréciée et peut causer des problèmes
      // selon l'avertissement que vous avez reçu
      // enabled: true, ← SUPPRIMEZ CETTE LIGNE

      origin: [
        "http://localhost:3000",
        "http://localhost",
        "https://horseplace-anthony-ds-projects.vercel.app",
        // Ajoutez le domaine de votre backend Strapi
        "https://horsplace-content-manager.onrender.com",
      ],
      // Ajoutez ces configurations manquantes
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeaderOnError: true,
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
