-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`tb_mensagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_mensagem` (
  `id_tb_mensagem` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `ds_email` VARCHAR(50) NOT NULL,
  `ds_mensagem` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_tb_mensagem`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_cadastro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_cadastro` (
  `id_tb_cadastro` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `ds_email` VARCHAR(50) NOT NULL,
  `nm_nome` VARCHAR(35) NOT NULL,
  `sn_sobrenome` VARCHAR(120) NOT NULL,
  `ds_senha` VARCHAR(18) NOT NULL,
  `ds_confirmacao_senha` VARCHAR(18) NOT NULL,
  `tb_mensagem_id_tb_mensagem` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_tb_cadastro`),
  INDEX `fk_tb_cadastro_tb_mensagem_idx` (`tb_mensagem_id_tb_mensagem` ASC),
  CONSTRAINT `fk_tb_cadastro_tb_mensagem`
    FOREIGN KEY (`tb_mensagem_id_tb_mensagem`)
    REFERENCES `mydb`.`tb_mensagem` (`id_tb_mensagem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_login` (
  `id_tb_login` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `ds_email` VARCHAR(50) NOT NULL,
  `ds_senha` VARCHAR(18) NOT NULL,
  `tb_mensagem_id_tb_mensagem` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_tb_login`),
  INDEX `fk_tb_login_tb_mensagem1_idx` (`tb_mensagem_id_tb_mensagem` ASC),
  CONSTRAINT `fk_tb_login_tb_mensagem1`
    FOREIGN KEY (`tb_mensagem_id_tb_mensagem`)
    REFERENCES `mydb`.`tb_mensagem` (`id_tb_mensagem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_evento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_evento` (
  `id_tb_eventos` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nm_nome_evento` VARCHAR(45) NOT NULL,
  `ds_texto_evento` VARCHAR(255) NOT NULL,
  `img_nome` VARCHAR(255) NOT NULL,
  `img_data` LONGBLOB NOT NULL,
  `tb_login_id_tb_login` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_tb_eventos`),
  INDEX `fk_tb_evento_tb_login1_idx` (`tb_login_id_tb_login` ASC),
  CONSTRAINT `fk_tb_evento_tb_login1`
    FOREIGN KEY (`tb_login_id_tb_login`)
    REFERENCES `mydb`.`tb_login` (`id_tb_login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_imagem_site`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_imagem_site` (
  `id_tb_imagens_site` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `img_nome` VARCHAR(255) NOT NULL,
  `img_data` LONGBLOB NOT NULL,
  PRIMARY KEY (`id_tb_imagens_site`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
