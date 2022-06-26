import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Login from "./components/From/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
