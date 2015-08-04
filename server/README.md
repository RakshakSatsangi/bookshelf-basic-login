# Example Contacts Application

An application developed as part of a tutorial series on my blog at [Optimal Thoughts](http://githubraj.com). The tutorial is a work in progress so check back often for updates.

This application makes use of [oneformindia](http://www.oneformindia.com/) on the front end with [Hapi](http://hapijs.com/) REST services; [Bookshelf](http://bookshelfjs.org/) ORM with [Knex.js](http://knexjs.org/) for building queries, managing DB migrations, and seed data; and [mysql](http://www.mysql.org/) for persistence.

## Prerequisites

   * You must have Node.js and NPM installed on your computer.  If not you will need to follow the  installation guide for your platform at http://nodejs.org/.
   * You must have hapi installed globally.  If not you can follow the setup guide at http://www.hapijs.org/#getting-started.

## Installation

   * Clone this project or download the archive file and unzip it
   * In a terminal navigate to the server directory and run `npm install`
   * In a terminal navigate to the client directory and run `npm install` followed by `bower install`
   * Install the Knex CLI by executing the following commands in the server directory

   		$ npm install knex -g

   * Run the database migrations from the server directory

   		$ knex migrate:latest

   * Insert seed data

		$ knex seed:run

## Starting Hapi

In a terminal execute the following from within the server directory

			$ node server

## Starting oneformindia

In a terminal execute the following from within the client directory

			$ oneformindia server -proxy http://localhost:3000/api

You can view the application at [http://localhost:3000/students](http://localhost:3000/students) and the Oneform india tests at [http://localhost:3000/tests](http://localhost:3000/tests). To run the Hapi API tests run `npm test` while in the server directory.
