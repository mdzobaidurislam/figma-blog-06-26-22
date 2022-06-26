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
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog />
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
    </div>
  );
}

export default App;
