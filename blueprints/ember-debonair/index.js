module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        {
          name:'ember-cli-eslint',
          target:'3.0.0'
        }
      ]
    });
  }
};
