package models

type BlogPost struct {
	ID          uint   `json:"id" gorm:"primary_key"`
	Title       string `json:"title"`
	Content     string `json:"content"`
	Category    string `json:"category"`
	PublishedAt string `json:"published_at"`
	Tags        string `json:"tags"`
}

type CreateBlogPostInput struct {
	Title       string `json:"title" binding:"required"`
	Content     string `json:"content" binding:"required"`
	Category    string `json:"category" binding:"required"`
	PublishedAt string `json:"published_at"`
	Tags        string `json:"tags"`
}

type UpdateBlogPost struct {
	Title       string `json:"title"`
	Content     string `json:"content"`
	Category    string `json:"category"`
	PublishedAt string `json:"published_at"`
	Tags        string `json:"tags"`
}
