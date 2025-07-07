import "dotenv/config";

export default {
  expo: {
    name: "ChatApp",
    slug: "ChatApp",
    version: "1.0.0",
    extra: {
      apiKey: process.env.API_KEY,
      eas: {
        projectId: "7a83ac21-bd73-4def-a946-69f132e2c0c9",
      },
    },
  },
};
