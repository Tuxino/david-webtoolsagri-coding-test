# Webtools Full Stack Coding Test

- There is no time limit to this test however please note how long you have spent on the project.
- Please duplicate the project to a public GitHub repository, and invite the reviewer to the repository when you've completed the assessment. We want to see good commit hygiene.
- Please note there are many ways to implement the requirements below, well articulated communication/or documentation is key to "why" you have implemented a certain way.
## Overview

You have recently been employed at Farmer Joe's Company to help develop some internal applications to manage the running of their farming business.
The team have just recently completed their backlog refinement and sprint planning.  They have committed to completing the following tasks for this sprint:

1. As a logged in `Administrator`, I can see a list of users including both `Contractor` users data and all `Administrator` users data, so that I can have visibility of all contractors and administrators across my company.
2. As a logged in `Administrator`, I can see a list of all the `Organisation`'s in the system.
3. As a logged in `Administrator`, I can create a new `Organisation`.
4. As a logged in `Administrator`, I can create new a new user including selecting if they are a `Administrator` or `Contractor` and their associated `Organisation`, so that when a new contractor or administrator starts, I have a system to record their information.

Tasks that will help achieve implement the user stories above:

1. Extending `users` table to have both `ADMIN` and `CONTRACTOR` users.
2. Create seeders to create organisations and users, including admin users.
3. Write tests where applicable.

## What we look for in your code

- Clean and quality code
- Good code structure.
- We love comments and documentation.

## Stack

1. Database: MySQL
2. Backend Framework: Laravel
3. Frontend: **React (preferred)** / Vue
4. Docker

## Other Requirements:

1. Please do not use CRUD generators and admin packages.
2. No hosting needed.
3. Please use a LTS version of Node, i.e. version 16 LTS
4. NPM is required to be installed.
5. Docker is required to run this project.
6. This project can be run on Windows, Linux or MacOS.

## Setup the project

This project has a `docker-compose.yml` contains the basic stack setup to quickly spin up the local development environment.

To set up the project please follow the steps below:

1. Set up the `.env` file:

```bash
cp .env.example .env
``` 

2. Start up the services

```bash
docker-compose up -d
``` 

3. Install the dependencies

```bash
docker-compose exec php composer install

npm install
``` 
4. Create a key

```bash
docker-compose exec php php artisan key:generate
```

5. Run migrations

```bash
docker-compose exec php php artisan migrate --seed
```

6. Build the frontend

```bash
npm run dev
```

## Swagger Documentation

http://127.0.0.1:8000/api/documentation

## Running the application

You can run the application at http://127.0.0.1:8000

