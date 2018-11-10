# KitchenFire

A simple responsive web app for storing and retrieving recipes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- `JavaScript Runtime` - [Node.js](https://nodejs.org/en/)

- `A Google Firebase account` - [Firebase](https://firebase.google.com)
- You will need to create a new project by clicking `Add Project` and filling in the requested info.
- Click on `Authentication` and then set up sign-in method with `Email/Password`.
- Click on `Database` in the left menu and then `Create Database` under `Cloud Firestore`.
- Select the start mode you desire. You will need to define your own security rules based off your needs.<br>
- Select the `Rules` tab and replace the default with the code below to get you started:

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /recipes/{recipe} {
      allow read, write: if request.auth.uid != null;
    }
    match /users/{userId} {
    	allow create
      allow read: if request.auth.uid != null
      allow write: if request.auth.uid == userId
    }
    match /notifications/{notification} {
      allow read: if request.auth.uid != null;
    }
  }
}
```

Install Firebase tools

```
npm install -g firebase-tools
```

### Installing

Download or clone the repository

```
git clone https://github.com/smyhk/kitchen-fire.git
```

Install packages and dependencies

```
cd /path/to/project/directory
npm install
```

Replace the configuration info in `/src/config/fbConfig.js` with your app's info found by clicking the cog next to `Project Overview`, then `Project Settngs`, and then `Add Firebase to your web app`. Cut and paste the section that looks like

```
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
```

Launch the app in a local development server (optional)

```
npm start
```

Login to Firebase from your console if needed

```
firebase login
```

Initialize Firebase in your project

```
firebase init
Select `functions` and `hosting`
Select your Firebase project
Select language
Enable ESLint (optional)
Select `N` to any overwrites
Install dependencies
Name your public directory `build`
Select `Y` to configure as single page app
```

## Running the tests

```
npm test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deployment

```
npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

```
firebase deploy
```

Deploys the app to Google's cloud hosting services bundled with Firebase.<br>

## Built With

- [Create React App](https://github.com/facebook/create-react-app) - The web framework used.
- [Redux](https://redux.js.org) - State management.
- [Firebase](https://firebase.google.com) - Database, authentication, and hosting in one package.
- [Materialize](https://materializecss.com) - A modern responsive front-end framework based on Material Design

## Contributing

Please read [CONTRIBUTING.md](https://github.com/smyhk/kitchen-fire) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/smyhk/kitchen-fire/releases).

## Authors

- **Steve Kedzie** - _Initial work_

See also the list of [contributors](https://github.com/smyhk/kitchen-fire/graphs/contributors) who participated in this project.

## License

This project is licensed under the Apache License Version 2.0 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- The Net Ninja
