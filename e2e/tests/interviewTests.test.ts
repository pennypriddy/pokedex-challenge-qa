import { expect, test } from '@playwright/test'
const URL = 'http://localhost:5173/'
test('Should be able to click on link for Charmander and verify weaknesses', async ({
  page,
}) => {
  await page.goto(URL)
  await page.getByTestId('on/off-button').click()
  await page.getByRole('button', { name: 'Click to Start' }).click()
  // Should be able to filter to filter type to a ground type pokemon that's weak to fighting, click on graveler, 
  // and confirm it has a previous and next evolution 
  //WRITE YOUR TEST HERE
})
