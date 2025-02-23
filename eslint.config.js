import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "react/react-in-jsx-scope": "off", // ✅ No need to import React in JSX files
      "no-console": "warn", // ⚠️ Warn when using console.log()
      "react/prop-types": "off", // ✅ Disable prop-types enforcement
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.recommended,
];
