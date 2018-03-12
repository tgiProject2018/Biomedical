-- MySQL dump 10.13  Distrib 5.6.24, for Win32 (x86)
--
-- Host: localhost    Database: dbbiomedic
-- ------------------------------------------------------
-- Server version	5.6.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbpatient`
--

DROP DATABASE IF EXISTS dbbiomedic;
CREATE DATABASE dbbiomedic;
USE dbbiomedic;
DROP TABLE IF EXISTS `tbpatient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbpatient` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `prenom` varchar(50) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `dateNaissance` date DEFAULT NULL,
  `adresse` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbpatient`
--

LOCK TABLES `tbpatient` WRITE;
/*!40000 ALTER TABLE `tbpatient` DISABLE KEYS */;
INSERT INTO `tbpatient` VALUES (1,'paul','tadi','1994-08-02', '420 rue Bob');
/*!40000 ALTER TABLE `tbpatient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbpriseteste`
--

DROP TABLE IF EXISTS `tbpriseteste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbpriseteste` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `systolique` double DEFAULT NULL,
  `diasystolique` double DEFAULT NULL,
  `poul` double DEFAULT NULL,
  `idClient` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idClient` (`idClient`),
  CONSTRAINT `tbpriseteste_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `tbpatient` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbpriseteste`
--

LOCK TABLES `tbpriseteste` WRITE;
/*!40000 ALTER TABLE `tbpriseteste` DISABLE KEYS */;
INSERT INTO `tbpriseteste` VALUES (1,'2018-02-22',NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `tbpriseteste` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-22 13:56:57
