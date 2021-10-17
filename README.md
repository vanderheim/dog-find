
# The Dog Finder

This is a simple web application that allows a user to build and manage their own personal collection of cute dogs!

This program makes use of the Dog API (https://dog.ceo/dog-api/) to provide various images of dogs.

## Table of Contents
- [Live Demo](#live-demo)
- [Prerequisities](#prerequisities)
- [Tech Stack](#tech-stack)
- [Installing for local development](#installing-for-local-development)
- [Testing](#testing)

### Live Demo
A live demo of this application has been deployed to Heroku. You can visit it at the follow url below:

http://dog-find.herokuapp.com/

### Prerequisites
You must have the following installed to run this application.

* Ruby v3~
* Rails v6~
* PostgreSQL
* NodeJS
* yarn

### Tech Stack

* Ruby on Rails (Back-end)
* VueJS (Front-end)
* PostgreSQL (Database)

### Installing for local development

1. Clone the repository.
```
git clone https://github.com/vanderheim/dog-find.git
```

2. cd into the directory and install all the libraries that are required by the program.

For the Ruby On Rails Back-end, you must run:
```
bundle install
```

For the VueJS Front-end, you must run:
```
yarn install
```

3. Fill out the necessary information to connect to your PostgreSQL database.

Edit config/database.yml and replace the username and password to access your local database.
```
development:
  <<: *default
  database: myapp_development
  username: 'YOUR_USERNAME_HERE'
  password: 'YOUR_PASSWORD_HERE'
```

NOTE: If you would like to run the tests for the application, fill in the username and password sections in the test block as well.
```
test:
  <<: *default
  database: myapp_test
  username: 'YOUR_USERNAME_HERE'
  password: 'YOUR_PASSWORD_HERE'
```

After setting up your configuration details, provision the database with the following command:
```
rake db:setup
```

3. Run the application.

Start the Rails server with:

```
rails server
```

Then start the Front-end dev server with:
```
bin/webpack-dev-server
```

4. You're all done! You can now access the application at the following url:
```
http://localhost:3000
```

### Testing

There are several unit tests for this application for both the Front-end and the Back-end. 
The test suite used for the server is Rspec, while the suite used for the client is Jest.

Jest tests can be found in the __tests__ folder, while Rspec tests can be found in the spec folder.

Run the following command to test the application:
```
yarn test
```

This will run both test suites for Rspec and Jest.
