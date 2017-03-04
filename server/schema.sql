/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;


DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
 `id` INTEGER NOT NULL AUTO_INCREMENT,
 `text` VARCHAR(200) NULL DEFAULT NULL,
 `roomname` VARCHAR(200) NOT NULL DEFAULT '0',
 `id_users` INTEGER NULL DEFAULT NULL,
 PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
 `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
 `username` VARCHAR(200) NULL DEFAULT NULL,
 PRIMARY KEY (`id`)
);



INSERT INTO messages (id, text, roomname, id_users)

  VALUES
    (1, 'Here we go', 'lobby', 1),
    (2, 'Here we go to','lobby', 1),
    (3, 'Here we go there', 'lobby', 2),
    (4, 'Here we go here', 'lobby', 2),
    (5, 'Here we go','lobby', 3);



INSERT INTO users (id, username)

  VALUES
    (1, 'Jefe'),
    (2, 'Pepe'),
    (3, 'Paolo');



ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);