-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 15, 2018 at 06:10 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_livebeyond`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `photo` varchar(200) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `position` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `name`, `description`, `photo`, `alt`, `position`) VALUES
(1, 'woman_headphones', NULL, 'banner_woman_headphones', 'Woman on headphones', 2),
(2, 'woman_tree', NULL, 'banner_woman_tree', 'Woman and tree', 5),
(3, 'guy_bike', NULL, 'banner_bike', 'Guy on a bike', 3),
(5, 'family_dog', NULL, 'banner_family', 'Family and dog', 4),
(6, 'woman_paint', NULL, 'banner_woman_paint', 'Woman painting', 1),
(7, 'guy_hat', NULL, 'banner_guy_hat', 'Guy hat', 6),
(8, 'woman_phone', NULL, 'banner_woman_phone', 'Woman phone', 7),
(9, 'guy_tea', NULL, 'banner_guy_tea', 'Guy drinking tea', 8);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `title` varchar(200) NOT NULL,
  `date` varchar(150) DEFAULT NULL,
  `time` varchar(150) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `partner` varchar(200) NOT NULL,
  `logo` varchar(150) NOT NULL,
  `link` varchar(255) NOT NULL,
  `position` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `title`, `date`, `time`, `address`, `partner`, `logo`, `link`, `position`) VALUES
(1, 'yoga_class', 'Yoga class at Budweiser Gardens', 'March 24th', '10am', '99 Dundas St, London, ON', 'Yoga Shack', 'logo_yoga', 'http://www.yogashack.ca', 1),
(2, 'support_group', 'Support group talk event', 'April 19th', '2pm to 5pm', 'London Public Library - 251 Dundas St, London, ON', 'Be A Donor', 'logo_beadonor', 'https://beadonor.ca', 2),
(3, 'movie_tickets', 'Half price movie tickets', 'April', NULL, 'All Cineplex locations in Ontario', 'Cineplex', 'logo_cineplex', 'https://www.cineplex.com', 3),
(4, 'gym_membership', '30% discount on gym memberships', 'March - April', NULL, 'All Goodlife Fitness locations in Ontario', 'Goodlife Fitness', 'logo_goodlife', 'https://www.goodlifefitness.com', 4);

-- --------------------------------------------------------

--
-- Table structure for table `facts`
--

CREATE TABLE `facts` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `position` tinyint(4) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `facts`
--

INSERT INTO `facts` (`id`, `name`, `description`, `position`) VALUES
(1, 'donor_save', '<span class=\"number\">1</span> <span class=\"bigger\">donor</span> <br>can save <br><span class=\"number\">8</span> <span class=\"bigger\">lives</span>', 1),
(2, 'people_queue', '<span class=\"number\">1,500</span> <br>people need a <span class=\"bigger\">transplant</span> <br>in Ontario', 2),
(3, 'registered_rate', 'only <br><span class=\"number\">32%</span> <br>of Ontarians are <span class=\"bigger\">registered</span> <br>as donors', 3);

-- --------------------------------------------------------

--
-- Table structure for table `myths`
--

CREATE TABLE `myths` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `text` text NOT NULL,
  `position` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `myths`
--

INSERT INTO `myths` (`id`, `title`, `text`, `position`) VALUES
(1, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod leo metus, quis eleifend nisl facilisis at. Cras arcu tortor, aliquam eu maximus id, blandit sed libero. In vehicula nec lacus vitae aliquet. Nunc dignissim tincidunt ante. Donec risus eros, tristique ut semper vitae, egestas sed justo.', 1),
(2, NULL, 'In lectus sapien, suscipit at lorem at, egestas maximus augue. Pellentesque eu fermentum ipsum. Donec semper, ipsum facilisis venenatis tincidunt, mi elit auctor mi, at egestas lacus arcu at diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 2),
(3, NULL, 'Morbi in orci a enim porta auctor nec ac risus. Vivamus at elementum ex. Nunc quis risus ut nibh feugiat molestie nec eget mauris. Aenean pharetra tristique egestas. Aliquam eu hendrerit nibh. Maecenas mattis nec augue eu laoreet. Mauris sed tortor ligula.', 3),
(4, NULL, 'Phasellus metus leo, tempus ac mattis id, posuere eu velit. Nam in blandit justo. Quisque suscipit sem ut elit scelerisque sollicitudin. Morbi tempor aliquet erat vestibulum mattis. Duis congue orci lorem. Quisque semper auctor ante, id elementum lectus auctor mollis.', 4);

-- --------------------------------------------------------

--
-- Table structure for table `stats`
--

CREATE TABLE `stats` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `organ_title` varchar(100) NOT NULL,
  `description` text,
  `icon` varchar(150) NOT NULL,
  `success` varchar(20) NOT NULL,
  `queue` varchar(20) NOT NULL,
  `position` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stats`
--

INSERT INTO `stats` (`id`, `organ_title`, `description`, `icon`, `success`, `queue`, `position`) VALUES
(1, 'lungs', NULL, 'organ_lungs', '166', '55', 1),
(2, 'kidneys', NULL, 'organ_kidneys', '714', '1,168', 2),
(3, 'heart', NULL, 'organ_heart', '93', '35', 3),
(4, 'liver', NULL, 'organ_liver', '258', '233', 4),
(5, 'pancreas', NULL, 'organ_pancreas', '25', '10', 5);

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `video` varchar(150) DEFAULT NULL,
  `placeholder` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `video`, `placeholder`) VALUES
(1, 'live_beyond', 'video_cover');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facts`
--
ALTER TABLE `facts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `myths`
--
ALTER TABLE `myths`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `facts`
--
ALTER TABLE `facts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `myths`
--
ALTER TABLE `myths`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `stats`
--
ALTER TABLE `stats`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
