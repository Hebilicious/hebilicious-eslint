module.exports = {
  extends: ["@antfu"],
  rules: {
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/comma-dangle": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "yml/quotes": "off",
    "antfu/if-newline": "off",
    "n/prefer-global/process": ["error", "always"],
    "yml/no-empty-mapping-value": "off",
    "antfu/top-level-function": "off"
  },
  overrides: [
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^exports.*$",
            order: ["require", "import", "types", "default"]
          }
        ]
      }
    }
  ]
}
