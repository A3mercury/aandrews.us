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
	database.AutoMigrate(BlogPost{})
	database.AutoMigrate(BlogPostContent{})

	DB = database

	registerRootUser()
}

func registerRootUser() {
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
