/* eslint-disable */
module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      'babel-eslint',
      'codeclimate-test-reporter',
      'eslint-plugin-ship-shape'
      ])
    .then(() => {
      return this.addAddonsToProject({
        packages: [
          'ember-cli-code-coverage',
          'ember-cli-eslint',
          'ember-cli-sass'
        ]
      });
    });
  }
};
