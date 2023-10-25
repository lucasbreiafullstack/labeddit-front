import axios from "axios";
import {GlobalContext} from "./GlobalContext"
import { BASE_URL } from "../constants/BASE_URL.JSX";

export default function GlobalState({children}){

    const login = async (body) => {
        const { data } = await axios.post(`${BASE_URL}users/login`, body);
        return data
    };

    const signup = async (body) => {
        const { data } = await axios.post(`${BASE_URL}users/signup`, body);
        return data
    };

    const getPosts = async () => {
        const { data } = await axios.get(
            `${BASE_URL}posts`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        );
        return data
    };

    const createPost = async (body) => {
        const { data } = await axios.post(
            `${BASE_URL}posts`,
            body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        );
        return data
    };

    const likedislikePost = async (idPost, body) => {
        const { data } = await axios.put(
            `${BASE_URL}posts/${idPost}/like`,
            body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        );
        return data
    };

    const getPostById = async (idPost) => {
        const { data } = await axios.get(
            `${BASE_URL}posts/${idPost}`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        );
        return data
    };

    const getCommentsByPostId = async (idPost) => {
        const { data } = await axios.get(
            `${BASE_URL}posts/${idPost}/comments`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        );
        return data
    };

    const createComment = async (idPost, body) => {
        const { data } = await axios.post(
            `${BASE_URL}posts/${idPost}/comment`,
            body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        );
        return data
    };

    const likeDislikeComment = async (idPost, idComment, body) => {
        
        const { data } = await axios.put(
            `${BASE_URL}posts/${idPost}/comments/${idComment}/like`,
            body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        );
        return data
    };

    const validateEmail = (email => email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/));
    const validatePassword = (password => password.match(/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,10}$/g));
    const validateName = (name, length = 2) => new RegExp(`.{${length},}`).test(name);

    const data = {
        login,
        signup,
        getPosts,
        createPost,
        likedislikePost,
        getPostById,
        getCommentsByPostId,
        createComment,
        likeDislikeComment,
        validateEmail, 
        validatePassword,
        validateName
    };

    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}