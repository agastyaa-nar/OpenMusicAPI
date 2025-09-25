import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    rules: {
      "arrow-parens": ["error", "always"],
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "quotes": ["error", "single"],
      "linebreak-style": ["error", "unix"],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
