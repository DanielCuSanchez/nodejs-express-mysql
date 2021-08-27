CREATE DATABASE database_netflix_app;

USE database_netflix_app;

CREATE TABLE users(
  id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  fullname VARCHAR(100) NOT NULL,
)

ALTER TABLE users
  ADD PRIMARY KEY(id);

DESCRIBE users;
