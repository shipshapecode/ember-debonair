ember-debonair
==============================================================================

<a href="https://shipshape.io/"><img src="http://i.imgur.com/KVqNjgO.png" alt="Ship Shape" width="100" height="100"/></a>

**[ember-debonair is built and maintained by Ship Shape. Contact us for Ember.js consulting, development, and training for your project](https://shipshape.io/ember-consulting)**.

[![npm version](https://badge.fury.io/js/ember-debonair.svg)](http://badge.fury.io/js/ember-debonair)
[![Ember Observer Score](http://emberobserver.com/badges/ember-debonair.svg)](http://emberobserver.com/addons/ember-debonair)
[![Build Status](https://travis-ci.org/shipshapecode/ember-debonair.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-debonair) [![Greenkeeper badge](https://badges.greenkeeper.io/shipshapecode/ember-debonair.svg)](https://greenkeeper.io/)

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above

# About
Ember-debonair is an oppinionated set of ESLint rules, addons, configurations, etc. that you can use to get up and running quickly with your Ember app or addon. You can use these addons to enforce code style and code coverage, setup a grid with flexi, use SCSS for your styles, etc. The rules and addons, included here, are heavily used throughout the Ember community, but are tweaked slightly to the opinions I wanted to enforce for [Ship Shape](https://shipshape.io) addons and apps.

Installation
------------------------------------------------------------------------------
```
ember install ember-debonair
```

# Packages

## App Styling
* [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) Allows using scss for styles
* [ember-component-css](https://github.com/ebryn/ember-component-css) Allows defining styles inside component pod directories
* [flexi](https://github.com/html-next/flexi) Provides a lightweight grid based on flexbox

## Code Climate / Test Coverage
* [codeclimate-test-reporter](https://github.com/codeclimate/javascript-test-reporter) Uploads code coverage data, during Travis build
* [ember-cli-code-coverage](https://github.com/kategengler/ember-cli-code-coverage) Computes code coverage data

## Code Style
* [ember-cli-eslint](https://github.com/ember-cli/ember-cli-eslint) Allows using ESLint to enforce JS style
* [ember-cli-stylelint](https://github.com/billybonks/ember-cli-stylelint) Enforce style for your scss files
* [ember-cli-template-lint](https://github.com/rwjblue/ember-cli-template-lint) Enforces template styles
* [eslint-plugin-ember](https://github.com/ember-cli/eslint-plugin-ember)
* [eslint-plugin-ember-suave](https://github.com/DockYard/eslint-plugin-ember-suave)
* [stylelint-config-ship-shape](https://github.com/shipshapecode/stylelint-config-ship-shape)

## Misc
* [ember-chrome-devtools](https://github.com/dwickern/ember-chrome-devtools)
* [ember-cli-autoprefixer](https://github.com/kimroen/ember-cli-autoprefixer) Automatically add vendor prefixes to styles

# Files

## ESLint
* `.eslintrc.js` Extends `eslint-plugin-ship-shape`
* `/tests/.eslintrc.js` Uses the default `embertest` from ember-cli-eslint

## Stylelint
* `.stylelintrc.js` Extends `stylelint-config-ship-shape`

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
