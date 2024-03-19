# Code Snippets Web Application

The Code Snippets Web Application is a platform designed to facilitate the submission and display of code snippets. It enables users to submit their code snippets along with relevant details and provides a user-friendly interface to view and manage submissions.

## Features

- **Submission Form**: Allows users to submit code snippets with username, preferred language, stdin, and source code.
- **Submission Display**: Displays all submitted entries in a tabular format, showcasing username, language, stdin, and submission timestamp.
- **Output Retrieval**: Utilizes Judge0 API to retrieve the output of code snippets and display it in the submission table.
- **Redis Caching**: Implements Redis caching to optimize performance by reducing requests to the API for fetching output.
- **Pagination**: Supports lazy loading pagination to efficiently navigate through submissions.

## Architecture

### Backend

- [Node.js](https://nodejs.org/) for the backend
- [Express.js](https://expressjs.com/) for handling HTTP requests
- [MySQL](https://www.mysql.com/) for the database
- [Redis](https://redis.io/) for caching
- [Judge0](https://www.judge0.com/) for code execution

### Frontend

- [Next.js](https://nextjs.org/) for building the user interface
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Installation

1. Clone the repository: `git clone https://github.com/utsav82/tuf-assignment`
2. Navigate to the project directory: `cd tuf-assignment`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - Create a `.env` file.
   - Define the required environment variables (see below for reference).
5. Start the backend server: `npm start`.
6. Access the application at `http://localhost:8080` in your browser.

## Database Schema

### Code Snippets Table

| Field       | Type         | Description                                    |
| ----------- | ------------ | ---------------------------------------------- |
| id          | INT          | Unique identifier                              |
| username    | VARCHAR(255) | Username of the user who submitted the snippet |
| language    | ENUM         | Preferred code language                        |
| stdin       | TEXT         | Standard input (stdin)                         |
| source_code | TEXT         | Source code of the snippet                     |
| timestamp   | TIMESTAMP    | Timestamp of submission                        |
| output      | TEXT         | Output of the code snippet execution           |

## Environment Variables

- `RAPIDAPI_KEY`: API key for accessing the Judge0 API.
- `REDIS_URL`: URL for connecting to the Redis cache server.
- `MYSQL_PASSWORD`: Password for MySQL database access.
- `MYSQL_HOST`: Hostname or IP address of the MySQL database server.
- `MYSQL_USER`: Username for MySQL database access.
- `MYSQL_DATABASE`: Name of the MySQL database.
- `MYSQL_PORT`: Port number for the MySQL database server.

## Contributing

Contributions are welcome! Please feel free to open issues or pull requests for any improvements or additional features.

## License

This project is licensed under the [MIT License](LICENSE).
