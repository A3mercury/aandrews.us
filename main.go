package main

import (
	"log"
	"net/http"
	"os"
	"strings"

	"aandrews.us/controllers"
	"aandrews.us/models"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

// var db = make(map[string]string)

func setupRouter() *gin.Engine {
	router := gin.Default()
	router.Use(CORSMiddleware())

	models.ConnectDatabase()

	router.GET("/", func(c *gin.Context) {
		c.HTML(
			http.StatusOK,
			"src/index.html",
			gin.H{"title": "Home Page"},
		)
	})

	router.POST("/register", controllers.Register)
	router.POST("/login", controllers.Login)

	// Blog Posts
	protected := router.Group("/api")
	protected.GET("/blog-posts", controllers.FindBlogPosts)
	protected.GET("/blog-post/:unique_url", controllers.FindBlogPost)
	protected.Use(controllers.AuthMiddleware())
	{
		protected.POST("/blog-post", controllers.CreateBlogPost)
		protected.PATCH("/blog-post/:id", controllers.UpdateBlogPost)
		protected.DELETE("/blog-post/:id", controllers.DeleteBlogPost)
	}

	// Ping test
	router.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	router.LoadHTMLGlob("templates/*")

	return router
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func init() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file: %s", err)
	}
}

func main() {
	router := setupRouter()
	// Listen and Server in 0.0.0.0:8080
	port := os.Getenv("PORT")
	router.Run(strings.Join([]string{":", port}, ""))
}
