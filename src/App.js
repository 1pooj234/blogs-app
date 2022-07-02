import { Routes, Navigate, Route } from "react-router-dom";
import "./App.css";
import AllBlogsPage from "./pages/AllBlogsPage";
import SingleBlog from "./pages/SingleBlog";
import NewBlogForm from "./pages/NewBlogForm";
import Error404Page from "./components/ui/Error404Page";
import NavBar from "./components/navigation/Navbar";
import UserForm from "./users/UserForm";
import { useContext } from "react";
import { AuthCtx } from "./context/AuthContext";

function App() {
  const ctx = useContext(AuthCtx);
  return (
    <div className="App">
      <NavBar>
        <Routes>
          <Route element={<Navigate to="/blogs" />} path="/" />
          <Route element={<AllBlogsPage />} path="/blogs" />
          <Route element={<SingleBlog />} path="/blogs/:id" />
          {ctx.isLoggedIn && (
            <Route element={<NewBlogForm />} path="/blogs/nblog" />
          )}
          <Route element={<UserForm />} path="/blogs/welcome" />
          <Route
            element={<Error404Page>Page not found </Error404Page>}
            path="*"
          />
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;
