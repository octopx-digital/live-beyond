-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 19, 2018 at 10:45 PM
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
(3, 'movie_tickets', 'Half price movie tickets', 'April', '', 'All Cineplex locations in Ontario', 'Cineplex', 'logo_cineplex', 'https://www.cineplex.com', 3),
(4, 'gym_membership', '30% discount on gym memberships', 'March - April', NULL, 'All Goodlife Fitness locations in Ontario', 'Goodlife Fitness', 'logo_goodlife', 'https://www.goodlifefitness.com', 4),
(5, 'pet_valu', '10% Discount on Pet Valu', 'May', '', '1001 Highbury Ave.', 'Pet Valu', 'pet_valu', 'http://petvalu.com', 1);

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
(1, 'donor_save', '<span class=\'number\'>1</span> <span class=\'bigger\'>donor</span> <br>can save <br><span class=\'number\'>8</span> <span class=\'bigger\'>lives</span>', 1),
(2, 'people_queue', '<span class=\'number\'>1,500</span> <br>people need a <span class=\'bigger\'>transplant</span> <br>in Ontario', 2),
(3, 'registered_rate', 'only <br><span class=\'number\'>32%</span> <br>of Ontarians are <span class=\'bigger\'>registered</span> <br>as donors', 3);

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
(1, 'Only young people in perfect health can donate.', 'Even if a potential donor has had a serious illness, it does not automatically exclude them from becoming a donor. It depends on the type of illness and when/if the person was treated. Ultimately, several factors are taken into consideration, specially the health of the organs and tissue at the time of death.', 1),
(2, 'If I agree to donate my organs, the hospital staff won\'t work as hard to save my life.', 'When you go to the hospital for treatment, doctors focus on saving your life — not somebody else\'s. You\'ll be seen by a doctor, whose specialty most closely matches your particular emergency, not by a doctor who performs transplants.', 2),
(3, 'I have a medical condition so I can’t be a donor.', 'The transplant team will determine at an individual\'s time of death whether the donation is possible or not. There are very few conditions that would prevent a person from becoming a donor—such as HIV infection, active cancer, or a systemic infection. You should still consider registering. Even with an illness, you may be able to donate your organs or tissues.', 3),
(4, 'If I decide to donate, I may not really be dead when doctors decide to remove my organs.', 'Almost all organ donors must be in a state called brain death, which is irreversible brain damage and loss of brain function, along with the cessation of breathing and other vital reflexes. People cannot recover from brain death. Brain death and comas are not the same—people can recover from comas. Moreover, the declaration of death of an organ donor is done without the involvement of the transplant team.', 4);

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
(1, 'lungs', '', 'organ_lungs', '166', '55', 1),
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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
