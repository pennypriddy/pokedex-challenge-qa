import { expect, test } from '@playwright/test'
const URL = 'http://localhost:5173/'
test('Should be able to filter by type and weakness, click on link for golem and verify evolutions', async ({
  page,
}) => {
  await page.goto(URL)
  await page.getByTestId('on/off-button').click()
  await page.getByRole('button', { name: 'Click to Start' }).click()
  // 1. Filter to only show ground type pokemon
  // 2. Add an additional filter to change weakness to fighting
  // 3. Click on Graveler
  // 4. Confirm that it is a ground type that evolves from geodude into golem
})