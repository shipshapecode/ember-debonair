/* eslint-disable */

var RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this._chooseAddonsToInstall()
      .then((addons) => {
        return RSVP.hash({
          addons: addons,
          packages: this._choosePackagesToInstall()
        });
      })
      .then((selected) => {
        return RSVP.all([
          this.addAddonsToProject({
            packages: selected.addons
          }),
          this.addPackagesToProject(selected.packages)
        ]);
      });
  },

  /**
   * Uses inquirer to prompt the user to select which addons to install
   * @returns {Promise} Resolves into array of selected addons
   * @private
   */
  _chooseAddonsToInstall: function() {
    // Ask which ember addons to install
    return this.ui.prompt({
      type: 'checkbox',
      name: 'addonsToInstall',
      message: 'Which addons would you like to install?',
      choices: [
        {
          checked: true,
          name: 'ember-cli-autoprefixer',
          value: { name: 'ember-cli-autoprefixer' }
        },
        {
          checked: true,
          name: 'ember-cli-code-coverage',
          value: { name: 'ember-cli-code-coverage' }
        },
        {
          checked: true,
          name: 'ember-cli-sass',
          value: { name: 'ember-cli-sass' }
        },
        {
          checked: true,
          name: 'ember-cli-stylelint',
          value: { name: 'ember-cli-stylelint' }
        },
        {
          checked: true,
          name: 'ember-cli-template-lint',
          value: { name: 'ember-cli-template-lint' }
        },
        {
          checked: true,
          name: 'ember-component-css',
          value: { name: 'ember-component-css' }
        },
        {
          checked: true,
          name: 'ember-computed-decorators',
          value: { name: 'ember-computed-decorators' }
        },
        {
          checked: true,
          name: 'flexi',
          value: { name: 'flexi' }
        }
      ]
    })
      .then((selected) => {
        return selected.addonsToInstall;
      });
  },

  /**
   * Uses inquirer to prompt the user to select which packages to install
   * @returns {Promise} Resolves into array of selected packages
   * @private
   */
  _choosePackagesToInstall: function() {
    // Ask which npm packages to install
    return this.ui.prompt({
      type: 'checkbox',
      name: 'packagesToInstall',
      message: 'Which packages would you like to install?',
      choices: [
        {
          checked: true,
          name: 'babel-eslint',
          value: { name: 'babel-eslint' }
        },
        {
          checked: true,
          name: 'codeclimate-test-reporter',
          value: { name: 'codeclimate-test-reporter' }
        },
        {
          checked: true,
          name: 'ember-cli-eslint',
          value: { name: 'ember-cli-eslint' }
        },
        {
          checked: true,
          name: 'eslint-plugin-ship-shape',
          value: { name: 'eslint-plugin-ship-shape' }
        },
        {
          checked: true,
          name: 'stylelint-config-ship-shape',
          value: { name: 'stylelint-config-ship-shape' }
        }
      ]
    })
      .then((selected) => {
        return selected.packagesToInstall;
      });
  }
};
