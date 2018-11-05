DROP DATABASE IF EXISTS fitness;
CREATE DATABASE fitness;

\c fitness;

CREATE TABLE locations(
    id SERIAL PRIMARY KEY,
    yelpId VARCHAR UNIQUE,
    name VARCHAR,
    alias VARCHAR,
    img_url VARCHAR,
    url VARCHAR,
    rating FLOAT,
    latitude FLOAT,
    longitude FLOAT,
    address1 VARCHAR,
    address2 VARCHAR,
    address3 VARCHAR,
    display_phone VARCHAR
);

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    yelp_id VARCHAR REFERENCES locations(yelpId),
    url VARCHAR,
    text VARCHAR,
    rating INTEGER,
    time VARCHAR,
    user_id VARCHAR,
    profile_url VARCHAR,
    image_url VARCHAR,
    name VARCHAR
);