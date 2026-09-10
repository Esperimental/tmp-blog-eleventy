export default function (config) {
  config.addPassthroughCopy("src/assets");
  config.addFilter("isoDate", value => new Date(value).toISOString().slice(0, 10));
  return {
    pathPrefix: process.env.SITE_PATH_PREFIX || "/",
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: false
  };
}
