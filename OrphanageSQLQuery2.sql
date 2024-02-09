USE [master]
GO
/****** Object:  Database [OrphanageHome]    Script Date: 15-05-2023 1.00.14 PM ******/
CREATE DATABASE [OrphanageHome]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'OrphanageHome', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\OrphanageHome.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'OrphanageHome_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\OrphanageHome_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [OrphanageHome] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [OrphanageHome].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [OrphanageHome] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [OrphanageHome] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [OrphanageHome] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [OrphanageHome] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [OrphanageHome] SET ARITHABORT OFF 
GO
ALTER DATABASE [OrphanageHome] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [OrphanageHome] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [OrphanageHome] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [OrphanageHome] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [OrphanageHome] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [OrphanageHome] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [OrphanageHome] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [OrphanageHome] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [OrphanageHome] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [OrphanageHome] SET  DISABLE_BROKER 
GO
ALTER DATABASE [OrphanageHome] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [OrphanageHome] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [OrphanageHome] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [OrphanageHome] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [OrphanageHome] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [OrphanageHome] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [OrphanageHome] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [OrphanageHome] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [OrphanageHome] SET  MULTI_USER 
GO
ALTER DATABASE [OrphanageHome] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [OrphanageHome] SET DB_CHAINING OFF 
GO
ALTER DATABASE [OrphanageHome] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [OrphanageHome] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [OrphanageHome] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [OrphanageHome] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [OrphanageHome] SET QUERY_STORE = ON
GO
ALTER DATABASE [OrphanageHome] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [OrphanageHome]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 15-05-2023 1.00.14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AdminDetails]    Script Date: 15-05-2023 1.00.14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdminDetails](
	[Id] [bigint] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[EmailId] [varchar](30) NOT NULL,
	[Password] [varchar](20) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[childrenDataTB]    Script Date: 15-05-2023 1.00.14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[childrenDataTB](
	[childID] [int] IDENTITY(1,1) NOT NULL,
	[firstName] [varchar](50) NOT NULL,
	[lastName] [varchar](50) NULL,
	[dob] [varchar](30) NULL,
	[age] [int] NULL,
	[gender] [varchar](25) NULL,
	[standard] [varchar](20) NULL,
	[guardianName] [varchar](50) NULL,
	[contactNo] [varchar](15) NULL,
	[address] [varchar](max) NULL,
	[doj] [varchar](40) NULL,
	[remarks] [varchar](max) NULL,
	[type_of_child] [varchar](30) NULL,
	[sponser] [varchar](50) NOT NULL,
	[recordStatus] [varchar](50) NULL,
 CONSTRAINT [PK_childrenDataTB] PRIMARY KEY CLUSTERED 
(
	[childID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ContactUsTB]    Script Date: 15-05-2023 1.00.14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContactUsTB](
	[contactId] [int] IDENTITY(1,1) NOT NULL,
	[fullname] [varchar](50) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[mobile] [varchar](15) NOT NULL,
	[description] [varchar](max) NULL,
 CONSTRAINT [PK_ContactUsTB] PRIMARY KEY CLUSTERED 
(
	[contactId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExpendituresTB]    Script Date: 15-05-2023 1.00.14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpendituresTB](
	[food] [int] NULL,
	[clothing] [int] NULL,
	[health] [int] NULL,
	[education] [int] NULL,
	[sanitation] [int] NULL,
	[salaries] [int] NULL,
	[maintainance] [int] NULL,
	[others] [int] NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
	[onDate] [varchar](max) NULL,
 CONSTRAINT [PK_ExpendituresTB] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PaymentDetailsTb]    Script Date: 15-05-2023 1.00.14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PaymentDetailsTb](
	[PayId] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [varchar](50) NOT NULL,
	[EmailId] [varchar](30) NOT NULL,
	[Phone] [varchar](10) NOT NULL,
	[City] [varchar](50) NULL,
	[Country] [varchar](50) NOT NULL,
	[AmountPaid] [bigint] NOT NULL,
 CONSTRAINT [PK_PaymentDetailsTb] PRIMARY KEY CLUSTERED 
(
	[PayId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sponsersTB]    Script Date: 15-05-2023 1.00.14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sponsersTB](
	[sponserID] [int] IDENTITY(1,1) NOT NULL,
	[orgName] [varchar](50) NULL,
	[chairman] [varchar](50) NULL,
	[location] [varchar](max) NULL,
	[email] [varchar](50) NULL,
	[sponserDetails] [varchar](max) NULL,
 CONSTRAINT [PK_sponsersTB] PRIMARY KEY CLUSTERED 
(
	[sponserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ExpendituresTB] ADD  CONSTRAINT [DF_ExpendituresTB_onDate]  DEFAULT (getdate()) FOR [onDate]
GO
/****** Object:  StoredProcedure [dbo].[AdditionOfExpenditures]    Script Date: 15-05-2023 1.00.14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AdditionOfExpenditures] 
    @add int
AS
BEGIN
    DECLARE @Result INT
    SELECT @Result =SUM(food+clothing+health+education+sanitation+salaries+maintainance)
	FROM  ExpendituresTB WHERE id=@add
	SELECT	'ReturnValue' = @Result
   
END
GO
USE [master]
GO
ALTER DATABASE [OrphanageHome] SET  READ_WRITE 
GO
