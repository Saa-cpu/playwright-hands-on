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



