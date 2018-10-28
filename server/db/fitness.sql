DROP DATABASE IF EXISTS fitness;
CREATE DATABASE fitness;

\c fitness;

CREATE TABLE locations(
    id SERIAL PRIMARY KEY,
    yelpId VARCHAR UNIQUE,
    img_url VARCHAR UNIQUE,
    url VARCHAR UNIQUE,
    rating INTEGER,
    coord VARCHAR UNIQUE,
    location VARCHAR UNIQUE,
    display_phone VARCHAR UNIQUE
);