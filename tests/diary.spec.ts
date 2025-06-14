import { test, expect } from '@playwright/test';
import { DiaryPage } from '../pages/diary.page';
import { classifyDream } from '../utils/ai-validator';

test('AI-based dream classification matches table', async ({ page }) => {
  const diary = new DiaryPage(page);
  await diary.goto();

  const dreams = await diary.getDreamRows();

  for (const { name, type } of dreams) {
    const aiType = await classifyDream(name);

    if (aiType !== type) {
      console.log(`❌ MISMATCH → Dream: "${name}" | AI Classified: "${aiType}" | Expected: "${type}"`);
    } else {
      console.log(`✅ MATCH → Dream: "${name}" correctly classified as "${aiType}"`);
    }

    expect(aiType).toBe(type);
  }
});


