# Full-Stack Authentication Starter (MERN)

This is a comprehensive, production-ready starter template for a full-stack Single Page Application (SPA) featuring a complete authentication system. It uses the MERN stack (MongoDB, Express, React, Node.js) and includes modern tools like Redux Toolkit, Tailwind CSS, and Passport.js.

## Features

-   **Complete User Authentication:**
    -   User Registration (Name, Email, Password)
    -   Secure User Login with Email & Password
    -   Social Authentication with **Google (OAuth 2.0)**
-   **Security:**
    -   **JSON Web Tokens (JWT)** for session management.
    -   **Password Hashing** using `bcryptjs`.
    -   **Protected Routes** for both frontend and backend.
    -   Secure **Password Reset** flow via email.
-   **Frontend (Client):**
    -   Built with **React** and **Vite** for a fast development experience.
    -   State management with **Redux Toolkit**.
    -   Client-side routing with **React Router v6**.
    -   Modern, responsive UI styled with **Tailwind CSS**.
    -   User feedback via **React Hot Toast** notifications.
-   **Backend (Server):**
    -   Robust API built with **Node.js** and **Express**.
    -   **MongoDB** integration using **Mongoose** for data modeling.
    -   Google OAuth strategy handled by **Passport.js**.
    -   Email delivery for password resets using **Nodemailer**.
    -   Environment variable management with `dotenv`.

## Tech Stack

| Area    | Technology                                                                                                   |
| :------ | :----------------------------------------------------------------------------------------------------------- |
| **Frontend** | React, Vite, Redux Toolkit, React Router, Axios, Tailwind CSS                                                |
| **Backend**  | Node.js, Express, MongoDB, Mongoose, Passport.js, JSON Web Token (JWT), Bcrypt.js, Nodemailer             |

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or higher recommended)
-   [MongoDB](https://www.mongodb.com/try/download/community) instance (local or a cloud service like MongoDB Atlas)
-   [Google OAuth Credentials](https://console.cloud.google.com/apis/credentials) from the Google Cloud Platform.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/swyamsharma-auth.git
    cd swyamsharma-auth
    ```

2.  **Set up the Backend (Server):**
    -   Navigate to the server directory:
        ```bash
        cd server
        ```
    -   Install dependencies:
        ```bash
        npm install
        ```
    -   Create a `.env` file by copying the example:
        ```bash
        cp .env.example .env
        ```
    -   Populate the `.env` file with your credentials (see [Server Environment Variables](#server-environment-variables) section below).

3.  **Set up the Frontend (Client):**
    -   Navigate to the client directory from the root folder:
        ```bash
        cd ../client
        ```
    -   Install dependencies:
        ```bash
        npm install
        ```
    -   Create a `.env` file by copying the example:
        ```bash
        cp .env.example .env
        ```
    -   Populate the `.env` file (see [Client Environment Variables](#client-environment-variables) section below).

### Running the Application

You will need to run the client and server in two separate terminals.

-   **Run the Backend Server:**
    ```bash
    # From the /server directory
    npm start
    ```
    The server will start on `http://localhost:5000` (or the port specified in your `.env`).

-   **Run the Frontend Client:**
    ```bash
    # From the /client directory
    npm run dev
    ```
    The client will start on `http://localhost:5173` (or the next available port).

## Environment Variables

### Server Environment Variables (`/server/.env`)

| Variable             | Description                                                                     | Example                                     |
| -------------------- | ------------------------------------------------------------------------------- | ------------------------------------------- |
| `MONGODB_URI`        | Your MongoDB connection string.                                                 | `mongodb://localhost:27017/authdb`          |
| `JWT_SECRET`         | A long, random, secret string for signing JWTs.                                 | `a-very-long-and-random-secret-string`      |
| `JWT_EXPIRES_IN`     | Expiration time for JWTs.                                                       | `30d`                                       |
| `PORT`               | The port for the backend server.                                                | `5000`                                      |
| `GOOGLE_CLIENT_ID`   | Your Google OAuth Client ID.                                                    | `your-google-client-id.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Your Google OAuth Client Secret.                                              | `GOCSPX-your-secret`                        |
| `GOOGLE_CALLBACK_URL`| The callback URL for Google OAuth. **Must match the server endpoint.**          | `http://localhost:5000/api/auth/google/callback` |
| `CLIENT_URL`         | The base URL of your frontend application for redirects.                        | `http://localhost:5173`                     |
| `SMTP_HOST`          | Hostname of your SMTP service for sending emails.                               | `smtp.mailtrap.io`                          |
| `SMTP_PORT`          | Port of your SMTP service.                                                      | `2525`                                      |
| `SMTP_USER`          | Username for your SMTP service.                                                 | `your-smtp-username`                        |
| `SMTP_PASS`          | Password for your SMTP service.                                                 | `your-smtp-password`                        |
| `SMTP_FROM_NAME`     | The name that appears in the "From" field of the email.                         | `Auth App`                                  |
| `SMTP_FROM_EMAIL`    | The email address that appears in the "From" field.                             | `noreply@authapp.com`                       |

### Client Environment Variables (`/client/.env`)

| Variable        | Description                                    | Example                     |
| --------------- | ---------------------------------------------- | --------------------------- |
| `VITE_API_URL`  | The base URL of your backend server API.       | `http://localhost:5000`     |

## API Endpoints

All routes are prefixed with `/api/auth`.

| Method | Endpoint                    | Description                                       | Access   |
| :----- | :-------------------------- | :------------------------------------------------ | :------- |
| `POST` | `/register`                 | Register a new user with name, email, password.   | Public   |
| `POST` | `/login`                    | Log in a user with email and password.            | Public   |
| `POST` | `/forgotpassword`           | Send a password reset link to the user's email.   | Public   |
| `PUT`  | `/resetpassword/:resettoken`| Reset the user's password using a valid token.    | Public   |
| `GET`  | `/google`                   | Redirects to Google for authentication.           | Public   |
| `GET`  | `/google/callback`          | Callback URL for Google to redirect to after auth.| Public   |
| `GET`  | `/me`                       | Get the profile of the currently logged-in user.  | Private  |


### NOTE : Do check the package.json in the server directory, the npm start command is modified. "start": "nodemon --exec 'node -r dotenv/config server.js'". Also, I'm using sendgrid as SMTP host.
