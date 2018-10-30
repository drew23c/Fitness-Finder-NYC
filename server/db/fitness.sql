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
    rating INTEGER,
    coord VARCHAR,
    location VARCHAR,
    display_phone VARCHAR
);