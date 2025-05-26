import { test, expect } from '@playwright/test';

test.only('test1', async ({ page }) => {
    console.log('This is test1')
})

test('test2', async ({ page }) => {
    console.log('This is test2')
})
    

//Conditional Skip
test('test3', async ({ page, browserName }) => {
    console.log('This is test3')
    if (browserName === 'firefox') {
        test.skip();
    }
})

//Fixme
test('test4', async ({ page }) => {
    test.fixme();
    console.log('This is test4')
})
