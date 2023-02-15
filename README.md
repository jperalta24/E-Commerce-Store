# E-Commerce-Store

## Introduction
This project is the back-end for an e-commerce website, built using the latest technologies including Express.js and Sequelize. The goal is to create a functional Express.js API that is able to connect to a MySQL database using Sequelize, and perform CRUD operations on the data.

![](/Assets/Images/Screenshot%202023-02-14%20182550.jpg)

## User Story
As a manager at an internet retail company, I want a back-end for my e-commerce website that uses the latest technologies so that my company can compete with other e-commerce companies.

## Prerequisites
Node.js
Express.js
Sequelize
MySQL

## Getting Started
- Clone the repository
- Install dependencies by running npm install
- Add your database name, MySQL username, and password to an environment variable file
- Run the schema and seed commands to create a development database and seed it with test data
- Invoke the application by running npm start
- Test API routes in Insomnia for categories, products, and tags to display data in formatted JSON
- Test API POST, PUT, and DELETE routes to perform CRUD operations on the data

## Demonstration
A walkthrough video demonstrating the functionality of the application can be found at [INSERT VIDEO LINK HERE]. The video shows all of the acceptance criteria being met.

## Acceptance Criteria
The application will meet the following acceptance criteria:

- The API is able to connect to a database using Sequelize by adding the database name, MySQL username, and password to an environment variable file.
- The development database is created and seeded with test data.
- The server is started and the Sequelize models are synced to the MySQL database.
- API GET routes in Insomnia for categories, products, or tags display data in a formatted JSON.
- API POST, PUT, and DELETE routes are able to perform CRUD operations on the data.

### Author
Jonathan Peralta 

### Acknowledgements
- My tutor
- https://sequelize.org/docs/v6/core-concepts/assocs/