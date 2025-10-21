# 📝 Task Manager App

A modern **React + Vite** web application designed to help users manage their daily tasks efficiently, explore posts from a public API, and experience responsive design powered by **Tailwind CSS**.  

This project demonstrates **React Hooks**, **state management**, **routing**, **context API**, and **API integration** — all implemented with clean, maintainable code.

---

## 🚀 Features

### ✅ Task Management
- Add new tasks  
- Mark tasks as completed  
- Delete tasks  
- Filter tasks (All / Active / Completed)  
- Persistent storage using **localStorage**  

### 🧠 State Management & Hooks
- `useState` for managing component states  
- `useEffect` for side effects and data loading  
- `useContext` for theme switching (light/dark mode)  
- Custom hook `useLocalStorage()` to save tasks persistently  

### 🌐 API Integration
- Fetches posts from **JSONPlaceholder API**
- Displays AI-generated English post titles and descriptions  
- Search and pagination support  
- Loading and error handling states  

### 🎨 Styling & UI
- Fully responsive design with **Tailwind CSS**  
- Light/Dark mode toggle  
- Clean modern UI layout using utility-first design principles  

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|----------|
| [React](https://react.dev/) | UI Library |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [Tailwind CSS](https://tailwindcss.com/) | Styling Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [React Router](https://reactrouter.com/) | Page Routing |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | Public REST API for testing |

---

## 📂 Project Structure
src/
   assets/
   components/
       Button
       Card
       Footer
       Layout
       Navbar
       PostList
    Context/
      ThemeContext
    hooks/
      useLocalStorage
    pages/
      Home
    App
    App
    Taskmanager
    index
    main
   
---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
react-js-jsx-and-css-mastering-front-end-development-iobulejo/Task-Manager
cd task-manager
2️⃣ Install Dependencies
npm install
npm run dev
Then open your browser at http://localhost:5173

npm run build
npm run preview
🌙 Theme Management

The app uses React’s Context API for global theme state:

Users can toggle between Light 🌞 and Dark 🌚 themes.

The theme preference is stored in localStorage for persistence.

The app fetches posts from:
https://jsonplaceholder.typicode.com/posts
Each post is reimagined into AI-generated English content dynamically using random topic and phrase generators.

Example result:

Title: “React Development enhances modern UI design”
Body: “This post explores the principles of modern frontend architecture that simplify everyday tasks through practical examples.”


<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/73b3cdcf-37b3-4759-9d35-d81eb7c10943" />
<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/f4283810-554f-4b0e-a76b-992b6c4de2f1" />

<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/76ea91e7-0ad2-493c-9efe-95ce4c9e7642" />

Author

Ivan Obulejo
Frontend Developer | React Enthusiast | Tailwind CSS Lover

📧 Email: iobulejo100@gmail.com
🐙 GitHub: iobulejo

License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute it for educational or commercial purposes.




  
   


