import { test, expect } from '@playwright/test'
const URL = 'http://localhost:5173/'
test('Code Review', async ({ page }) => {
  await page.goto(URL)
  await page.waitForTimeout(2000)
  await page.getByTestId('on/off-button').click()
  await page.getByRole('button', { name: 'Click to Start' }).click()
  await expect(page.locator('sc-dIowON iHzsoG')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Charmander -' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Venusaur -' })).toBeVisible()
})
