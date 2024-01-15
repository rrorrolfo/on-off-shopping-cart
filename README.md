# On/Off Shopping cart

Shopping cart app that allows the user to add a product to a shopping cart after writing the name of the product and selecting the shop it belongs to. The user can delete the products in the cart by clicking the "delete" button.

## Technical specifications

This app was bootstrapped with vite-template-redux and adjusted to use redux without Redux-toolkit as Kätlin mentioned that the on/off projects do not use redux-toolkit yet. The folder structure follows the ["feature folders" structure recommended with redux applications](https://redux.js.org/faq/code-structure)

Tech stack:
React was used to build UI components.
React-redux with thunk-actions was used for the app state management.
Typescipt was used tor typechecking the app.
SASS was used for styling components.
Axios was used for handling http requests.
React testing library, vitest, and mock service worker were used for testing the app.

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner
