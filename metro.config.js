// metro.config.js
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve("metro-react-native-babel-transformer"),
    },
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
    },
  };
})();
