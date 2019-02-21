const PROJECT_NAME = 'webdriverio-stencil';

exports.config = {
    runner: 'local',
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: true,
    maxInstances: 10,
    capabilities: [{
        os: 'Windows',
        os_version: '10',
        browser: 'Chrome',
        browser_version: '72.0',
        project: PROJECT_NAME
    }],
    port: 9515,
    path: '/',
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
    },
    specs: [
        './test/specs/**/*.js'
    ]
};