# Ember-debonair

<a href="https://shipshape.io/"><img src="http://i.imgur.com/bU4ABmk.png" width="100" height="100"/></a>

[![npm version](https://badge.fury.io/js/ember-debonair.svg)](http://badge.fury.io/js/ember-debonair)
[![Ember Observer Score](http://emberobserver.com/badges/ember-debonair.svg)](http://emberobserver.com/addons/ember-debonair)
[![Build Status](https://travis-ci.org/shipshapecode/ember-debonair.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-debonair)


# About
Ember-debonair is an oppinionated set of ESLint rules, addons, configurations, etc. that you can use to get up and running quickly with your Ember app or addon. You can use these addons to enforce code style and code coverage, setup a grid with flexi, use SCSS for your styles, etc. The rules and addons, included here, are heavily used throughout the Ember community, but are tweaked slightly to the opinions I wanted to enforce for [Ship Shape](https://shipshape.io) addons and apps.

# Installation
```bash
ember install ember-debonair
```
# Packages

## App Styling
* [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) Allows using scss for styles
* [flexi](https://github.com/html-next/flexi) Provides a lightweight grid based on flexbox

## Code Climate / Test Coverage
* [codeclimate-test-reporter](https://github.com/codeclimate/javascript-test-reporter) Uploads code coverage data, during Travis build
* [ember-cli-code-coverage](https://github.com/kategengler/ember-cli-code-coverage) Computes code coverage data

## Code Style
* [ember-cli-eslint](https://github.com/ember-cli/ember-cli-eslint) Allows using ESLint to enforce JS style
* [ember-cli-stylelint](https://github.com/billybonks/ember-cli-stylelint) Enforce style for your scss files
* [ember-cli-template-lint](https://github.com/rwjblue/ember-cli-template-lint) Enforces template styles
* [eslint-plugin-ship-shape](https://github.com/shipshapecode/eslint-plugin-ship-shape) A combination of eslint-plugin-ember-suave and eslint-plugin-netguru-ember that combines the best of each ruleset
* [stylelint-config-ship-shape](https://github.com/shipshapecode/stylelint-config-ship-shape)

## Misc
* [ember-cli-autoprefixer](https://github.com/kimroen/ember-cli-autoprefixer) Automatically add vendor prefixes to styles
* [ember-computed-decorators](https://github.com/rwjblue/ember-computed-decorators) Allows using decorators in place of computed properties, to DRY up your code.

# Files

## ESLint
* `.eslintrc.js` Extends `eslint-plugin-ship-shape`
* `/tests/.eslintrc.js` Uses the default `embertest` from ember-cli-eslint

## Stylelint
* `.stylelintrc.js` Extends `stylelint-config-ship-shape`
