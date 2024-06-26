CREATE TABLE code_snippets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    language ENUM('C++', 'Java', 'JavaScript', 'Python') NOT NULL,
    source_code TEXT NOT NULL,
    output TEXT,
    stdin TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    token VARCHAR(255)
);
