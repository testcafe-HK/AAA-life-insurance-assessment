# AAA Life – SDET BDD Automation Framework

This is a **BDD-based automation framework** using:

- **TestCafe + gherkin-testcafe** for UI tests
- **Cucumber (@cucumber/cucumber)** for API tests
- **Axios + AJV** for API validation
- **testcafe-reporter-cucumber-json + multiple-cucumber-html-reporter** for reports

## Project Structure

aaa-life-sdet-bdd/
 ├─ bdd/
 │   ├─ ui/
 │   │   ├─ features/
 │   │   │   └─ saucedemo-ui.feature
 │   │   ├─ steps/
 │   │   │   └─ saucedemo.steps.js
 │   │   └─ pages/
 │   │       ├─ LoginPage.js
 │   │       ├─ InventoryPage.js
 │   │       └─ CheckoutPage.js
 │   └─ api/
 │       ├─ features/
 │       │   └─ booking-api.feature
 │       └─ steps/
 │           └─ booking.steps.js
 ├─ package.json
 └─ README.md

## Install

npm install

(If you still see an FFmpeg error for video, set: FFMPEG_PATH=node_modules/.bin/ffmpeg)

## Run all tests

npm test

## UI only

npm run test:bdd:ui

## API only

npm run test:bdd:api

## UI report (Cucumber JSON + HTML)

npm run test:ui:report
