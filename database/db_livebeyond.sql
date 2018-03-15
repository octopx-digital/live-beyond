-- MySQL dump 10.16  Distrib 10.2.12-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: db_livebeyond
-- ------------------------------------------------------
-- Server version	10.2.12-MariaDB

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
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banner` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `photo` varchar(200) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `position` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'woman_headphones',NULL,'banner_woman_headphones','Woman on headphones',2),(2,'woman_tree',NULL,'banner_woman_tree','Woman and tree',5),(3,'guy_bike',NULL,'banner_bike','Guy on a bike',3),(5,'family_dog',NULL,'banner_family','Family and dog',4),(6,'woman_paint',NULL,'banner_woman_paint','Woman painting',1),(7,'guy_hat',NULL,'banner_guy_hat','Guy hat',6),(8,'woman_phone',NULL,'banner_woman_phone','Woman phone',7),(9,'guy_tea',NULL,'banner_guy_tea','Guy drinking tea',8);
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `title` varchar(200) NOT NULL,
  `date` varchar(150) DEFAULT NULL,
  `time` varchar(150) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `partner` varchar(200) NOT NULL,
  `logo` varchar(150) NOT NULL,
  `link` varchar(255) NOT NULL,
  `position` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'yoga_class','Yoga class at Budweiser Gardens','March 24th','10am','99 Dundas St, London, ON','Yoga Shack','logo_yoga','http://www.yogashack.ca',1),(2,'support_group','Support group talk event','April 19th','2pm to 5pm','London Public Library - 251 Dundas St, London, ON','Be A Donor','logo_beadonor','https://beadonor.ca',2),(3,'movie_tickets','Half price movie tickets','April',NULL,'All Cineplex locations in Ontario','Cineplex','logo_cineplex','https://www.cineplex.com',3),(4,'gym_membership','30% discount on gym memberships','March - April',NULL,'All Goodlife Fitness locations in Ontario','Goodlife Fitness','logo_goodlife','https://www.goodlifefitness.com',4);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facts`
--

DROP TABLE IF EXISTS `facts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `position` tinyint(4) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facts`
--

LOCK TABLES `facts` WRITE;
/*!40000 ALTER TABLE `facts` DISABLE KEYS */;
INSERT INTO `facts` VALUES (1,'donor_save','<span class=\"number\">1</span> <span class=\"bigger\">donor</span> <br>can save <br><span class=\"number\">8</span> <span class=\"bigger\">lives</span>',1),(2,'people_queue','<span class=\"number\">1,500</span> <br>people need a <span class=\"bigger\">transplant</span> <br>in Ontario',2),(3,'registered_rate','only <br><span class=\"number\">32%</span> <br>of Ontarians are <span class=\"bigger\">registered</span> <br>as donors',3);
/*!40000 ALTER TABLE `facts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `myths`
--

DROP TABLE IF EXISTS `myths`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `myths` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `text` text NOT NULL,
  `position` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `myths`
--

LOCK TABLES `myths` WRITE;
/*!40000 ALTER TABLE `myths` DISABLE KEYS */;
INSERT INTO `myths` VALUES (1,NULL,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod leo metus, quis eleifend nisl facilisis at. Cras arcu tortor, aliquam eu maximus id, blandit sed libero. In vehicula nec lacus vitae aliquet. Nunc dignissim tincidunt ante. Donec risus eros, tristique ut semper vitae, egestas sed justo.',1),(2,NULL,'In lectus sapien, suscipit at lorem at, egestas maximus augue. Pellentesque eu fermentum ipsum. Donec semper, ipsum facilisis venenatis tincidunt, mi elit auctor mi, at egestas lacus arcu at diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',2),(3,NULL,'Morbi in orci a enim porta auctor nec ac risus. Vivamus at elementum ex. Nunc quis risus ut nibh feugiat molestie nec eget mauris. Aenean pharetra tristique egestas. Aliquam eu hendrerit nibh. Maecenas mattis nec augue eu laoreet. Mauris sed tortor ligula.',3),(4,NULL,'Phasellus metus leo, tempus ac mattis id, posuere eu velit. Nam in blandit justo. Quisque suscipit sem ut elit scelerisque sollicitudin. Morbi tempor aliquet erat vestibulum mattis. Duis congue orci lorem. Quisque semper auctor ante, id elementum lectus auctor mollis.',4);
/*!40000 ALTER TABLE `myths` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stats`
--

DROP TABLE IF EXISTS `stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `organ_title` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(150) NOT NULL,
  `success` varchar(20) NOT NULL,
  `queue` varchar(20) NOT NULL,
  `position` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stats`
--

LOCK TABLES `stats` WRITE;
/*!40000 ALTER TABLE `stats` DISABLE KEYS */;
INSERT INTO `stats` VALUES (1,'lungs',NULL,'organ_lungs','166','55',1),(2,'kidneys',NULL,'organ_kidneys','714','1,168',2),(3,'heart',NULL,'organ_heart','93','35',3),(4,'liver',NULL,'organ_liver','258','233',4),(5,'pancreas',NULL,'organ_pancreas','25','10',5);
/*!40000 ALTER TABLE `stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `video` varchar(150) DEFAULT NULL,
  `placeholder` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,'live_beyond','video_cover');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-15 18:02:22
