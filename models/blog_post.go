package models

type BlogPost struct {
	ID          uint              `json:"id" gorm:"primary_key"`
	Title       string            `json:"title"`
	UniqueUrl   string            `json:"unique_url"`
	Content     []BlogPostContent `json:"content"`
	Category    string            `json:"category"`
	PublishedAt string            `json:"published_at"`
	Tags        string            `json:"tags"`
	ReadLength  string            `json:"read_length"`
}

type CreateBlogPostInput struct {
	Title       string            `json:"title" binding:"required"`
	UniqueUrl   string            `json:"unique_url" binding:"required"`
	Content     []BlogPostContent `json:"content" binding:"required"`
	Category    string            `json:"category" binding:"required"`
	PublishedAt string            `json:"published_at"`
	Tags        string            `json:"tags"`
	ReadLength  string            `json:"read_length"`
}

type UpdateBlogPost struct {
	Title       string            `json:"title"`
	UniqueUrl   string            `json:"unique_url"`
	Content     []BlogPostContent `json:"content"`
	Category    string            `json:"category"`
	PublishedAt string            `json:"published_at"`
	Tags        string            `json:"tags"`
	ReadLength  string            `json:"read_length"`
}

type BlogPostContent struct {
	ID         uint   `json:"id" gorm:"primary_key"`
	BlogPostID uint   `json:"blog_post_id"`
	Order      int    `json:"order"`
	Key        string `json:"key"`
	Value      string `json:"value"`
	Href       string `json:"href"`
	Src        string `json:"src"`
	Alt        string `json:"alt"`
	Width      int    `json:"width"`
	Height     int    `json:"height"`
}
