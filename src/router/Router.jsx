import { Login } from "../pages/login";
import { Feed } from "../pages/feed";
import { PostPage } from "../pages/post"
import { Signup } from "../pages/signup";
import { useEffect } from "react";
import { Settings } from "../pages/settings";
import { DeleteAccount } from "../pages/delete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getPosts } from "../assets/scripts/Posts/GetPostsRequest";
import { initialState, getUserState } from "../assets/scripts/Functions";
import { getComments } from "../assets/scripts/Comments/GetCommentsRequest";


export default function Router() {


    const [user, setUser, posts, setPosts, comments, setComments, textArea, setTextArea, isLoading, setIsLoading] = initialState()

    const reversedPosts = [...posts].reverse()
    const urlsList = reversedPosts.map(post => post.id.slice(0, 8))

    useEffect(() => { getUserState(setUser) }, [user.username])

     useEffect(() => {
        if (user.isLogged) {
            getPosts("", user.token, setPosts)
            getComments("", user.token, setComments)
        }
    }, [user.token]
    )

    const content = [user, setUser, posts, setPosts, textArea, setTextArea, comments, setComments, isLoading, setIsLoading]
    const userContent = [user, setUser, isLoading, setIsLoading]

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={
                    !user.isLogged ?
                        <Login
                            content={userContent}
                        />
                        :
                        <Feed
                            content={content}
                            reversedPosts={reversedPosts}

                        />}
                />

                <Route path="/signup" element={
                    !user.isLogged ?
                        <Signup
                            content={userContent} />
                        :
                        <Feed
                            content={content}
                            reversedPosts={reversedPosts}
                        />}
                />

                <Route path="/feed" element={
                    <Feed
                        content={content}
                        reversedPosts={reversedPosts}
                    />}
                />

                {urlsList.map((url, index) => {
                    return (
                        <Route
                            key={index}
                            path={`/feed/post/${url}`}
                            element={
                                <PostPage
                                    url={url}
                                    content={content}
                                />
                            }
                        />
                    )
                })}

                <Route path="/settings" element={
                    <Settings
                        content={content}
                        reversedPosts={reversedPosts}
                    />}
                />

                <Route path="/delete" element={
                    <DeleteAccount
                        content={content}
                        reversedPosts={reversedPosts}
                    />}
                />
            </Routes>
        </BrowserRouter>
    )
}