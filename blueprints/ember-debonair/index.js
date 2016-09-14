module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      'codeclimate-test-reporter',
      'eslint-plugin-ship-shape'
      ])
    .then(() => {
      return this.addAddonsToProject({
        packages: [
          'ember-cli-blanket',
          'ember-cli-eslint',
        ]
      });
    });
  }
};
