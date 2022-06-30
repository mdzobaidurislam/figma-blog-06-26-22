import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Login from "./components/From/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ToDo from "./components/ToDo/ToDo";
import TodoCompleted from "./components/ToDo/TodoCompleted";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog />
            </RequireAuth>
          }
        />
        <Route
          path="/todo"
          element={
            <RequireAuth>
              <ToDo />
            </RequireAuth>
          }
        />
        <Route
          path="/completed"
          element={
            <RequireAuth>
              <TodoCompleted />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Home />}>
          <Route path="article" index element={<Blog />} />
          <Route path="event" index element={<Blog />} />
          <Route path="education" index element={<Blog />} />
          <Route path="job" index element={<Blog />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
