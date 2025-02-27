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

<h2>Update <code>package.json</code></h2>

<p>Add the following fields to your <code>package.json</code> file:</p>

<h3>Add a <code>homepage</code> field:</h3>
<pre>
<code class="language-json">
"homepage": "https://&lt;your-username&gt;.github.io/monsters-rolodex"
</code>
</pre>
<p>Replace <code>&lt;your-username&gt;</code> with your GitHub username.</p>

<h3>Add the following scripts under the <code>scripts</code> section:</h3>
<pre>
<code class="language-json">
"predeploy": "yarn build",
"deploy": "gh-pages -d build"
</code>
</pre>

<hr />

<h2>Build and Deploy</h2>

<p>Run the following command to deploy the app:</p>
<pre>
<code class="language-bash">
yarn deploy
</code>
</pre>

<p>This will:</p>
<ul>
  <li>Build the app for production.</li>
  <li>Push the contents of the <code>build</code> folder to the <code>gh-pages</code> branch of your GitHub repository.</li>
</ul>

<hr />

<h2>Enable GitHub Pages</h2>

<ol>
  <li>Go to your repository on GitHub.</li>
  <li>Click on the <strong>Settings</strong> tab.</li>
  <li>Scroll down to the <strong>Pages</strong> section.</li>
  <li>Under <strong>Source</strong>, select the <code>gh-pages</code> branch and click <strong>Save</strong>.</li>
</ol>

<hr />

<h2>Access Your App</h2>

<p>Your app will be live at:</p>
<pre>
<code class="language-javascript">
https://&lt;your-username&gt;.github.io/monsters-rolodex
</code>
</pre>
<p>Replace <code>&lt;your-username&gt;</code> with your GitHub username.</p>
   

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you eject, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

---

## Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

---

## Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

---

## Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

---

## Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

---

## `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

