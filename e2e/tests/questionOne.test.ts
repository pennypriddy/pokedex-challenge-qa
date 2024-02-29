import { test, expect } from '@playwright/test'
const URL = 'http://localhost:5173/'
test('Should be able to click on link for Charmander and verify weaknesses', async ({
  page,
}) => {
  await page.goto(URL)
  await page.getByTestId('on/off-button').click()
  await page.getByRole('button', { name: 'Click to Start' }).click()
  // Should be able to click on link for Charmander and verify weaknesses
  //WRITE YOUR TEST HERE
})
