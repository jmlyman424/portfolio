module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:@next/next/recommended", "next/core-web-vitals", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    "no-shadow": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": [
      "error", {
        "required": {
          "some": ["nesting","id"]
        }
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
