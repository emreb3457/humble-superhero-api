
# Humble Superhero API

## Project Description

The Humble Superhero API is a simple API where users can add superheroes and list them in order of their humility scores.

## Technologies Used

- **Backend:** NestJS
- **Database:** Node Cache
- **Frontend:** React

## Running the Project

To run the backend and frontend, follow these steps:

### Backend

1. Build the project:
   ```bash
   npm run build
   ```
2. Start the backend server:
   ```bash
   npm run start
   ```

### Frontend

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the frontend server:
   ```bash
   npm run start
   ```

## API Endpoints

### **1. Add Superhero**

**POST /superheroes**

- **Request Body:**
  ```json
  {
    "name": "Thor",
    "superpower": "Lightning flash",
    "humilityScore": 8
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "Thor",
    "superpower": "Lightning flash",
    "humilityScore": 8
  }
  ```

### **2. List Superheroes**

**GET /superheroes**

- **Response:**
  ```json
  [
    {
    "id": 1,
    "name": "Thor",
    "superpower": "Lightning flash",
    "humilityScore": 8
    },
    {
      "id": 2,
      "name": "Batman",
      "superpower": "Intelligence",
      "humilityScore": 9
    }
  ]
  ```

## Testing

- To run tests:
  ```bash
  npm run test
  ```

## Team Collaboration Approach

To collaborate during development, we follow these methods:

   - Backend and frontend tasks can be shared.
   - We can review each other's code and give feedback.
   - We can have daily short meetings to evaluate progress.
   - We can practice pair programming to tackle more complex tasks together and improve knowledge sharing.
   - We make sure our code is easy to understand and well-written so other team members can easily work with it and help improve it.

## If I Had More Time

   - I would build a better architecture
   - I would integrate with a database like PostgreSQL, MySQL, or MongoDB for permanent data storage.
   - I would add authentication and authorization so users can log in.
   - I would add custom error handling.
   - I would add search, pagination, and various filters.
   - I would add image upload functionality to allow superhero images.
   - I would add a logging system to help quickly address any issues.
   - I would integrate a CI/CD pipeline and Docker.
   - I would improve the frontend interface to make it more visually appealing.