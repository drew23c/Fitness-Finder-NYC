DROP DATABASE IF EXISTS fitness;
CREATE DATABASE fitness;

\c fitness;

CREATE TABLE locations(
    id SERIAL PRIMARY KEY,
    yelp_id VARCHAR UNIQUE,
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
    review_id VARCHAR UNIQUE,
    display_phone VARCHAR
);

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    yelp_id VARCHAR,
    name VARCHAR,
    review_id VARCHAR,
    url VARCHAR,
    text VARCHAR,
    rating FLOAT,
    time_created VARCHAR,
    user_id VARCHAR,
    profile_url VARCHAR,
    image_url VARCHAR,
    user_name VARCHAR
);