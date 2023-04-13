// config/webpack/environment.js
const { environment } = require("@rails/webpacker");

// Define a custom loader
const babelLoaderOptions = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};

// Search for existing babel-loader config
const babelLoaderConfig = environment.loaders
  .get("babel")
  .use.find((element) => element.loader === "babel-loader");

if (babelLoaderConfig) {
  // Update the existing babel-loader options if found
  Object.assign(babelLoaderConfig.options, babelLoaderOptions);
} else {
  // Append the custom babel-loader if not found
  environment.loaders.append("babel", {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [{ loader: "babel-loader", options: babelLoaderOptions }],
  });
}

module.exports = environment;
