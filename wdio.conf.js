import fs from 'fs';
import path from 'path';
import AllureReporter from '@wdio/allure-reporter';
import { execSync } from 'child_process';

export const config =  {
    runner: 'local',
    specs: [
        './features/**/**.feature'
    ],
    suites: {
        login:[
            './features/login.feature'
        ]
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec',
        ['allure', 
            {outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true
            }
        ]
    ],

    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: true
    },
    
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        // let images = 
        await browser.takeScreenshot();
        // AllureReporter.addAttachment('Screenshot', images) // Screenshot otomatis akan diambil oleh WebdriverIO

    },
    

    onComplete: () => {
        try {
            execSync('npx allure generate allure-results --clean -o allure-report');
            console.log('Allure report generated successfully.');
        } catch (error) {
            console.error('Error generating Allure report:', error);
        }
    },
}
