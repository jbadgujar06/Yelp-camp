# 🏕 YelpCamp


YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.  

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.  

## Features
* Users can create, edit, and remove campgrounds
* Users can review campgrounds once, and edit or remove their review
* User profiles include more information on the user (full name, email, phone, join date), their campgrounds, and the option to edit their profile or delete their account
* Search campground by name or location
* Sort campgrounds by highest rating, most reviewed, lowest price, or highest price

## Run it locally
1. Install [mongodb](https://www.mongodb.com/)
2. Create a cloudinary account to get an API key and secret code

```
git clone https://github.com/leovenom/YelpCamp.git
cd YelpCamp
npm install
```
## Built With

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - The database for
  modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [ejs](https://ejs.co/) - Embedded JavaScript templating

Create a .env file (or just export manually in the terminal) in the root of the project and add the following:  

```
DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
```

Run ```mongod``` in another terminal and ```node app.js``` in the terminal with the project.  

Then go to [localhost:3000](http://localhost:3000/).

To get google maps working check [this](https://github.com/nax3t/google-maps-api) out.


## Screenshots
>HomePage
![home](https://user-images.githubusercontent.com/51289274/113733448-1a3ac300-9718-11eb-9fc7-defb8d2cd9c1.png)

>All Campgrounds
![All campgrounds](https://user-images.githubusercontent.com/51289274/113733438-173fd280-9718-11eb-8a0d-8e13f1ab3d45.png)

->Single Campground ShowPage
![showPage](https://user-images.githubusercontent.com/51289274/113733465-1e66e080-9718-11eb-9ffe-8b047640942a.png)

->Login & Register page
![login,register](https://user-images.githubusercontent.com/51289274/113734300-d8f6e300-9718-11eb-801e-5cb4698a1560.png)
