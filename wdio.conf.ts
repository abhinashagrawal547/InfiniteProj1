

const env = process.env.ENV || 'local'

const baseUrls: Record<string, string> = {
    local: 'http://localhost:3000',
    qa: 'https://your-qa-url.com'
}

export const config: WebdriverIO.Config = ({

    runner: 'local',

    specs: [
        './test/specs/**/*.spec.ts'
    ],
    exclude: [],

    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: process.env.CI ? ['--headless', '--no-sandbox'] : []
        }
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: baseUrls[env],
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Two reporters — Allure for rich HTML, 
    // JUnit for Azure Test Plans/native Tests tab
    reporters: [
        'spec',
        ['allure', { outputDir: 'allure-results' }],
        ['junit', {
            outputDir: 'junit-results',
            outputFileFormat: function (options) {
                return `results-${options.cid}.xml`
            }
        }]
    ]
})