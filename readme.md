## Order System Sample Project (Workshop)

This is a variation of the sample project used in the course [Upgrading AngularJS](https://www.upgradingangularjs.com), but for the live, in-person workshop.

Each branch is a different section of the workshop so you can easily see the progress of the application.

### Getting Started

The project starts with an AngularJS 1.3 app (in the `public`) folder with an Express server (in the `server` folder).

The AngularJS client has no build process yet - it's just a collection of script tags in the `index.html` file.

To run the Express server, which serves up the `public` folder until Webpack is introduced:

```
cd server
npm install
npm start
```

Navigate to [http://localhost:9001](http://localhost:9001) to see the running application. This is the same port used for the production Webpack build later on.
