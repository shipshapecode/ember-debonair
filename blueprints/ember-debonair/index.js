/* eslint-disable */
module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-cli-code-coverage'},
        {name: 'ember-cli-eslint'},
        {name: 'ember-cli-sass'}
      ]
    })
    .then(() => {
      return this.addPackagesToProject([
        {name: 'babel-eslint'},
        {name: 'codeclimate-test-reporter'},
        {name: 'ember-template-lint'},
        {name: 'eslint-plugin-ship-shape'}
      ]);
    });
  }
};
