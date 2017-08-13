

USE `b5v18qhbxwrkzyx1`;

DROP TABLE IF EXISTS `tacos`;


CREATE TABLE `tacos` (
	id INTEGER(10) auto_increment NOT NULL PRIMARY KEY UNIQUE,
    taco_name VARCHAR(100),
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    
SELECT * FROM `tacos`;