# My First React Blog App

This repository contains the source code for a simple blog application frontend, which was one of my first projects while learning the fundamentals of React. The application is built with React and uses Material-UI for its components.

The project was created to practice core React concepts such as components, state management with hooks, API calls, and client-side routing. It features a page to display blog posts fetched from a public API and a separate page with a form to add new blogs.


## 🚀 Features



* **View Blog Posts**: The home page fetches and displays a list of blog posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) in a clean, tabular format.
* **Add a New Blog**: A dedicated page provides a simple form to input a blog name, description, and author. (Note: This is a UI-only feature for this project).
* **Simple Navigation**: A responsive navigation bar allows users to easily switch between the "Home" and "Add Blog" pages.
* **Component-Based Structure**: The application is broken down into reusable React components.


## 📦 Tech Stack



* **React**: The core library for building the user interface.
* **Material-UI (MUI)**: Used for pre-built UI components like buttons, text fields, tables, and the app bar.
* **Axios**: For making asynchronous HTTP requests to fetch data from the API.
* **React Router**: For handling client-side routing between pages.


## 🔧 Getting Started


### Prerequisites



* Node.js and npm installed on your machine.


### Installation & Running the App**



1. **Clone the repository:** 
```bash
git clone https://github.com/ArfanAnulal/My-First-React-Blog-App.git
```

2. **Navigate to the project directory:**
```bash
cd My-First-React-Blog-App
```

3. **Install the dependencies:** 
```bash
npm install 
```

4. **Run the development server:**
```bash
npm start 
```
The application will be running on your localhost.


## 📂 Project Structure

Here's a brief overview of the main components:



* Navbar.jsx: A navigation bar component with links to the Home and Add Blog pages.
* Home.jsx: The main page that uses the useEffect hook to fetch data from an API with axios and displays it in a table using useState to manage the component's state.
* Addblog.jsx: A simple form component using Material-UI's TextField and Button for users to input blog details.

