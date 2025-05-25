import { test, expect } from '@playwright/test';

test('Test1@sanity', async ({ page }) => {
    console.log('This is test 1');
})

test('Test2@sanity', async ({ page }) => {
    console.log('This is test 2');
})

test('Test3@reg', async ({ page }) => {
    console.log('This is test 3');
})

test('Test4@reg', async ({ page }) => {
    console.log('This is test 4');
})

test('Test5@sanity@reg', async ({ page }) => {
    console.log('This is test 5');
})

//To run only sanity
// npx playwright test Tags.spec.js --project chromium --grep "@sanity"

//To run only regression
// npx playwright test Tags.spec.js --project chromium --grep "@reg"

//To run all except regression
// npx playwright test Tags.spec.js --project chromium --grep-invert "@reg"

//To run both regression and sanity Sanity OR Regression
// npx playwright test Tags.spec.js --project chromium --grep "@sanity|@reg" 

//To include sanity and exclude reg
// npx playwright test Tags.spec.js --project chromium --grep "@sanity" --grep-invert "@reg"

