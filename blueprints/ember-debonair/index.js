/* eslint-disable */
module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        'ember-cli-code-coverage',
        'ember-cli-eslint',
        'ember-cli-sass'
      ]
    })
    .then(() => {
      return this.addPackagesToProject([
        'babel-eslint',
        'codeclimate-test-reporter',
        'ember-template-lint',
        'eslint-plugin-ship-shape'
      ]);
    });
  }
};
