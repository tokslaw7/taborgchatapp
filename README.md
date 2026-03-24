# TABORG Chat App

A lightweight real-time chat application built with **React** and **ChatEngine**. The app provides a simple login screen, a custom chat feed, support for text and image messages, read receipts, and typing indicators.

> **Note:** Although the repository description says **MERN**, the public code in this repository is currently a **React frontend** integrated with ChatEngine for real-time chat features.

## Overview

TABORG Chat App is a chat UI project bootstrapped with Create React App and customized with reusable components for:
- user login
- chat feed rendering
- outgoing and incoming message display
- file/image uploads
- read receipts
- typing indicators

The project uses the `react-chat-engine` package for the real-time chat experience and `axios` to validate user credentials against the ChatEngine API.

## Features

- **Login form** for username and password entry
- **Real-time chat interface** powered by ChatEngine
- **Custom message feed** for better control over layout and styling
- **Separate message components** for your messages and other users' messages
- **Image/file attachment support**
- **Typing indicator support**
- **Read receipts** using user avatars
- **Local storage persistence** for login state

## Tech Stack

- **Frontend:** React 17, Create React App
- **HTTP Client:** Axios
- **Chat SDK:** `react-chat-engine`
- **Icons:** `@ant-design/icons`
- **Styling:** CSS

## Project Structure

```bash
src/
├── components/
│   ├── ChatFeed.jsx
│   ├── LoginForm.jsx
│   ├── MessageForm.jsx
│   ├── MyMessage.jsx
│   └── TheirMessage.jsx
├── App.css
├── App.js
├── index.css
└── index.js
```

## How It Works

### Authentication flow
- The app checks whether a `username` exists in `localStorage`.
- If no username is found, it renders the `LoginForm`.
- The login form sends a request to the ChatEngine API to validate the supplied credentials.
- On success, the username and password are stored in `localStorage`, and the page reloads.

### Chat experience
- `App.js` renders the `ChatEngine` component.
- `ChatFeed.jsx` customizes how chats, messages, and read receipts appear.
- `MessageForm.jsx` handles text input, typing events, and image uploads.
- `MyMessage.jsx` and `TheirMessage.jsx` render messages differently depending on the sender.

## Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js** (recommended LTS version)
- **npm**

### Clone the repository
```bash
git clone https://github.com/tokslaw7/taborgchatapp.git
cd taborgchatapp
```

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm start
```

The app will open at:
```bash
http://localhost:3000
```

## Available Scripts

In the project directory, you can run:

```bash
npm start
```
Runs the app in development mode.

```bash
npm test
```
Launches the test runner.

```bash
npm run build
```
Builds the app for production.

```bash
npm run eject
```
Ejects the app configuration.

## Configuration Notes

The current implementation includes ChatEngine-specific values directly in the source code. Before using this project in a shared or production environment, update the configuration.

### Values currently wired into the app
- **Project ID** is referenced in the app
- **ChatEngine credentials** are referenced in the app

### Recommended improvement
Move all sensitive configuration into environment variables.

Example:

```env
REACT_APP_CHAT_ENGINE_PROJECT_ID=your_project_id
REACT_APP_CHAT_ENGINE_USERNAME=your_username
REACT_APP_CHAT_ENGINE_SECRET=your_secret
```

Then reference them in your React code:

```js
projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
```

## Important Implementation Note

The current app has a mismatch between the login flow and the main chat session:

- `LoginForm.jsx` validates the entered username and password and stores them in `localStorage`
- `App.js` currently renders `ChatEngine` with hardcoded `userName` and `userSecret`

That means the login form behaves more like an access gate than a true dynamic session switch.

### Recommended fix
Update `App.js` to use the values stored in `localStorage`:

```js
userName={localStorage.getItem('username')}
userSecret={localStorage.getItem('password')}
```

This change will make the chat session match the logged-in user.

## Suggested Enhancements

- Add logout functionality
- Display login errors on failed authentication
- Move secrets and project IDs into environment variables
- Add route protection
- Add better validation and form feedback
- Add user profile support
- Add chat room creation and management
- Add unit and integration tests
- Improve accessibility and responsive behavior

## Security Note

Do not keep production credentials, API secrets, or user secrets directly in frontend source files. Rotate any exposed credentials and move them to environment-based configuration where possible.

## Learning Value

This project is a good example of how to:
- integrate a third-party real-time chat SDK into a React app
- break a chat UI into reusable components
- handle file uploads in a messaging workflow
- customize sender-specific message rendering
- build a simple authenticated chat experience quickly

## License

No license is currently specified in the repository. Add a license file if you want to define reuse permissions.

## Author

**Tokslaw**  
GitHub: [@tokslaw7](https://github.com/tokslaw7)
