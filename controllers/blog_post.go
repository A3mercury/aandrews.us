package controllers

import (
	"net/http"

	"aandrews.us/models"
	"github.com/gin-gonic/gin"
)

func FindBlogPosts(c *gin.Context) {
	var blogPosts []models.BlogPost
	models.DB.Find(&blogPosts)
	c.JSON(http.StatusOK, gin.H{"data": blogPosts})
}

func FindBlogPost(c *gin.Context) {
	var blogPost models.BlogPost

	if err := models.DB.Where("unique_url = ?", c.Param("unique_url")).First(&blogPost).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found."})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": blogPost})
}

func CreateBook(c *gin.Context) {
	// validate input
	var input models.CreateBlogPostInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var blogPost models.BlogPost
	if err := models.DB.Where("unique_url = ?", input.UniqueUrl).First(&blogPost).Error; err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Unique URL is already in use."})
		return
	}

	// create blog post
	post := models.BlogPost{
		Title:     input.Title,
		UniqueUrl: input.UniqueUrl,
		Content:   input.Content,
		Category:  input.Category,
	}
	models.DB.Create(&post)

	c.JSON(http.StatusOK, gin.H{"data": post})
}

func UpdateBlogPost(c *gin.Context) {
	// get model if exists
	var post models.BlogPost
	if err := models.DB.Where("id = ?", c.Param("id")).First(&post).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Post not found"})
		return
	}

	// validate input
	var input models.UpdateBlogPost
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	models.DB.Model(&post).Updates(input)

	c.JSON(http.StatusOK, gin.H{"data": post})
}

func DeleteBlogPost(c *gin.Context) {
	// get model if exists
	var post models.BlogPost
	if err := models.DB.Where("id = ?", c.Param("id")).First(&post).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Post not found"})
		return
	}

	models.DB.Delete(&post)

	c.JSON(http.StatusOK, gin.H{"data": true})
}
