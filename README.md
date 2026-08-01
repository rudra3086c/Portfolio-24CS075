# Student Portfolio - React + Vite

## 📌 Project Overview

This project is a **Student Portfolio** web application built using **React**, **Vite**, **React Router**, and the **GitHub REST API**. The application demonstrates component-based development, client-side routing, state management using React Hooks, and asynchronous data fetching from an external API.

The project was developed as part of the **Advanced Web Development Frameworks (AWDF)** laboratory.

---

## 🚀 Technologies Used

* React 18+
* Vite
* React Router DOM
* JavaScript (ES6)
* JSX
* HTML5
* CSS3
* Fetch API
* GitHub REST API
* Node.js
* npm

---

## ✨ Features

### Practical 1

* Reusable React components
* Component-based UI
* Props for data passing
* Dynamic Skills component
* Single-page portfolio layout

### Practical 2

* React Router navigation
* Home, Projects, and Contact routes
* Controlled form using `useState`
* Dark/Light mode toggle
* Live character count
* Show/Hide Help toggle
* Custom 404 Not Found page

### Practical 3

* GitHub REST API integration
* Repository list fetched dynamically
* Loading spinner while fetching data
* Error handling with retry functionality
* Repository search/filter
* Displays repository name
* Displays repository URL
* Displays GitHub star count
* Conditional rendering using loading, success, and error states

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── NavBar.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Footer.jsx
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Spinner.jsx
│   ├── ErrorMessage.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

---

## 🌐 API Used

**GitHub REST API**

Endpoint:

```text
https://api.github.com/users/rudra3086c/repos
```

The Projects page fetches repositories dynamically and displays:

* Repository Name
* Repository URL
* GitHub Star Count

---

## 📄 Application Routes

| Route       | Description                              |
| ----------- | ---------------------------------------- |
| `/`         | Home page                                |
| `/projects` | Fetches and displays GitHub repositories |
| `/contact`  | Contact form with state management       |
| `*`         | Custom 404 page                          |

---

## 📚 React Concepts Demonstrated

* Functional Components
* Props
* React Router
* useState
* useEffect
* Conditional Rendering
* Fetch API
* REST API Integration
* Controlled Components

---

## 🚀 Installation

```bash
git clone https://github.com/rudra3086c/Portfolio-24CS075.git
cd Portfolio-24CS075
npm install
npm run dev
```

---

## 📖 Learning Outcomes

After completing this project, students will be able to:

* Build reusable React components.
* Implement client-side routing.
* Manage application state using React Hooks.
* Fetch data from a REST API.
* Handle loading and error states.
* Render asynchronous data dynamically.
* Build a complete Single Page Application (SPA).

---

## 👨‍💻 Author

**Rudra Patel**

**Roll No:** 24CS075

Computer Science & Engineering

CHARUSAT

---

## 📄 License

This project is developed for educational purposes as part of the **Advanced Web Development Frameworks (AWDF)** laboratory.
