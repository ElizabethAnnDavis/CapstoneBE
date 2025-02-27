# Capstone - Backend: Express Server Application [MeLikeey](https://melikeey.onrender.com) ✔

This code is the backend of this web app. It runs in tandium with the [Frontend](https://github.com/ElizabethAnnDavis/CapstoneFE)


## Features

- **Full CRUD operations:** Allows for the creation, deletion, reading, and editing of `MongoDB` database documents.


## Route Documentation

### USERS
**GET a user:**
[A user (localhost:3000/api/auth)]

**POST a user:**
[A user (localhost:3000/api/auth)]
###### INCLUDE:
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "email": "Users email@email.com" (required field),
* &nbsp;&nbsp;&nbsp;&nbsp; "password": A password (required field)
* }

**POST new user:**
[NEW user (localhost:3000/api/users)]
###### INCLUDE:
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "name": "Users Name" (required field),
* &nbsp;&nbsp;&nbsp;&nbsp; "email": "Users email@email.com" (required field),
* &nbsp;&nbsp;&nbsp;&nbsp; "password": A password (required field)
* }


### PROFILES
**GET user profile:**
- User profile [localhost:3000/api/user/profile]()

**Put user profile:**
[Update user profile (localhost:3000/api/user/profile)]
###### INCLUDE:
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "favs": { title, img, disc, comments }
* &nbsp;&nbsp;&nbsp;&nbsp; "posts": post
* }

**GET user profile favs:**
[User profile favs (localhost:3000/api/user/profile/fav)]

**PATCH a user profile fav:**
[Create user profile fav (localhost:3000/api/user/profile/fav)]
###### INCLUDE:
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "favs": { title, img, disc, comments }
* }

**GET user profile fav by id:**
[Get fav by id (localhost:3000/api/user/profile/fav/:fav_id)]

**PATCH a user profile fav:**
[Update fav by id (localhost:3000/api/user/profile/fav/:fav_id)]
###### INCLUDE:
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "favs": { title, img, disc, comments }
* }

**DELETE user profile fav by id:**
[Delete fav by id (localhost:3000/api/user/profile/fav/:fav_id)]

**GET user posts:**
[Get posts (localhost:3000/api/user/profile/post)]

**PATCH posts:**
[Update posts (localhost:3000/api/user/profile/post)]
###### INCLUDE:
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "posts": post 
* }

**GET a user post by id:**
[Get a post by id (localhost:3000/api/user/profile/post/:post_id)]

**PATCH a post by id:**
[Update post by id (localhost:3000/api/user/profile/post/:post_id)]
###### INCLUDE:
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "posts": post 
* }

**DELETE user post by id:**
[Delete post by id (localhost:3000/api/user/profile/post/:post_id)]


## Instructions

