module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      "plugin:vue/recommended",
      "eslint:recommended",
      "prettier/vue",
    ],
    rules: {
      "no-console": "off",
      "no-debugger": "off",
    },
    globals: {
      $nuxt: true
    },
    parserOptions: {
      parser: "babel-eslint"
    }
  };
