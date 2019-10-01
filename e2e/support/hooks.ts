import { After, Before, Status } from "cucumber";
import { browser } from "protractor";

// This will run before each scenario
Before({timeout: 100 * 10000}, async function() {
// Opens the website to the default URL in the 'protractor.config.ts' file
    await browser.get("");
});

// This will run after every scenario
After({timeout: 100 * 1000}, async function(scenario) {
    // Check to see if the scenario failed
    if (scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        // Attach screenshot to report
        this.attach(screenShot, "image/png");
    }
});
