# FriendFinder

## Objective
The objective of this assignment is to create an app that matches a user with their best frined. 

Deployed to [Heroku](https://protected-fjord-25561.herokuapp.com/)

## How it Works
- The app opens on the homepage, which has a button to begin the FriendFinder survey.
- Once the survey is started, the user is prompted to enter their name, photo, and then answer 10 that are rated on a scale from 1 to 5 (1 being the user strongly disagrees, 5 being the user strongly agrees).  
- When the survey is submitted, a modal pops up showing the best friend match.
* Matches are based on how the users answer their survey questions.
* The user's total score (the total points added up from each survey question) is compared to the scores of other app users and is matched with the user with the closest total score.
* User data is stored in JSON format in the `/api/friends` route, and is appended each time a user submits their survey

## Uses

- Node.js
- Express.js