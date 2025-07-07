import "dotenv/config";

export default {
  expo: {
    name: "ChatApp",
    slug: "ChatApp",
    version: "1.0.0",
    extra: {
      apiKey: process.env.API_KEY,
    },
  },
};
