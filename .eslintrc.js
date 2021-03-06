module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },

    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": ["react", "jsx-a11y", "import"],

    "rules": {
        "indent": ["error", 4],
        "max-len": ["error", 150],
        "no-console": 0,
        "no-mixed-operators": 0,
        "no-underscore-dangle": 0,
        "no-irregular-whitespace": 0,
        "newline-after-var": 0,
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-unused-expressions": [
            1,
            {
                "allowShortCircuit": true
            }
        ],
        "semi": 0,
        "quotes": 0,
        "arrow-parens": 0,
        "arrow-body-style": 0,
        "no-use-before-define": 1,
        "react/jsx-filename-extension": ["error", {"extensions": [".js", ".jsx"]}],
        "react/prefer-stateless-function": 0,
        "react/require-default-props": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": 0,
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "import/no-extraneous-dependencies": 0,
        "jsx-a11y/href-no-hash": 0,
        //"linebreak-style":["error", "windows"]
    },
    "globals": {
        "fetch": true,
        "__DEV__": true,
        "alert": true,
        "require": true,
    }
};