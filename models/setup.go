package models

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	database, err := gorm.Open(sqlite.Open("aandrews.db"), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database.")
	}

	database.AutoMigrate(&BlogPost{})

	DB = database
}
