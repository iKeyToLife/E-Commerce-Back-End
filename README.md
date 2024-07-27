# E-Commerce Back End

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Installation](#installation)
- [Usage](#usage)
- [Key Features](#key-features)
- [Technologies](#technologies)
- [Repository Link](#repository-link)
- [Deployed Application](#deployed-application)

## Description
Internet retail, also known as e-commerce, is a major sector in the electronics industry, enabling businesses and consumers to buy and sell electronic products online conveniently. In 2021, the e-commerce industry in the United States alone generated an estimated US$2.54 trillion, according to the United Nations Conference on Trade and Development. Popular platforms like Shopify and WooCommerce offer comprehensive services to businesses of all sizes. Therefore, it is crucial for developers to understand the fundamental architecture of e-commerce sites.

This project involves building the back end for an e-commerce site by modifying starter code. The main task is to configure a working Express.js API that uses Sequelize to interact with a PostgreSQL database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./assets/images/orm-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./assets/images/orm-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./assets/images/orm-demo-03.gif)


## Installation

To install the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
3. Install the dependencies:
   ```bash
   npm install
4. Create a PostgreSQL database and configure the connection settings in the configuration file.
5. Create .env in root and set your DB_USER, DB_PASSWORD, DB_NAME.

## Usage

1. Run the schema and seed commands to set up the database:
   ```bash
   npm run schema
   npm run seed
2. Start the server:
   ```bash
   npm start
3. Use a tool like Insomnia to test the API routes.


## Key Features

- Connects to a PostgreSQL database using Sequelize.
- Stores sensitive data using environment variables.
- Syncs Sequelize models to the PostgreSQL database on server start.
- Includes RESTful CRUD operations for categories, products, and tags.
- Supports associations between models: Product belongs to Category, Category has many Products, Product belongs to many Tags, and Tag belongs to many Products.

## Technologies

- Node.js - runtime environment.
- Express.js - web framework for Node.js.
- PostgreSQL - relational database.
- pg - PostgreSQL client for Node.js.
- sequelize - promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- dotenv - for managing environment variables.

## Repository Link
[E-Commerce Back End Repository](https://github.com/iKeyToLife/E-Commerce-Back-End)

## Video Application
[E-Commerce Back End Video Application](https://app.screencastify.com/v3/watch/8thltbGJvHgxrTfMBc6t)