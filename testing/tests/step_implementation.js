/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};
// front-end section
step("Open Browser Application", async function() {
    await goto("https://localhost:5173");
});

step("Verify that the Internet connection is active", async function() {
    throw 'Unimplemented Step';
});

step("Verify that GPS is activated", async function() {
    throw 'Unimplemented Step';
});

step("Check whether the location can be retrieved successfully", async function() {
    throw 'Unimplemented Step';
    const isOnline = await evaluate(() => navigator.onLine);
    assert.ok(isOnline, "Internet connection is not active");
});

// backend-end section
step("Open API Application", async function() {
    await goto("http://localhost:3000");
});