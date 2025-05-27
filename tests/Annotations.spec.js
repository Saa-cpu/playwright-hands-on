import { test, expect } from '@playwright/test';

//Only annotation
test.only('test1', async ({ page }) => {
    console.log('This is test1')
})

test('test2', async ({ page }) => {
    console.log('This is test2')
})
    

//Conditional Skip annotation
test('test3', async ({ page, browserName }) => {
    console.log('This is test3')
    if (browserName === 'firefox') {
        test.skip();
    }
})

//Fixme annotation
test('test4', async ({ page }) => {
    test.fixme();
    console.log('This is test4')
})

//Fail annotation
test('test5', async ({ page }) => {
    test.fail() //Makes the test fail
    console.log('This is test5')
    expect(1).toBe(1); //in normal cases this will pass since we need this failed it will fail
    //expect(1).toBe(2); //Here this is failing we want the test to fail therefore overall this TC will pass
})

//Conditional fail annotation
//In the below test 
test('test6', async ({ page, browserName}) => {
    console.log('This is test6')
    if(browserName === 'chromium') //pass if we run in chrome
    {
        test.fail() //expected to fail
    }
    //pass + fail = fail
    //fail + fail = pass
})

test('test7', async ({ page, browserName}) => {
    test.slow(); //Will increase the timeout 3x (check the timeout in configs)
    test.setTimeout(5000); //For this specific test the timeout will be 5 secs
    await page.goto('https://demoblaze.com/index.html');
    console.log('This is test7')
    
})