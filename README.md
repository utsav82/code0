# Code Snippets Web Application

The Code Snippets Web Application is a platform designed to facilitate the submission and display of code snippets. It enables users to submit their code snippets along with relevant details and provides a user-friendly interface to view and manage submissions.

## Features

- **Submission Form**: Allows users to submit code snippets with username, preferred language, stdin, and source code.
- **Submission Display**: Displays all submitted entries in a tabular format, showcasing username, language, stdin, and submission timestamp.
- **Output Retrieval**: Utilizes Judge0 API to retrieve the output of code snippets and display it in the submission table.
- **Redis Caching**: Implements Redis caching to optimize performance by reducing database read requests.
- **Pagination**: Supports lazy loading pagination to efficiently navigate through submissions.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: MySQL
- **Cache**: Redis
- **External API**: Judge0

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd code-snippets-app`
3. Install dependencies:
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`
4. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Define the required environment variables (see `.env.example` for reference).
5. Start the backend server: `npm start` in the `backend` directory.
6. Start the frontend server: `npm start` in the `frontend` directory.
7. Access the application at `http://localhost:3000` in your browser.

## Database Schema

### User Table

| Field    | Type         | Description                  |
|----------|--------------|------------------------------|
| id       | INT          | Unique identifier            |
| username | VARCHAR(255) | Username of the user         |

### Code Snippets Table

| Field       | Type         | Description                                   |
|-------------|--------------|-----------------------------------------------|
| id          | INT          | Unique identifier                             |
| username    | VARCHAR(255) | Username of the user who submitted the snippet |
| language    | ENUM         | Preferred code language                       |
| stdin       | TEXT         | Standard input (stdin)                        |
| source_code | TEXT         | Source code of the snippet                    |
| timestamp   | TIMESTAMP    | Timestamp of submission                       |
| output      | TEXT         | Output of the code snippet execution          |

## Bonus Tasks

1. **Redis Caching**: Caches output from the Judge0 API to reduce database read requests and improve performance.
2. **External API Integration (Judge0)**: Retrieves and displays the output of code snippets, enhancing user experience.

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
