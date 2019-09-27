# React Redux Node Simple Starter Kit

This is repository is created to help bootstrap every React-Redux application with a Node-Express backend using MongoDB as it primary database.

## Requirements

- node `10`
- npm `^6.0.1`
- mongodb `3.6.3`

## Installation

Download and install [MongoDB](https://www.mongodb.com/download-center#community)

Create a new MongoDB database. Retrieve your URI connection string. See examples [here](https://docs.mongodb.com/manual/reference/connection-string/#examples)
Create your .env file and populate the relevant values based on the sample file .env-sample

After confirming that your environment meets the above requirements, you can create a new project based on `react-redux-node-starter-minikit` by doing the following:

```bash
$ git clone https://github.com/ishanShahzad/React-redux-node-starter-minikit.git
<my-project-name>
$ cd <my-project-name>
```

Then install dependencies

```bash
$ npm install
$ npm run prod  #this will create a Dist folder in client
$ npm run dev # webpack-dev-server will run front end only
$ npm start  # Compiles the server-side and client side before the application launches
```

If everything works, you should get a message indicating so. In development Application will be served on port 3000
Open the web browser to http://localhost:3000/

## Project Structure

The project structure presented in this starter kit is outlined below. This structure is only meant to serve as a guide.

```
.
├── client                   # React-redux related files
│   ├── dist                 # Transpiled react source code
│   ├── src                  # Collections of reducers/constants/actions
│   │   ├── actions          # Actions
│   │   ├── components       # Containers Components and Components connect to store and actions
│   │   ├── constants        # Constants
│   │   ├── reducers         # Reducers
│   │   ├── store.js         # Create and instrument redux store
│   │   ├── index.js         # Redux-specific pieces
│   │   ├── index.html       # Main HTML page container for app
│   │   └── styles.scss      # Application styles
└── server                   # Application source code
    ├── config               # Configurations folder (Database etc.)
    ├── controllers          #
    ├── models               #
    ├── routes               #
    ├── tests                # Unit test
    └── index.js             # Express application

```

## Contributing

I am more than happy to accept contributions to the project. Contributions can be in the form of feedback, bug reports or even better - pull requests :)
