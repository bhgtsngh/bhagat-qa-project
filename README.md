

---

```markdown
 Dream Portal QA Automation

End-to-end automated testing for the Dream Portal web application using [Playwright](https://playwright.dev/) with TypeScript.  
This project validates UI elements, dream diary entries, AI-generated dream type classifications, and summary statistics across different pages.

---

 Project Structure

```

bhagat-qa-project/
├── tests/
│   ├── specs/
│   │   ├── ai-validation.spec.ts      # AI classification test
│   │   ├── diary.spec.ts              # Diary page tests
│   │   ├── home.spec.ts               # Home page behavior
│   │   └── total.spec.ts              # Dream summary statistics
│   └── utils/
│       └── ai-validator.ts            # AI logic for classifying dreams (Good/Bad)
├── playwright.config.ts               # Playwright config file
└── README.md

````

---

 Features Tested

 Home Page
- Verifies loading animation is shown and main content appears afterward
- Checks if the Diary and Summary buttons open in new tabs

 Dream Diary Page
- Validates total dream entries = 10
- Ensures every row has all columns filled
- Confirms each dream is classified as either **Good** or **Bad**

 AI Validation
- Uses `ai-validator.ts` logic to classify each dream
- Compares AI output with the actual table entry
- Logs mismatches for debugging

 Dream Summary Page
- Checks if total = Good + Bad count
- Verifies at least one recurring dream is listed

---

 Installation & Setup

 1. Clone the Repository

```bash
git clone https://github.com/yourusername/dream-portal-qa.git
cd dream-portal-qa
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npx playwright test
```

---

## AI Classification Logic (`utils/ai-validator.ts`)

```ts
export function classifyDreamType(dream: string): 'Good' | 'Bad' {
  const goodKeywords = ['flying', 'love', 'happy', 'win'];
  const badKeywords = ['lost', 'falling', 'death', 'cry'];

  const lowerDream = dream.toLowerCase();

  for (const word of goodKeywords) {
    if (lowerDream.includes(word)) return 'Good';
  }
  for (const word of badKeywords) {
    if (lowerDream.includes(word)) return 'Bad';
  }
  return 'Good'; // default fallback
}
```

---

## Tech Stack

* [Playwright](https://playwright.dev/) for browser automation
* TypeScript for type-safe scripting
* Jest matchers from Playwright Test for assertions

---

## Sample Output

```bash
✓ should display correct dream stats
✓ should only contain Good or Bad dream types
✘ AI classification mismatch:
   Dream: "Lost in maze", Table: Bad, AI: Good
```

---

## How to Generate and View the Report

```bash
# 1. Execute tests (Playwright)
npx playwright test

# 2. Generate Allure report from results
npx allure generate ./allure-results --clean

# 3. Open the HTML report in your browser
npx allure open
```

---

## Future Improvements

* Integrate CI (e.g., GitHub Actions)
* Improve AI classification logic with NLP or ML
* Add visual regression testing

---

## Author

**Bhagat Singh**
Final Year Engineer | Passionate about QA, DevTools & Automation
📧 [mbhagatsingh.work@gmail.com](mailto:mbhagatsingh.work@gmail.com)
🔗 [LinkedIn](https://linkedin.com/in/bhagatsinghm) | [GitHub](https://github.com/bhgtsngh)

---

## License

MIT License © 2025 Bhagat Singh

````

---

### To Use:
1. Replace `yourusername` in the clone URL if needed.
2. Save this content into your `README.md`.
3. Commit & push:
```bash
git add README.md
git commit -m "Updated README with full structure and Allure instructions"
git push origin main
````


