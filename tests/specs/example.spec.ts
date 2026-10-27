// @ts-check

import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/homepage';

test('deve ler o título da página', async ({ page }) => {
  const homepage = new Homepage(page);

  await homepage.acessar()
  await expect(homepage.titleLocator).toBeVisible()
});
