//questionOne.test.ts
// import { test, expect } from '@playwright/test'
// const URL = 'http://localhost:5173/'
// test('Should be able to click on link for Charmander and verify weaknesses', async ({
//   page,
// }) => {
//   await page.goto(URL)
//   await page.getByTestId('on/off-button').click()
//   await page.getByRole('button', { name: 'Click to Start' }).click()
//   // Should be able to click on link for Charmander and verify weaknesses
//   await page.getByRole('link', { name: 'Charmander -' }).click()
//   await expect(
//     page.getByRole('cell', { name: 'Water, Ground, Rock' })
//   ).toBeVisible()
// })

//questionTwo.test.ts
// import { test, expect } from '@playwright/test'
// const URL = 'http://localhost:5173/pokemon/2'
// test('Should be able to verify correct src of image for Ivysaur', async ({
//   page,
// }) => {
//   await page.goto(URL)
//   const Ivysaur = await page.getByRole('img').first()
//   await expect(Ivysaur).toHaveAttribute(
//     'src',
//     'http://www.serebii.net/pokemongo/pokemon/002.png'
//   )
// })

//Code Review
// should be able to explain why static waits are not optimal and also some alternatives (network wait, wait for loading indicator,waitForFunction etc.)

// Use of Static Waits
// Feedback: The use of await page.waitForTimeout(2000) introduces a static wait, which is generally not recommended because it can lead to flaky tests and unnecessary delays in test execution. Static waits do not adapt to the actual state of the page, which means they either wait too long (slowing down tests) or not long enough (causing tests to fail prematurely).

// Alternatives:

// Network Wait: Use await page.waitForLoadState('networkidle') to wait until there are no more than 2 network connections for at least 500 ms. This is useful when you know a network request signifies the completion of an action.
// Wait for Element: Use await page.locator('yourSelector').waitFor() to wait for an element to be present in the DOM. This is more efficient as it directly targets the readiness of the element you're interested in.
// Wait for Function: Use await page.waitForFunction(() => document.querySelector('yourSelector')) to wait for a specific condition to be met. This is flexible and can be tailored to the exact state you're waiting for.

// Should notice line 8 has a non-optimal selector , should give altnernatives to better selectors (like data test ids, getByRole)
