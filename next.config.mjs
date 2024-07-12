// next.config.mjs
export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.contentstack.io",
        port: "",
        pathname: "/v3/assets/**",
      },
    ],
  },
};
