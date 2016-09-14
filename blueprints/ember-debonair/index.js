module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackageToProject('eslint-plugin-ship-shape')
    .then(function() {
      return this.addAddonsToProject({
        packages: [
          {
            name:'ember-cli-eslint',
            target:'3.0.0'
          }
        ]
      });
    });
  }
};
