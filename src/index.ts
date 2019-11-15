import path from "path";

declare namespace JestAllureReporter {
    type ReporterConfig = {
        resultsDir: string
    }
}

class JestAllureReporter implements jest.Reporter {
    private reporterOptions: JestAllureReporter.ReporterConfig;

    constructor(globalConfig: jest.GlobalConfig, options: Partial<JestAllureReporter.ReporterConfig> = {}) {
        this.reporterOptions = { resultsDir: path.resolve(".", options.resultsDir || "allure-results") };
        console.log('-----inside jest-alure woooooohoooo vvv');
        console.log('this.reporterOptions');
        console.log(JSON.stringify(this.reporterOptions));
        console.log('options');
        console.log(options);
        console.log('-----inside jest-alure woooooohoooo ^^^');
    }

    onTestStart(test: jest.Test) {
        const setupPath = require.resolve('./setup');
        const setupTestFrameworkScriptFile = test.context.config.setupTestFrameworkScriptFile;
        if (!setupTestFrameworkScriptFile) {
            test.context.config = { ...test.context.config, setupTestFrameworkScriptFile: setupPath }
        }
    }
}

export = JestAllureReporter;
