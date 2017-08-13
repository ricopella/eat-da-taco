# Eat-Da-Taco

### Overview &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

* Eat-Da-Taco! is a restaurant app that lets users input the names of tacos they'd like to eat.

* Whenever a user submits a taco's name, it's displayed in the `Ready to Eat` section -- waiting to be devoured.

* Each taco in the waiting area also has a `Devour it!` button. When the user clicks it, the taco will move to the `Devoured` section.

* Each taco's created date can be viewed by hovering over the taco name

* Every taco is saved in a database, whether devoured or not.


## Installation

1. `git clone` the repository to your local computer
2. `git bash` into the directory created by the clone
3. Run `npm install`
4. Run `schema.sql` in appropriate MySqQL database
5. Update connection string to reflect credentials for your DB instance
6. **[optional]** run seeds.sql in appropriate database to get prepopulated data for app

#### Dependencies 

List of required dependencies which can be gathered by `npm install` once repository is cloned

```
{
  "dependencies": {
    "body-parser": "^1.17.2",
    "express": "^4.15.4",
    "express-handlebars": "^3.0.0",
    "method-override": "^2.3.9",
    "mysql": "^2.14.1"
  }
}
```

#### Directory Structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── taco_controller.js
│
├── db
│   ├── schema.sql
│   ├── schemaHeroku.sql
│   └── seeds.sql
│
├── models
│   └── taco.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── normalize.css
│   │   │   └── normalize.css
│   │   │   └── taco_style.css
│   │   │   └── reset.css
│   │   └── img
│   │       └── taco-.png
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
# Packages Used

* [Node.JS](https://www.npmjs.com/)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Express](https://www.npmjs.com/package/express)
* [Handlebars](https://www.npmjs.com/package/express-handlebars)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Heroku](https://www.npmjs.com/package/heroku)

# History

Created on 8/13/17

# License

MIT