# Fitness-Finder-NYC
View all gyms in NYC that are currently open!<br>
Gyms are sorted by reviews so you get to view the best in the city!<br>
View them via map on the home page or the location page.<br>
Search for the gym you are looking for.<br>
Leave a review of the gym you visited!<br>
View the reviews from a limited people of the open gyms.<br>

![NYC Fitness Finder Home Page](/screenshots/home.png)

## Feature:
<ul>
  <li>Gyms are sorted by reviews so you'll see the best in the city</li>  
  <li>View currently opened gyms via map</li>
  <li>Search for your gym</li>
  <li>Click on a gym for more info</li>
  <li>Leave a review of the gym you visited</li>
  <li>View reviews from other users</li>
</ul>

Locations:
![Locations Page](/screenshots/locations.png)

Single Location:
![Single Location Page](/screenshots/singleLocation.png)

Search:
![Search](/screenshots/search.png)

Reviews:
![Reviews](/screenshots/reviews.png)

Leave a review:
![Leave a review](/screenshots/leaveReview.png)

View reviews from users:
![View Review](/screenshots/viewReview.png)

## Technologies used:

* React JS
* Axios
* Express
* PostgreSQL
* [Yelp API](https://www.yelp.com/developers)
* [Google Map API](https://developers.google.com/maps/documentation/)

## Future Feature:

* User Authentication

## Installation

1. Clone or download this repository.
2. To run the server:
    * Open a new terminal.
    * `npm install`
    * `nodemon` or `npm start`   
3. To run the database with PostgreSQL (on Linux):
    * Open a new terminal.
    * `cd db`
    * `sudo service postgresql start`
    * `psql -f fitness.sql`
4. To run the front end:
    * Open a terminal.
    * `cd client/src`
    * `npm install` 
    * `npm start`
