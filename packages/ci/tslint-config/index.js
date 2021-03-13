module.exports = {
  "defaultSeverity": "error",
  "extends": [
      "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
    "ban-comma-operator": false,
    "curly": [true, "ignore-same-line"],
    "function-constructor": true,
    "no-async-without-await": true,
    "no-dynamic-delete": true,
    "no-inferred-empty-object-type": false,
    "no-invalid-this": [true, "check-function-in-method"],
    "no-null-keyword": false,
    "no-return-await": true,
    "no-sparse-arrays": true,

    "align": [true, "parameters"],
    "indent": [true, "spaces", 2],
    "quotemark": [true, "single", "avoid-escape", "avoid-template"],
    "semicolon": [true, "always"],
    "variable-name": [true, "ban-keywords", "check-format", "allow-pascal-case", "allow-leading-underscore"],
    "max-line-length": { "options": 180 },
    "max-classes-per-file": false,
    "only-arrow-functions": false,
    "ordered-imports": false,
    "no-empty": [true, "allow-empty-catch"],
    "no-console": false
  },
  "rulesDirectory": []
}
