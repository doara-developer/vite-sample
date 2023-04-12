module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "standard-with-typescript"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser"
  },
  parser: "vue-eslint-parser",
  plugins: [
    "vue"
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
