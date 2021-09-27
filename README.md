# Server_EndPoints_Implementation

This project is a simple backend node.js api server application.
Below are steps required to reproduce and run the application.
---

## NodeJS

 $ node --version
      12.16.0

      $ npm --version
      7.20.3

      $ express --version
     4.17.1
     
- #### Steps to run nodejs server api in **development**

  - Clone repo : https://github.com/davechibuike/Implementation.git
  - npm install
  - npm run dev
 
 - #### Steps to run nodejs server api in **production**

  - Clone repo : https://github.com/davechibuike/Implementation.git

  - npm install
  - npm run dev
  - npm run start
  
 if server successfully starts, you should see the output below in your terminal
 "app is running on port 3000"
 This can be changed in the server file  /src/server.js
 
 Server running on http://localhost:3000 (this is the default route in development mode, it can be changed in the config folder)
 
 - #### Environment variables

  Environmental variebles can be edited in config folder

  - port required by the application
  - Database connection string

- #### Testing API in Postman

      For POST or PUT requests, you can input data in any of these sections in the body tab
        - raw
        - x-www-form-urlencoded

- #### Libraries - Unit Testing

      The following test libraries were used for writing the test cases:
      -jest
      -"jest": testEnvironment": "node"
      -supertest
 
- #### Warning - Unit Testing

      For the test to be successfull, do not delete users with the following emails:
      - **test@gmail.com**
      - **test.one@test.com**
      
      
- #### Test Cases - Unit Testing

  - Create User
  - Update User
  - Get Users
  - Email Duplication Test
    **Steps to replicate**
    - npm install
    - npm run dev
    - npm test
   
   
- #### Recommendations - Unit Testing

  In this test project, production database was not used in testing , A seperate database was used for test on dev(can be edited from the package). it is recommended to have a testing database different from the actual db, or to use libraries.

- #### Bugs Encoutered

  There were no major bugs encountered
   
    
