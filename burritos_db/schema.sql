DROP DATABASE IF EXISTS burritos_db;
CREATE DATABASE burritos_db;

USE burritos_db;

CREATE TABLE burritos (
	id INT NOT NULL AUTO_INCREMENT,
	burrito_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);