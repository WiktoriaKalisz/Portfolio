E2E tests (Cypress)

This repository includes example end-to-end tests using Cypress.

Install dependencies:

```bash
npm install
```

Run the dev server and execute Cypress tests (headless):

```bash
npm run test:e2e
```

Open the Cypress Test Runner (interactive):

```bash
npm run test:e2e:open
```

Notes:
- The `test:e2e` and `test:e2e:open` scripts use `start-server-and-test` to start the Vite dev server at `http://localhost:5173` before running Cypress.
- If your dev server runs on a different port, update `cypress.config.js` and the npm scripts accordingly.
