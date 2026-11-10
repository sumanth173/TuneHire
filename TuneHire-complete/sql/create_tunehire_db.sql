
CREATE DATABASE TuneHireDB;
GO
USE TuneHireDB;
GO
CREATE TABLE [Users] (
    Id INT IDENTITY PRIMARY KEY,
    Email NVARCHAR(256) NOT NULL,
    PasswordHash NVARCHAR(MAX) NOT NULL,
    Role NVARCHAR(50) NOT NULL,
    DisplayName NVARCHAR(200),
    CreatedAt DATETIME2 DEFAULT GETDATE()
);
CREATE TABLE [Musicians] (
    Id INT IDENTITY PRIMARY KEY,
    UserId INT NOT NULL,
    Name NVARCHAR(200),
    Location NVARCHAR(200),
    Genre NVARCHAR(200),
    Instruments NVARCHAR(500),
    ExperienceYears INT,
    PricePerEvent DECIMAL(18,2),
    Bio NVARCHAR(MAX),
    ProfilePhotoUrl NVARCHAR(500)
);
CREATE TABLE [Bookings] (
    Id INT IDENTITY PRIMARY KEY,
    UserId INT NOT NULL,
    MusicianId INT NOT NULL,
    EventType NVARCHAR(100),
    EventDate DATETIME2,
    Amount DECIMAL(18,2),
    Status NVARCHAR(50),
    CreatedAt DATETIME2 DEFAULT GETDATE()
);
CREATE TABLE [Reviews] (
    Id INT IDENTITY PRIMARY KEY,
    BookingId INT NOT NULL,
    Rating INT,
    Comment NVARCHAR(MAX),
    CreatedAt DATETIME2 DEFAULT GETDATE()
);
