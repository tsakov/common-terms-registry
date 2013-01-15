var fluid = require("infusion"),
    gpii = fluid.registerNamespace("gpii");

fluid.require("./commonTermsRegistry", require);

gpii.config.makeConfigLoader({
    nodeEnv: gpii.config.getNodeEnv("ctr.development"),
    configPath: gpii.config.getConfigPath() || "./configs"
});
