import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/loginPage/LoginPage";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                {/* <Route path="/signup" element={<SignupPage/>} />
                <Route path="/feed" element={<FeedPage/>} />
                <Route path="/feed/:idPost/comment" element={<CommentPage/>} />
                <Route path="*" element={<ErrorPage/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router