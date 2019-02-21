const PROJECT_NAME = 'webdriverio-stencil';

exports.config = {
    runner: 'local',
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        platform: 'Windows 10',
        browserName: 'chrome',
        version: '72.0',
        name: PROJECT_NAME
    }],
    // Level of logging verbosity: trace | debug | info | warn | error
    logLevel: 'info',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['dot', 'spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};