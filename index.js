module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment", "inside-block"],
        ignoreAtRules: ["import", "if", "else"]
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "for",
          "each",
          "if",
          "else",
          "mixin",
          "/^mixin-/",
          "include"
        ]
      }
    ],
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-newline-after": [
      "always-multi-line",
      { ignoreAtRules: ["if", "else"] }
    ],
    "block-closing-brace-newline-before": "always-multi-line",
    "color-hex-case": [
      "lower",
      { message: "Lowercase letters are easier to distinguish from numbers" }
    ],
    "color-hex-length": "short",
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment", "stylelint-commands"]
      }
    ],
    "custom-property-empty-line-before": "never",
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-empty-line-before": "never",
    "declaration-no-important": true,
    "font-family-name-quotes": [
      "always-where-recommended",
      { severity: "warning" }
    ],
    "font-family-no-duplicate-names": [true, { severity: "warning" }],
    "font-family-no-missing-generic-family-keyword": [
      true,
      { severity: "warning" }
    ],
    "function-name-case": ["lower", { ignoreFunctions: ["/^get.*$/"] }],
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    indentation: 4,
    "max-line-length": [
      80,
      {
        ignorePattern: ["/https?://[0-9,a-z]*.*/"],
        severity: "warning"
      }
    ],
    "max-nesting-depth": 5,
    "media-feature-name-no-unknown": [true, { severity: "warning" }],
    "media-feature-name-no-vendor-prefix": true,
    "media-query-list-comma-newline-before": "never-multi-line",
    "no-descending-specificity": [true, { severity: "warning" }],
    "no-empty-first-line": true,
    "number-max-precision": 5,
    "property-no-vendor-prefix": [true, { ignoreProperties: ["appearance"] }],
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment", "inside-block"]
      }
    ],
    "selector-attribute-quotes": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-max-attribute": 2,
    "selector-max-class": 4,
    "selector-max-compound-selectors": 4,
    "selector-max-id": 0,
    "selector-max-type": 2,
    "selector-max-universal": 1,
    "selector-no-qualifying-type": [true, { ignore: ["attribute", "class"] }],
    "selector-no-vendor-prefix": true,
    "selector-type-no-unknown": [true, { severity: "warning" }],
    "shorthand-property-no-redundant-values": true,
    "string-quotes": "double",
    "value-keyword-case": ["lower", { ignoreProperties: ["/family/"] }],
    "value-list-comma-newline-before": "never-multi-line",
    "value-no-vendor-prefix": [true, { ignoreValues: ["tap-highlight-color"] }]
  }
};