- **Clone Repo:** clone [this repo](https://github.com/ElizabethAnnDavis/CapstoneBE)
- **Store Data:** in a `.env` file, create a variables as followes: mongoURI=YOUR_CONNECTION_STRING_HERE, PORT=3000, jwtSecret=YOUR_JWT_SECRET
- **Necessary Installs:** run `npm install`, `npm install bcryptjs`, `npm install cors`, `npm install dotenv`, `npm install express`, `npm install express-validator`, `npm install jsonwebtoken`, `npm install mongodb`, `npm install mongoose`, and `npm install nodemon`
- **Run Program:** run `npm start` to launch this web app
- **The [frontend](https://github.com/ElizabethAnnDavis/CapstoneFE) code is require**


## Technologies

- **Express.js:** Express.js is a minimalist and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
- **Node.js:** Node.js is a runtime environment that allows developers to execute JavaScript code outside of a web browser. Built on Chrome's V8 JavaScript engine, Node.js enables the use of JavaScript for server-side and networking applications. It is known for its event-driven, non-blocking I/O model, which makes it efficient for handling concurrent requests.
- **MongoDB:** MongoDB is a noSQL database that allows for the creation of unstructured data due to its flexible data models.
- **Mongoose:** Mongoose is a popular ODM (Object Data Modeling) library for MongoDB and Node.js that simplifies database interactions by providing a schema-based solution.
- **JavaScript:** JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.
- **ECMAScript Module:** ECMAScript modules are the official standard format to package JavaScript code for reuse. .mjs is a file extension for JavaScript files that use the ECMAScript Modules (ESM) syntax. It signifies that the file should be treated as a module, allowing for the use of import and export statements to share code between different files.



## Files

- **server.mjs:** 
- **config:** db.mjs
- **db.mjs:** establishes `MongoDB` database connection
- **middleware:** auth.mjs
- **auth.mjs:** middleware the uses `jtw` to authenticate protected routes
- **models:** User.mjs UserProfile.mjs
- **User.mjs:** User Schema
- **UserProfile.mjs:** User Profile Schema
- **routes:** api: auth.mjs profiles.mjs users.mjs
- **auth.mjs:** routes to login existing users
- **profiles.mjs:** routes that handle `CRUD` operations 
- **users.mjs:** routes to create new users






### Requirements:
**(20%) Project Structure, Standardization, and Convention**
*  ✔   2%  --> Project is organized into appropriate files and directories, following best practices.
*    
*  ✔   2%  --> Project contains an appropriate level of comments.
*    
*  ✔   5%  --> Project is pushed to GitHub, and contains a README file that documents the project, including an overall description of the project.
*    
*  ✔   2%  --> Standard naming conventions are used throughout the project.
*    
*  ✔   4%  --> Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
*    
*  ✔   5%  --> Level of effort displayed in creativity, presentation, and user experience.
*    
**(12%) Core JavaScript**
*  ✔   2%  --> Demonstrate proper usage of ES6 syntax and tools.
*    
*  ✔   2%  --> Use functions and classes to adhere to the DRY principle. -don't have to do?
*    
*  ✔   2%  --> Use Promises and async/await, where appropriate.
*    
*  ✔   2%  --> Use Axios or fetch to retrieve data from an API.
*    
*  ✔   2%  --> Use sound programming logic throughout the application.
*    
*  ✔   2%  --> Use appropriate exception handling.
* 
**(9%) Database**
*  ✔   5%  --> Use MongoDB to create a database for your application.
*    
*  ✔   2%  --> Apply appropriate indexes to your database collections.
*    
*  ✔   2%  --> Create reasonable schemas for your data by following data modeling best practices.
*    
**(19%) Server**
*  ✔   7%  --> Create a RESTful API using Node and Express.
        -  For the purposes of this project, you may forgo the HATEOAS aspect of REST APIs.
*    
*  ✔   5%  --> Include API routes for all four CRUD operations.
*    
*  ✔   5%  --> Utilize the native MongoDB driver or Mongoose to interface with your database.
* 
**(35%) Front-End Development**
*  ✔  10%  --> Use React to create the application’s front-end.
*    
*  ✔   5%  --> Use CSS to style the application.
*    
*  ✔   5%  --> Create at least four different views or pages for the application.
*    
*  ✔   5%  --> Create some form of navigation that is included across the application’s pages, utilizing React Router for page rendering.
*    
*  ✔   5%  --> Use React Hooks or Redux for application state management.
*    
*  ✔   5%  --> Interface directly with the server and API that you created.
* 
**(5%) Presentation**
*  -   1%  --> Create a short overview of your application.
*    
*  -   1%  --> Highlight the use cases of your application.
*    
*  -   1%  --> Highlight the technical functionality of the application, from a high-level perspective.
*    
*  -   1%  --> Discuss what you have learned through the development of the application.
*    
*  -   1%  --> Discuss additional features that could be added to the application in the future.
* 
**(5%) Extra Credit**
*  ✔   2%  --> Include at least one form of user authentication/authorization within the application.
*    
*  ✔   1%  --> Deploy your project.
*    
*  -   3%  --> Build your application primarily with TypeScript.