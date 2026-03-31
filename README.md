# MegaBlog

A powerful and user-friendly blogging platform built with modern web technologies. Create, edit, and manage blog posts with rich text editing capabilities.

## Live Demo

Check out the live demo here: https://megablog-iota.vercel.app/

## Description

MegaBlog is a full-featured blogging application that allows users to create, publish, edit, and manage blog posts. It features a beautiful and responsive interface with rich text editing capabilities using TinyMCE. Users can authenticate securely, create their own posts, and browse published content from other bloggers.

## Features

- **User Authentication** - Secure signup and login functionality
- **Create & Edit Posts** - Create new blog posts with rich text editor
- **Publish/Unpublish** - Control post visibility with ease
- **View All Posts** - Browse and discover blog posts from all users
- **Post Details** - View full post content with rich formatting
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Clean UI** - Intuitive and user-friendly interface
- **Rich Text Editor** - TinyMCE integration for professional content creation
- **State Management** - Redux for efficient application state management

## Tech Stack

- **Frontend Framework** - React 18
- **Styling** - Tailwind CSS
- **State Management** - Redux Toolkit & React-Redux
- **Routing** - React Router DOM
- **Rich Text Editor** - TinyMCE with React integration
- **Backend/Database** - Appwrite
- **Form Handling** - React Hook Form
- **HTML Parsing** - html-react-parser
- **Build Tool** - Vite
- **Linting** - ESLint

## Project Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd megablog
```

2. Install dependencies:
```bash
npm i
```

3. Install required packages:
```bash
npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form
npm install tailwindcss @tailwindcss/vite
npm install tinymce
```

### Configuration

1. Create a `.conf/conf.js` file with your Appwrite configuration:
```javascript
export const conf = {
  appwriteUrl: "YOUR_APPWRITE_URL",
  appwriteProjectId: "YOUR_PROJECT_ID",
  appwriteApiKey: "YOUR_API_KEY",
  appwriteDatabaseId: "YOUR_DATABASE_ID",
  appwriteCollectionId: "YOUR_COLLECTION_ID",
  appwriteBucketId: "YOUR_BUCKET_ID",
};
```

### Running the Application

**Development Mode:**
```bash
npm run dev
```
The application will start at `http://localhost:5173`

**Production Build:**
```bash
npm run build
```

**Preview Build:**
```bash
npm run preview
```