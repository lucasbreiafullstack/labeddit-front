import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import { SignupPage } from "../pages/signup/SignupPage";
import { PostPage } from "../pages/post/PostPage";
import { CommentPage } from "../pages/comment/CommentPage";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function Router() {
  const context = useContext(GlobalContext);

  const ProtectedRouter = ({ children, redirect }) => {
    const logged = context.isLogged;
    return logged ? children : <Navigate to={redirect} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/posts"
          element={
            <ProtectedRouter redirect={"/"}>
              <PostPage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/comments/:postId"
          element={
            <ProtectedRouter redirect={"/"}>
              <CommentPage />
            </ProtectedRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
