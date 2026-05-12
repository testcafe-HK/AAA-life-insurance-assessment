
Test Case ID

Type

Module

Test Scenario

Test Data

Expected Result

Priority

MED_UI_001

Positive

Header

Verify My Visit page loads

Valid visit

“My Visit (OBGYN)” screen displays correctly

High

MED_UI_002

Positive

Header

Verify patient name and pronoun

Diana, she/her

“Welcome, Diana! (she/her)” displays

High

MED_UI_003

Positive

Header

Verify MyChart status

Active account

“MyChart Active” displays with icon

Medium

MED_UI_004

Positive

Vitals

Verify Blood Pressure displays

140/90

BP value displays in correct card

High

MED_UI_005

Positive

Vitals

Verify Heart Rate displays

86 BPM

Heart Rate displays correctly

High

MED_UI_006

Positive

Vitals

Verify Oxygen displays

98%

Oxygen value displays correctly

High

MED_UI_007

Positive

Vitals

Verify Weight displays

165 lbs

Weight displays correctly

Medium

MED_UI_008

Positive

Vitals

Verify Height displays

6’0”

Height displays correctly

Medium

MED_UI_009

Positive

Visit Checklist

Verify provider details

Yelena O Feldman, DO

Provider name and image display

Medium

MED_UI_010

Positive

Medications

Verify medication list

Vitamin D, Vitamin B, Omega-3

All medications display correctly

High

MED_UI_011

Positive

Pharmacy

Verify pharmacy details

CVS pharmacy data

Pharmacy name and address display

Medium

MED_UI_012

Positive

Health Journey

Verify prescription changes

Fluoxetine 10 MG

Medication displays under START

High

MED_UI_013

Positive

Referrals

Verify referrals

Nutrition, Endocrinology

Referrals display correctly

Medium

MED_UI_014

Positive

Orders

Verify lab orders

CBC, Urinalysis

Orders display correctly

Medium

MED_UI_015

Positive

Navigation

Verify My Visit tab selected

My Visit

My Visit icon is highlighted

Medium







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
