# Monsters Rolodex App

The **Monsters Rolodex App** is a React-based application that displays a list of "monsters" fetched from an API. Users can search for monsters by name using a search bar, and the app dynamically filters the displayed monsters based on the search input. The app is styled with custom CSS and provides a fun and interactive user experience.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Features

- Fetches a list of monsters from an external API.
- Dynamically filters monsters based on user input in the search bar.
- Styled with hover effects and responsive design.
- Built using **React** and bootstrapped with **Create React App**.

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you eject, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## How to Deploy the App Using Yarn

You can deploy the app to **GitHub Pages** so that anyone can access it via a public URL.

### Steps to Deploy

1. **Install `gh-pages`**:  
   Install the `gh-pages` package as a development dependency:
   ```bash
   yarn add gh-pages --dev

2. **update `package.json`**:
   Add yjr folloing fields to your `package.json` file:

   - Add a `homepage` field:
     ```jason
      "homepage": "https://<your-username>.github.io/monsters-rolodex"
  Replace `<your-username>` with your GitHub username.

  - Add the following scripts under the `scripts` section:
  ```json
   "predeploy": "yarn build",
   "deploy": "gh-pages -d build"`



