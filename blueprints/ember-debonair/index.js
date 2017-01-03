/* eslint-disable */
module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-cli-code-coverage'},
        {name: 'ember-cli-sass'},
        {name: 'ember-cli-stylelint'},
        {name: 'ember-cli-template-lint'},
        {name: 'ember-computed-decorators'},
        {name: 'html-next/flexi'}
      ]
    })
    .then(() => {
      return this.addPackagesToProject([
        {name: 'babel-eslint'},
        {name: 'codeclimate-test-reporter'},
        {name: 'ember-cli-eslint'},
        {name: 'eslint-plugin-ship-shape'},
        {name: 'stylelint-config-ship-shape'}
      ]);
    });
  }
};
