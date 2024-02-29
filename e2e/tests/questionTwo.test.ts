import { test, expect } from '@playwright/test'
const URL = 'http://localhost:5173/pokemon/2'
test('Should be able to verify correct src of image for Ivysaur', async ({
  page,
}) => {
  await page.goto(URL)
  const Ivysaur = await page.getByRole('img').first()
  //Should be able to verify correct src of image for Ivysaur
  //Write your test here
})
