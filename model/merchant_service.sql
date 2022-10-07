CREATE DATABASE merchant_service;

CREATE TABLE `merchant_table` (
  `id_merchant` int(11) NOT NULL AUTO_INCREMENT,
  `password_merchant` varchar(45) NOT NULL,
  `name_merchant` varchar(45) NOT NULL,
  `address_merchant` varchar(45) NOT NULL,
  `join_date` datetime NOT NULL DEFAULT current_timestamp(),
  `phone_number` int(11) NOT NULL,
  PRIMARY KEY (`id_merchant`)
  );
  
  CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);