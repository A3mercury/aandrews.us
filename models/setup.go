package models

import (
	"os"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	database, err := gorm.Open(sqlite.Open("aandrews.db"), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database.")
	}

	database.AutoMigrate(User{})
	database.AutoMigrate(BlogPostContent{})
	database.AutoMigrate(BlogPost{})

	DB = database

	registerRootUser()
}

func registerRootUser() {
	// Check to see if user exists already
	var existingUser User
	if err := DB.Where("username = ?", os.Getenv("ROOT_USER_USERNAME")).First(&existingUser).Error; err == nil {
		return
	}

	createUser := CreateUser{
		Username: os.Getenv("ROOT_USER_USERNAME"),
		Password: os.Getenv("ROOT_USER_PASSWORD"),
	}

	if err := createUser.HashPassword(); err != nil {
		return
	}

	user := User{
		Username: createUser.Username,
		Password: createUser.Password,
	}

	DB.Create(&user)
}
