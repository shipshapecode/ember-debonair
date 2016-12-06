/* eslint-disable */
module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-cli-code-coverage'},
        {name: 'ember-cli-eslint'},
        {name: 'ember-cli-sass'},
        {name: 'ember-cli-template-lint'},
        {name: 'flexi'}
      ]
    })
    .then(() => {
      return this.addPackagesToProject([
        {name: 'babel-eslint'},
        {name: 'codeclimate-test-reporter'},
        {name: 'eslint-plugin-ship-shape'}
      ]);
    });
  }
};
