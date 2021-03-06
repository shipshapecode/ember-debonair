/* eslint-env node */

const RSVP = require('rsvp');
const sortBy = require('sort-by');

module.exports = {
  normalizeEntityName() {
  },

  afterInstall(options) {
    const isAddon = options.project.isEmberCLIAddon();

    return this._chooseAddonsToInstall(isAddon)
      .then((addons) => {
        return RSVP.hash({
          addons,
          packages: this._choosePackagesToInstall(isAddon)
        });
      })
      .then((selected) => {
        let promises = [];

        if (selected.addons && selected.addons.length) {
          promises = [
            this.addAddonsToProject({
              packages: selected.addons
            })
          ];
        }

        if (selected.packages && selected.packages.length) {
          promises = [...promises, this.addPackagesToProject(selected.packages)];
        }

        return RSVP.all(promises);
      });
  },

  /**
   * Uses inquirer to prompt the user to select which addons to install
   * @param {boolean} isAddon Whether the project this is installed in is an addon or not
   * @returns {Promise} Resolves into array of selected addons
   * @private
   */
  _chooseAddonsToInstall(isAddon) {
    let choices = [
      {
        checked: true,
        name: 'ember-chrome-devtools',
        value: { name: 'ember-chrome-devtools' }
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
      }
    ];

    if (isAddon) {
      // If an addon, add addon only dependency choices
      choices = [...choices,
        {
          checked: true,
          name: 'ember-fastboot-addon-tests',
          value: { name: 'ember-fastboot-addon-tests' }
        }
      ];
    } else {
      // If an app, add app only dependency choices
      choices = [...choices,
        {
          checked: true,
          name: 'ember-cli-autoprefixer',
          value: { name: 'ember-cli-autoprefixer' }
        }
      ];
    }

    // Sort in alphabetical order
    choices.sort(sortBy('name'));

    // Ask which ember addons to install
    return this.ui.prompt({
      type: 'checkbox',
      name: 'addonsToInstall',
      message: 'Which addons would you like to install?',
      choices
    })
      .then((selected) => {
        return selected.addonsToInstall;
      });
  },

  /**
   * Uses inquirer to prompt the user to select which packages to install
   * @param {boolean} isAddon Whether the project this is installed in is an addon or not
   * @returns {Promise} Resolves into array of selected packages
   * @private
   */
  _choosePackagesToInstall(isAddon) {
    let choices = [
      {
        checked: true,
        name: 'codeclimate-test-reporter',
        value: { name: 'codeclimate-test-reporter' }
      },
      {
        checked: true,
        name: 'eslint-plugin-ember-suave',
        value: { name: 'eslint-plugin-ember-suave' }
      },
      {
        checked: true,
        name: 'stylelint-config-ship-shape',
        value: { name: 'stylelint-config-ship-shape' }
      }
    ];

    // Ask which npm packages to install
    return this.ui.prompt({
      type: 'checkbox',
      name: 'packagesToInstall',
      message: 'Which packages would you like to install?',
      choices
    })
      .then((selected) => {
        return selected.packagesToInstall;
      });
  }
};
