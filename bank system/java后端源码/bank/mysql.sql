
/* 建库 */
CREATE DATABASE bank;


/* 建表 */
CREATE TABLE IF NOT EXISTS `userinfo`(
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(20) NOT NULL,
   `type_of_customer` VARCHAR(20) NOT NULL,
   `current_acccount` INT(64) NOT NULL DEFAULT '0',
   `savings_account` INT(64) NOT NULL DEFAULT '0',
	`gender` VARCHAR(20) NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* 初始插入数据 */
INSERT INTO `userinfo` VALUES
('1', 'Penny', 'private', '1000', '1000', 'male'),
('2', 'Sue', 'private', '2000', '0', 'male'),
('3', 'Angus', 'private', '100', '100', 'female'),
('4', 'Toys', 'business', '4000', '3000', 'male'),
('5', 'Letters', 'business', '3000', '2000', 'male'),
('6', 'John', 'business', '5000', '1000', 'female'),
('7', 'Sarah', 'business', '1000', '1000', 'female'),
('8', 'Emily', 'private', '2000', '0', 'female'),
('9', 'Olivia', 'business', '100', '100', 'male'),
('10', 'Sophia', 'business', '4000', '3000', 'male'),
('11', 'Hannah', 'business', '3000', '2000', 'male'),
('12', 'Jacob', 'business', '5000', '1000', 'female'),
('13', 'Lucas', 'private', '1000', '1000', 'male'),
('14', 'Ethan', 'private', '2000', '0', 'male'),
('15', 'Jackson', 'private', '100', '100', 'male'),
('16', 'Aiden', 'private', '4000', '3000', 'female'),
('17', 'Amanda', 'business', '3000', '2000', 'male'),
('18', 'Coco', 'private', '5000', '1000', 'male'),
('19', 'Celine', 'business', '3000', '2000', 'female'),
('20', 'Echo', 'private', '5000', '1000', 'male');
