DROP DATABASE IF EXISTS `tacos_db`;

CREATE DATABASE `tacos_db`;

USE tacos_db;
DROP TABLE IF EXISTS `tacos`;

CREATE TABLE `tacos` (
	id INTEGER(10) auto_increment NOT NULL PRIMARY KEY UNIQUE,
    taco_name VARCHAR(100),
    devoured BOOLEAN,
    date TIMESTAMP
    );
    
SELECT * FROM `tacos`;

