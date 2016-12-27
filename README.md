# Ember-debonair

<a href="https://shipshape.io/"><img src="http://i.imgur.com/bU4ABmk.png" width="100" height="100"/></a>

[![npm version](https://badge.fury.io/js/ember-debonair.svg)](http://badge.fury.io/js/ember-debonair)
[![Build Status](https://travis-ci.org/shipshapecode/ember-debonair.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-debonair)

Ember-debonair is an oppinionated set of ESLint rules, addons, configurations, etc. that you can use to get up and running quickly with your Ember app or addon. You can use these addons to enforce code style and code coverage, setup a grid with flexi, use SCSS for your styles, etc. The rules and addons, included here, are heavily used throughout the Ember community, but are tweaked slightly to the opinions I wanted to enforce for [Ship Shape](https://shipshape.io) addons and apps.

# Installation
```bash
ember install ember-debonair
```
# Included packages

## App Styling
* [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass)
* [flexi](https://github.com/html-next/flexi)

## Code Climate / Test Coverage
`codeclimate-test-reporter` is added to the project, so that we can easily update test coverage stats using Travis.

## Code Style
* [ember-cli-eslint](https://github.com/ember-cli/ember-cli-eslint)
* [ember-cli-template-lint](https://github.com/rwjblue/ember-cli-template-lint)
* [eslint-plugin-ship-shape](https://github.com/shipshapecode/eslint-plugin-ship-shape)

## Misc
* [ember-computed-decorators](https://github.com/rwjblue/ember-computed-decorators)
