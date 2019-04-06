# Hearthstone Deck Builder - ROSEdu CDL 2019
### Simple React & Express.js web application developed entirely by CDL 2019 students.

## Backend setup
Make sure you have `yarn` and `node` installed.  
Fork this repo, then:
```sh
git clone [your-forked-repo-url]
cd backend && yarn install # builds node_modules from package.json and yarn.lock
yarn start # starts dev server using nodemon (auto-reloads on file changes)
```
Experiment, push changes to your forked repo and open pull request to upstream. 

## Backend API

Work in progress - outlines potential API endpoints

GET /card/:id  
GET /cards  

GET /deck/:id  
POST /deck - name, class  
PUT /deck - cardId  
DELETE /deck/:id - deletes deck  
DELETE /deck/card/:id

GET /decks  

