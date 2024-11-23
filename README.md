
# Attack Capital Project

## Overview
This project consists of two main components:
1. **Backend**: Handles server-side logic, APIs, and database operations.
2. **Frontend**: Provides a client-facing interface built with Next.js.

---

## Prerequisites
Ensure you have the following installed on your system:
- Node.js (v16+ recommended)
- npm or yarn
- A code editor (e.g., VSCode)

---

## Setup Instructions

### 1. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update `.env` with your environment-specific configurations.

4. Run the backend server:
   ```bash
   npm run dev
   ```
   The server should start at `http://localhost:5000` (default).

---

### 2. Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update `.env` with your environment-specific configurations.

4. Run the frontend application:
   ```bash
   npm run dev
   ```
   The application should be accessible at `http://localhost:3000`.

---

## Testing
- **Backend**:
  Run backend tests using:
  ```bash
  npm test
  ```

- **Frontend**:
  Run frontend tests using:
  ```bash
  npm test
  ```

---

## Deployment
### Backend Deployment
1. Build the backend project:
   ```bash
   npm run build
   ```
2. Use a deployment platform like AWS, Heroku, or Docker to host the backend.

### Frontend Deployment
1. Build the frontend project:
   ```bash
   npm run build
   ```
2. Deploy using platforms like Vercel or Netlify.

---

## Directory Structure

### Backend
```
backend/
|-- config/
|-- controllers/
|-- middleware/
|-- models/
|-- routes/
|-- server.ts
|-- utils/
```

### Frontend
```
frontend/
|-- app/
|-- components/
|-- context/
|-- lib/
|-- styles/
|-- public/
|-- next.config.ts
|-- middleware.ts
```

---

## License
This project is licensed under [Your License].
