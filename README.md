# Welcome to Socializer - READ ME FIRST! #

### What is this repository for? ###

* As a quick summary as to what this repository is, it is the home of the Socializer project. It is a new initiative towards bringing social networking to a new evolutionary stage.

* This project is still at its infancy, it will take a lot of work and sleepless nights to get this thing up and running! As of now the project current sits at version 0.0.1

### What technologies are being used? ###

* Short answer: Anything and everything that will get us to accomplish our goals in completing this ambitious project.

* Long answer (If you are curious I hope): Since we will be adopting a micro service architecture approach to our project, instead of a monolithic architecture, we aren't completely bounded by a particular stack of technologies to get the job done. The beauty of using micro service architecture is the ability to use any technology to tackle any specific set of problems. 

* Long answer (part 2): There are tons of different programming languages, and other technologies which serve the purpose of solving specific domain problems. As of v0.0.1 of the project, we are currently using Node.js for server-side development of the main website, Foundation 6 (CSS framework for the front end), along with the aid of some small java script testing frameworks such as Mocha, and JSHint for setting a code styling standard. CircleCI is being used for continuous integration of this project (Why you might ask? Continuous Integration or CI for short, is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.)

* Long answer (part 3): This project as mentioned is still in its infancy and this read me will change quickly over time as requirements become more demanding and more technologies are added to our project. There will be a wiki that is going to have many pages created over time (for documentation purposes) as well as for when the project grows (Wiki can be found in the navigation section on the left side of the screen towards the bottom).

* Tip: Please take some time to learn the technologies posted here on your own time. It will help to gain familiarity of them. Take a look at http://expressjs.com/ to learn more about Express JS (Server-Side JS Framework), and go here https://www.npmjs.com/ to learn about node package management, which is a very crucial part of any javascript project. Also gain familiarity of the HTTP protocol in depth as this knowledge will help, especially in regards to common request methods such as POST, GET, UPDATE, DELETE.

* Tip (part 2): Learn about REST (IMPORTANT FOR BUILDING API's) http://www.restapitutorial.com/lessons/whatisrest.html, and also learn about building microservices here: https://www.nginx.com/blog/introduction-to-microservices/

### How do I get set up? ###

* So, lets get you up and running with the current version of this project.
First thing to do is to go ahead and create a fork of this project (meaning   you will have a copy of this repository in your own personal bit bucket account). 

1. To do this you will find on the left hand side of this page a menu with a section called ACTIONS. You will find the option to fork there, go ahead and click on that. Enter any name you want for the forked repository (it's your copy of this after all), then click fork repository.

2. You will find a copy of this project and the repository in your bit bucket account after step one. The next thing to do is to go ahead and clone your copy of the project onto your machine. Click on the clone action on the left menu of your copied repository, you will be presented with a terminal / git shell command which you will run in a terminal / git shell.

3. Once step two is completed, open a terminal(Linux/Mac) or git shell (windows) (if they aren't already open) and navigate to the root folder of the project. There you will type in the terminal(Linux/Mac) or git shell (windows) **npm install** (this will install all dependencies required by the project to run. NPM relies on the package.json file found in the project.

4. This step isn't required but HIGHLY recommended. Open a terminal (if its not already open) and enter the following: **npm install -g nodemon**, this useful java script module detects any changes in code in your local copy of the project code and automatically restarts the server with the new changes.

5. With nodemon installed (skip this is you are not using nodemon) go ahead run nodemon from the terminal/git shell in the root directory of the project. Nodemon will run the www script found in the bin folder of the project. If all went well, go ahead and go to localhost:3000 and see if you get the website.

6. Hopefully the project is up and running! If not please contact Joshua (me) for assistance!

## To Be Continued ##

* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact