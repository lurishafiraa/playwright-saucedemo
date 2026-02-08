# Playwright E2E – SauceDemo
This repository contains an End-to-End (E2E) automated test suite for the sample e-commerce application, implemented using Playwright with TypeScript and the Page Object Model (POM) design pattern.

## Prerequisites
1) Node.js 18+
2) Internet connection (demo site)

## Setup Installation
1) npm install
2) npx playwright install

## Run All Tests
npx playwright test

## Run Spesific Scenario
npx playwright test login.spec.ts

npx playwright test login-invalid.spec.ts

npx playwright test checkout.spec.ts

npx playwright test sorting.spec.ts

## View Report
npx playwright show-report
