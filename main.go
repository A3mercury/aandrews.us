package main

import (
	"net/http"

	"aandrews.us/controllers"
	"aandrews.us/models"
	"github.com/gin-gonic/gin"
)

// var db = make(map[string]string)

func setupRouter() *gin.Engine {
	router := gin.Default()

	models.ConnectDatabase()

	router.GET("/", func(c *gin.Context) {
		c.HTML(
			http.StatusOK,
			"index.html",
			gin.H{"title": "Home Page"},
		)
	})

	router.GET("/blog-posts", controllers.FindBlogPosts)
	router.POST("/blog-post", controllers.CreateBook)
	router.GET("/blog-post/:id", controllers.FindBlogPost)
	router.PATCH("/blog-post/:id", controllers.UpdateBlogPost)
	router.DELETE("/blog-post/:id", controllers.DeleteBlogPost)

	// Ping test
	router.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	router.GET("/books", controllers.FindBooks)

	router.LoadHTMLGlob("templates/*")

	return router
}

func main() {
	router := setupRouter()
	// Listen and Server in 0.0.0.0:8080
	router.Run(":8080")
}
