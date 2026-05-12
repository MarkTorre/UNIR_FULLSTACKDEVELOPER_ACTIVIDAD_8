-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dbBlog
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbBlog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbBlog` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `dbBlog` ;

-- -----------------------------------------------------
-- Table `dbBlog`.`autors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbBlog`.`autors` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `dbBlog`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbBlog`.`posts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `date_creation` DATETIME NOT NULL DEFAULT NOW(),
  `category` VARCHAR(50) NOT NULL,
  `fk_autors` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_posts_autors_idx` (`fk_autors` ASC) VISIBLE,
  CONSTRAINT `fk_posts_autors`
    FOREIGN KEY (`fk_autors`)
    REFERENCES `dbBlog`.`autors` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
