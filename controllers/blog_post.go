package controllers

import (
	"net/http"
	"time"

	"aandrews.us/models"
	"github.com/gin-gonic/gin"
)

func FindBlogPosts(c *gin.Context) {
	var blogPosts []models.BlogPost
	models.DB.Preload("Content").Find(&blogPosts)
	c.JSON(http.StatusOK, gin.H{"data": blogPosts})
}

func FindBlogPost(c *gin.Context) {
	var blogPost models.BlogPost

	if err := models.DB.Where("unique_url = ?", c.Param("unique_url")).Preload("Content").First(&blogPost).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found."})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": blogPost})
}

func CreateBlogPost(c *gin.Context) {
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
		Title:       input.Title,
		UniqueUrl:   input.UniqueUrl,
		Category:    input.Category,
		PublishedAt: time.Now().Format(time.RFC3339),
	}
	post.Content = make([]models.BlogPostContent, 0)
	for index, item := range input.Content {
		content := models.BlogPostContent{
			Key:    item.Key,
			Value:  item.Value,
			Order:  index,
			Src:    item.Src,
			Alt:    item.Alt,
			Width:  item.Width,
			Height: item.Height,
			Href:   item.Href,
		}

		post.Content = append(post.Content, content)
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

	updatedPost := models.BlogPost{
		ID:        post.ID,
		Title:     input.Title,
		UniqueUrl: input.UniqueUrl,
		Category:  input.Category,
	}

	var blogPostContent models.BlogPostContent
	models.DB.Where("blog_post_id = ?", updatedPost.ID).Delete(&blogPostContent)

	content := make([]models.BlogPostContent, 0)
	for index, item := range input.Content {
		content = append(content, models.BlogPostContent{Key: item.Key, Value: item.Value, Order: index, BlogPostID: updatedPost.ID})
	}

	models.DB.Create(&content)
	updatedPost.Content = content
	models.DB.Model(&post).Updates(updatedPost)

	c.JSON(http.StatusOK, gin.H{"data": updatedPost})
}

func DeleteBlogPost(c *gin.Context) {
	// get model if exists
	var post models.BlogPost
	if err := models.DB.Where("id = ?", c.Param("id")).First(&post).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Post not found"})
		return
	}

	models.DB.Delete(&post)

	var postContent []models.BlogPostContent
	models.DB.Delete(&postContent, "blog_post_id = ?", c.Param("id"))

	c.JSON(http.StatusOK, gin.H{"data": true})
}
