CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    content TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    author VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'Admin',
    category VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'News',
    published_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO articles (title, content, author, category) VALUES
('First article', 'Content of the first article.', 'Jan Kowalski', 'World'),
('Second article', 'Content of the second article.', 'Anna Nowak', 'Technology'),
('Third article', 'Content of the third article.', 'Piotr Wisniewski', 'Sports');