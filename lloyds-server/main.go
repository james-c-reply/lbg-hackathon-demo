package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type Account struct {
	Balance  string `json:"balance"`
	Currency string `json:"currency"`
}

// LogEntry defines the structure for JSON logs
type LogEntry struct {
	Time      string `json:"time"`
	Level     string `json:"level"`
	Message   string `json:"message"`
	Method    string `json:"method,omitempty"`
	Path      string `json:"path,omitempty"`
	Status    int    `json:"status,omitempty"`
	UserAgent string `json:"userAgent,omitempty"`
}

func main() {
	r := gin.New()
	r.Use(gin.Recovery())

	// JSON Logging Middleware
	r.Use(func(c *gin.Context) {
		// start := time.Now() // Removed unused variable
		path := c.Request.URL.Path
		raw := c.Request.URL.RawQuery

		c.Next()

		if raw != "" {
			path = path + "?" + raw
		}

		entry := LogEntry{
			Time:      time.Now().Format(time.RFC3339),
			Level:     "INFO",
			Message:   "Request processed",
			Method:    c.Request.Method,
			Path:      path,
			Status:    c.Writer.Status(),
			UserAgent: c.Request.UserAgent(),
		}

		logJSON, _ := json.Marshal(entry)
		fmt.Println(string(logJSON))
	})

	// CORS Middleware to allow requests from frontend (default Vite port)
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*") // For demo, allow all. In prod, strict.
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// Savings Endpoint
	// In a real app, this would query a database.
	r.GET("/api/lloyds/savings", func(c *gin.Context) {
		// Log specific handling
		logData, _ := json.Marshal(LogEntry{
			Time:    time.Now().Format(time.RFC3339),
			Level:   "INFO",
			Message: "Fetching savings balance",
		})
		fmt.Println(string(logData))

		account := Account{
			Balance:  "12,450.00",
			Currency: "GBP",
		}
		c.JSON(http.StatusOK, account)
	})

	// Run on port 8080
	r.Run(":8080")
}
