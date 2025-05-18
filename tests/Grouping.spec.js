import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('this is before All hook');
})

test.afterAll(async () => {
    console.log('this is after All hook');
})

test.beforeEach(async () => {
    console.log('this is before each hook');
})

test.afterEach(async () => {
    console.log('this is after each hook');
})


test.describe('Group 1', () => {

    test('Test 1', async ({ page }) => {
        console.log('This is test 1');
    })

    test('Test 2', async ({ page }) => {
        console.log('This is test 2');
    })

})

test.describe('Group 2', () => {

    test('Test 3', async ({ page }) => {
        console.log('This is test 3');
    })

    test('Test 4', async ({ page }) => {
        console.log('This is test 4');
    })

})
