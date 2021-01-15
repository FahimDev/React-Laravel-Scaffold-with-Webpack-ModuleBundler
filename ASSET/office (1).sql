-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2021 at 03:07 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `office`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mission` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vision` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `story` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `mission`, `vision`, `story`, `created_at`, `updated_at`) VALUES
(1, 'Our mission is to design, manufacture, develop and launche the world’s most advanced Software and IOT Devices which will be made in Bangladesh. We want to become a part of advancing technology for a better life for all the living species on earth & nat', 'Our vision is to become a world class brand one-day which will represent Bangladesh world wide with pride.', 'Glitch was founded in the mid of 2015 as a student\'s team.It was Founded by Mahir Faisal & Ariful Islam.In the beginning it was a team of Short Film & 3D animation making group.Gradually it was increasing it\'s capacity and started developing 3D games in d', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token_element` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `user_name`, `password`, `type`, `token_element`, `status`, `created_at`, `updated_at`) VALUES
(1, 'fahim0373', '$2y$10$ffrQpyRWXNTmVZECBomFH.UY9.Op0HHp1DUlbT1AwzVlpIrbo4V7a', '1', 'laqtMoqEE1ra2Rep4yZIce9JXFmdur41uPBVmAY5', '1', '2020-06-20 18:00:00', '2020-06-20 18:00:00'),
(2, 'Jackma', '$2y$10$rAcCVuENw5IU7y5DRKEL4.0SUebRrKAOgNkk6hXo0WvvTJ7PvCluq', '2', 'YEGl3S0idc71LeFy6a1nE3TxBdK3JVWNbRrrRF2j', '1', NULL, NULL),
(3, 'antonin686', '$2y$10$RJrCGBkWSvZv1pHW/FEpWubXHrl/C6Eb5.KHO5dIWlS47p75TxZ/W', '2', 'A9KuGN8ntYKmquNAw4RxjTyriUvlu29eyizTNGyW', '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `number`, `email`, `created_at`, `updated_at`) VALUES
(1, '+8801712844177', 'info@glitch-innovations.com', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `member-academic`
--

CREATE TABLE `member-academic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `school` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sBatch` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `college` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cBatch` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `diploma` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dSub` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dBatch` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bachelor` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `baSub` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `baBatch` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `masters` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maSub` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `msBatch` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phdSub` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `passYear` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member-academic`
--

INSERT INTO `member-academic` (`id`, `userName`, `school`, `sBatch`, `college`, `cBatch`, `diploma`, `dSub`, `dBatch`, `bachelor`, `baSub`, `baBatch`, `masters`, `maSub`, `msBatch`, `phd`, `phdSub`, `passYear`, `created_at`, `updated_at`) VALUES
(2, 'fahim0373', 'National Ideal School', '[2014]', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2020-06-19 18:00:00', '2020-06-19 18:00:00'),
(4, 'fahim0373', NULL, NULL, 'Cambrian College', '[2016]', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'fahim0373', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'American International University-Bangladesh', 'Software Engineering', '[2020]', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'fahim0373', 'Faizur Rahman Ideal School', '[2009]', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member-achievement`
--

CREATE TABLE `member-achievement` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `institution` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instructor` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prizePosition` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prizeCategory` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `membership` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member-achievement`
--

INSERT INTO `member-achievement` (`id`, `userName`, `type`, `title`, `institution`, `instructor`, `prizePosition`, `prizeCategory`, `membership`, `year`, `created_at`, `updated_at`) VALUES
(1, 'fahim0373', 't&c', 'Discover Augmented Reality Games', 'Udemy', 'Diego Herrera', '', '', '', '2019', NULL, NULL),
(2, 'fahim0373', 't&c', 'Satellite Ground Station Training', 'Bangladesh Innovation Forum', 'BRAC Onnesha', '', '', '', '2019', NULL, NULL),
(3, 'fahim0373', 't&c', 'Certification on Game Development', 'Ministry of ICT Division', 'Appnometry', '', '', '', '2017', NULL, NULL),
(4, 'fahim0373', 't&c', 'CGI Developer', 'Cycore Studios', 'Murad Talkin', '', '', '', '2017', NULL, NULL),
(5, 'fahim0373', 't&c', 'IT Essentials Certification', 'Cisco', 'Sadrul Amin', '', '', '', '2016', NULL, NULL),
(6, 'fahim0373', 'a&r', 'AIUB CS Fest', '', '', 'Champion', 'Project Showcasing', '', '2016', NULL, NULL),
(7, 'fahim0373', 'a&r', 'IUT ICT Fest', '', '', 'Final Round Selection ', 'Project Showcasing', '', '2016', NULL, NULL),
(8, 'fahim0373', 'a&r', 'IUT Meccelaration', '', '', 'Runner Up ', 'Project Showcasing', '', '2018', NULL, NULL),
(9, 'fahim0373', 'member', '', '', '', '', '', 'Institute of Electrical and Electronics Engineers (IEEE)', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member-hobby`
--

CREATE TABLE `member-hobby` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hobby` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member-hobby`
--

INSERT INTO `member-hobby` (`id`, `userName`, `hobby`, `created_at`, `updated_at`) VALUES
(1, 'fahim0373', 'Cycling', '2020-06-18 18:00:00', '2020-06-18 18:00:00'),
(2, 'fahim0373', 'Driving', '2020-06-18 18:00:00', '2020-06-18 18:00:00'),
(3, 'fahim0373', 'Diving', '2020-06-18 18:00:00', '2020-06-18 18:00:00'),
(4, 'fahim0373', 'Short Film Making', '2020-06-18 18:00:00', '2020-06-18 18:00:00'),
(5, 'fahim0373', 'Photography', '2020-06-18 18:00:00', '2020-06-18 18:00:00'),
(6, 'fahim0373', 'Video Post Production', '2020-06-18 18:00:00', '2020-06-18 18:00:00'),
(7, 'fahim0373', '3D Animation', '2020-06-18 18:00:00', '2020-06-18 18:00:00'),
(8, 'fahim0373', 'Graphics Design', '2020-06-18 18:00:00', '2020-06-18 18:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `member-network`
--

CREATE TABLE `member-network` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eMail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member-network`
--

INSERT INTO `member-network` (`id`, `userName`, `title`, `name`, `position`, `contact`, `eMail`, `url`, `status`, `created_at`, `updated_at`) VALUES
(1, 'fahim0373', 'Project Supervisor', 'Md. Al Amin', 'Lecturer at American International University-Bangladesh', '+8801710004078', 'alamin@aiub.edu', 'http://cs.aiub.edu/profile/alamin', '0', NULL, NULL),
(4, 'fahim0373', 'Investor', 'Md.Forkan', 'Owner of CTG Rent-A-Car', ' 8801917-059797', 'info@ctgrentacar.com', 'https://www.ctgrentacar.com/', '0', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member-portal`
--

CREATE TABLE `member-portal` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imgPath` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fatherName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `motherName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blood` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `religion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `relationship` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currentLoc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parmanentLoc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eMail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `socialFB` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `socialTwit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gitHub` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedIN` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expSummary` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member-portal`
--

INSERT INTO `member-portal` (`id`, `userName`, `fullName`, `title`, `department`, `imgPath`, `fatherName`, `motherName`, `gender`, `blood`, `religion`, `relationship`, `currentLoc`, `parmanentLoc`, `about`, `contact`, `eMail`, `socialFB`, `socialTwit`, `gitHub`, `linkedIN`, `expSummary`, `status`, `created_at`, `updated_at`) VALUES
(1, 'fahim0373', 'Md. Ariful Islam', 'Software Engineer', 'FACULTY OF SCIENCE & TECHNOLOGY', 'https://www.office-rest.api.glitch-innovations.com/public/membersImg/fahim0373.jpg', 'Engr.Md. Nur Hossain', 'Ferdouse Yeasmin', 'Male', 'A+', 'Islam', 'Single', 'Banasree,Rampuura,Dhaka,Bangladesh', 'Chittagong,Bangladesh', 'working on it.One day I will tell everything.', '+8801712844177', 'fahim.arif0373@outlook.com', 'https://www.facebook.com/arif.fahim0373', 'https://twitter.com/ArifulIslamFah5?s=07', 'https://github.com/fahimdev', 'https://www.linkedin.com/', 'I am a final year student of Software Engineering ...', NULL, NULL, NULL),
(2, 'Jackma', '', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, '', NULL, '', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL),
(3, 'antonin686', 'Md. Antonin Islam', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member-qualification`
--

CREATE TABLE `member-qualification` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `experience` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `institution` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `startYear` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `endYear` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `skillTitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `skillList` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `softwareAndTools` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member-qualification`
--

INSERT INTO `member-qualification` (`id`, `userName`, `type`, `experience`, `institution`, `startYear`, `endYear`, `skillTitle`, `skillList`, `softwareAndTools`, `created_at`, `updated_at`) VALUES
(1, 'fahim0373', 'PE', 'I have participated “Satellite Ground Station training” under the supervision of BRAC Onnesha', 'BD Innovation Forum', '2019', '2019', '', '', '', NULL, NULL),
(2, 'fahim0373', 'PE', 'I have worked with “bKash” merchant account API', 'Chittagong Rent-A-Car', '2019', '2019', '', '', '', NULL, NULL),
(3, 'fahim0373', 'PE', 'I have worked as the Web developer of Chittagong Rent-A-Car', 'Chittagong Rent-A-Car', '2018', '2018', '', '', '', NULL, NULL),
(4, 'fahim0373', 'PE', 'I was also in-charge of Chittagong Rent-A-Car’s Search Engine Optimization project and from January 2019 to November 2019. Chittagong Rent-A-Car was ranked as number one in Google Search and Google Map among Chittagong Division. ', 'Chittagong Rent-A-Car', '2019', '2019', '', '', '', NULL, NULL),
(5, 'fahim0373', 'S&T', '', '', '', '', '', '', 'Adobe Photoshop', NULL, NULL),
(6, 'fahim0373', 'S&T', '', '', '', '', '', '', 'Adobe Illustrator', NULL, NULL),
(7, 'fahim0373', 'S&T', '', '', '', '', '', '', 'Adobe After Effects', NULL, NULL),
(8, 'fahim0373', 'S&T', '', '', '', '', '', '', 'Autodesk Maya', NULL, NULL),
(9, 'fahim0373', 'S&T', '', '', '', '', '', '', 'MS Office Suit', NULL, NULL),
(10, 'fahim0373', 'Skill', '', '', '', '', 'Front-End Essentials', 'HTML, CSS, Bootstrap', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member-url`
--

CREATE TABLE `member-url` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `buttonTitle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member-url`
--

INSERT INTO `member-url` (`id`, `userName`, `buttonTitle`, `color`, `url`, `created_at`, `updated_at`) VALUES
(1, 'fahim0373', 'Plant Finder', '', 'https://www.youtube.com/watch?v=7QFD3Wh4zjM', '2020-06-19 18:00:00', '2020-06-20 06:00:00'),
(2, 'fahim0373', 'Showreel-2016', '', 'https://www.youtube.com/watch?v=FSODEGD9wmA', '2020-06-19 18:00:00', '2020-06-19 18:00:00'),
(3, 'fahim0373', 'Blockchain', '', 'https://www.coursera.org/account/accomplishments/verify/3V9AYTHZYG53', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member-workhistory`
--

CREATE TABLE `member-workhistory` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orgName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rank` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `started` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `end` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member-workhistory`
--

INSERT INTO `member-workhistory` (`id`, `userName`, `type`, `orgName`, `rank`, `started`, `end`, `created_at`, `updated_at`) VALUES
(1, 'fahim0373', 'Job', 'Chittagong Rent-A-Car', 'Developer', '2019-01-20', '2020-01-07', NULL, NULL),
(2, 'fahim0373', 'Dream', 'Glitch', 'CEO', '2020-01-08', '', NULL, NULL),
(5, 'jackma', 'Business', 'Shafaf Food', 'CEO', '2019-05-05', '2020-06-12', NULL, NULL),
(9, 'jackma', 'Business', 'Shafaf Food', 'Dealer', '2019-05-05', '2020-06-12', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `memberhastag`
--

CREATE TABLE `memberhastag` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hashTag` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `memberhastag`
--

INSERT INTO `memberhastag` (`id`, `userName`, `hashTag`, `color`, `created_at`, `updated_at`) VALUES
(1, 'fahim0373', 'Web Development', 'info', NULL, NULL),
(2, 'fahim0373', 'Software Development', 'info', NULL, NULL),
(3, 'fahim0373', 'Game Development', 'info', NULL, NULL),
(4, 'fahim0373', '3D Animation', 'info', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member_info`
--

CREATE TABLE `member_info` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `father_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mother_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `current_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parmanent_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `social_media` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `git_office` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `school` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `college` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diploma_degree` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bachelor_degree` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ms_degree` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phd_degree` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `work` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `work_rank` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expertise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `extracurricular_activity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member_info`
--

INSERT INTO `member_info` (`id`, `user_name`, `department`, `profile_img`, `full_name`, `father_name`, `mother_name`, `current_address`, `parmanent_address`, `contact_number`, `email`, `social_media`, `git_office`, `school`, `college`, `diploma_degree`, `bachelor_degree`, `ms_degree`, `phd_degree`, `work`, `work_rank`, `expertise`, `extracurricular_activity`, `about`, `status`, `created_at`, `updated_at`) VALUES
(1, 'fahim0373', 'Software Engineer', '', 'Md.Ariful Islam', 'Engr.Md Nur Hossain', 'Ferdouse Yeasmin', 'Banasree,Rampuura,Dhaka,Bangladesh', 'Haithkandi,Mirsharai,Chittagong,Bangladesh', '+8801712844177', 'fahim.arif0373@outlook.com', 'https://www.facebook.com/arif.fahim0373', 'https://github.com/fahimdev', 'National Ideal School', 'Cambiran College', 'Cycore [3D Animation Artist]', ' American International University-Bangladesh [Software Engineering]', '', '', 'Glitch Studio', 'IT Administrator', 'Object Oriented Programming,Computer/Mobile Application Development,Game Development,Web Application', 'Cycling,Diving,Photography,Short Film Making,3D Animation,Graphics Design,Video Post Production', 'working on it.One day I will tell everything.', '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2020_05_05_061755_create_web_title_table', 1),
(3, '2020_05_05_061911_create_research_table', 1),
(4, '2020_05_05_062010_create_member_info_table', 1),
(5, '2020_05_05_062031_create_contact_table', 1),
(6, '2020_05_05_062120_create_services_table', 1),
(7, '2020_05_05_062212_create_projects_table', 1),
(8, '2020_05_05_062245_create_about_table', 1),
(9, '2020_05_05_072824_create_department_table', 1),
(11, '2020_06_18_073047_create_member-has_tag_table', 3),
(13, '2020_06_18_075454_create_member-work_history_table', 5),
(14, '2020_06_18_143633_create_member-qualification_table', 6),
(15, '2020_06_18_145848_create_member-achievement_table', 7),
(21, '2020_06_18_155851_create_table-name_table', 9),
(22, '2020_06_18_155952_create_member-network_table', 9),
(23, '2020_06_19_052140_create_member-hobby_table', 10),
(24, '2020_06_18_074058_create_member-academic_table', 11),
(25, '2020_06_20_101645_create_member-url_table', 11),
(26, '2020_05_05_061650_create_admin_table', 12),
(28, '2020_06_18_065950_create_member-portal_table', 13);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_manager` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `research`
--

CREATE TABLE `research` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_1_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_2_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_3_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_3` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `research`
--

INSERT INTO `research` (`id`, `title`, `title_img`, `summary`, `cover_img`, `details`, `url_1_title`, `url_1`, `url_2_title`, `url_2`, `url_3_title`, `url_3`, `author`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Blockchain', 'https://www.office-rest.api.glitch-innovations.com/public/asset/research/blockchain.png', 'We have a on going research project on Blockchain under the supervision of Md.Al-Amin Sir. This is a project of Health Ministry of Bangladesh.Md.Ariful Islam,Md.Antonin Islam,Shihab Rahman,Shojibur Rahman are the researchers of this project', '', 'As we know a huge number of our citizen is not used to digital systems so if their system portal login system should be special. Normal text based user name and password is not safe for them. That can be easily abused. So as we have a rich record of our c', '', '', '', '', 'Doctor\'s Application', 'https://github.com/FahimDev/Prescription-Making-Software', 'fahim0373', '1', NULL, NULL),
(2, 'Holographic Video Call', 'https://www.office-rest.api.glitch-innovations.com/public/asset/research/HolographicVideoCall.png', 'We have a research project on Augmented Reality under the supervision of Dr. A. F. M. Saifuddin Saif & MD. Masuduzzaman Sir. This is a thesis paper.This paper is on Augmented Reality video call and Data Loss Problem.Md.Ariful Islam,Md.Antonin Islam are th', '', 'We have a research project on Augmented Reality under the supervision of Dr. A. F. M. Saifuddin Saif & MD. Masuduzzaman Sir. This is a thesis paper.This paper is on Augmented Reality video call and Data Loss Problem.Md.Ariful Islam,Md.Antonin Islam are th', '', '', '', '', '', '', 'fahim0373', '1', NULL, NULL),
(3, 'New PHP Framework', 'https://www.office-rest.api.glitch-innovations.com/public/asset/research/Framework.png', 'We have a research project which is inspired from Laravel Framework under the supervision of Md.Al-Amin Sir. This project is under development.Md.Antonin Islam is the main researcher of this project. He is using PHP for this project\'s implementation.', '', 'We have a research project which is inspired from Laravel Framework under the supervision of Md.Al-Amin Sir. This project is under development.Md.Antonin Islam is the main researcher of this project. He is using PHP for this project\'s implementation.', '', '', '', '', '', '', 'antonin686', '1', NULL, NULL),
(4, 'Virtual Interior Design', 'https://www.office-rest.api.glitch-innovations.com/public/asset/research/AR_design.png', 'We have a research project on Augmented Reality with Voice Command & AI Voice Recognition under the supervision of Dr. Khandaker Tabin Hasan Sir.Md.Ariful Islam,Md.Antonin Islam are the researchers of this project.This project is developing with the full ', '', 'We have a research project on Augmented Reality with Voice Command & AI Voice Recognition under the supervision of Dr. Khandaker Tabin Hasan Sir.Md.Ariful Islam,Md.Antonin Islam are the researchers of this project.This project is developing with the full ', '', '', '', '', '', '', 'fahim0373', '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title_img`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'https://www.office-rest.api.glitch-innovations.com/public/asset/services/webDev.png', 'Web Development', 'We provide all types of Web solutions.We have experience to work mobile banking services & also all types of API support', NULL, NULL),
(2, 'https://www.office-rest.api.glitch-innovations.com/public/asset/services/softDev.png', 'Software Development', 'We can develop any type of Desktop(Windows/MAC) software for your organisation We are also capable of developing Android and IOS app for you', NULL, NULL),
(3, 'https://www.office-rest.api.glitch-innovations.com/public/asset/services/animDev.png', '3D Animation', 'For any type of 3D animated short film or TVC/OVC you can take our support', NULL, NULL),
(4, 'https://www.office-rest.api.glitch-innovations.com/public/asset/services/gameDev.png', 'Game Development', 'We have full capacity to built android/desktop game for you', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `web_title`
--

CREATE TABLE `web_title` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `web_title`
--

INSERT INTO `web_title` (`id`, `title`, `subtitle`, `page_title`, `created_at`, `updated_at`) VALUES
(1, 'Glitch Studios', 'A hub of Software Engineers', 'Glitch Innovations', NULL, NULL),
(2, 'Our Services', '', 'Services', NULL, NULL),
(3, 'We Do Things!', '', 'How We Function', NULL, NULL),
(4, 'Our Research Project', '', 'Research Project', NULL, NULL),
(5, 'About Us', 'Our Story', 'About', NULL, NULL),
(6, 'Contact Details', '', 'Contact', NULL, NULL),
(7, 'Our Project Analysis', '', 'Project Analysis', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_user_name_unique` (`user_name`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member-academic`
--
ALTER TABLE `member-academic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member-achievement`
--
ALTER TABLE `member-achievement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member-hobby`
--
ALTER TABLE `member-hobby`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member-network`
--
ALTER TABLE `member-network`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member-portal`
--
ALTER TABLE `member-portal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member-qualification`
--
ALTER TABLE `member-qualification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member-url`
--
ALTER TABLE `member-url`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member-workhistory`
--
ALTER TABLE `member-workhistory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `memberhastag`
--
ALTER TABLE `memberhastag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member_info`
--
ALTER TABLE `member_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `research`
--
ALTER TABLE `research`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `web_title`
--
ALTER TABLE `web_title`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `member-academic`
--
ALTER TABLE `member-academic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `member-achievement`
--
ALTER TABLE `member-achievement`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `member-hobby`
--
ALTER TABLE `member-hobby`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `member-network`
--
ALTER TABLE `member-network`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `member-portal`
--
ALTER TABLE `member-portal`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `member-qualification`
--
ALTER TABLE `member-qualification`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `member-url`
--
ALTER TABLE `member-url`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `member-workhistory`
--
ALTER TABLE `member-workhistory`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `memberhastag`
--
ALTER TABLE `memberhastag`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `member_info`
--
ALTER TABLE `member_info`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `research`
--
ALTER TABLE `research`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `web_title`
--
ALTER TABLE `web_title`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
