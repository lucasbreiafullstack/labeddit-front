import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from "../constants/constants";
import Swal from "sweetalert2";
import { goToLogin } from "../routes/coordinator";

export const GlobalContext = createContext();

export function GlobalState({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [reload, setReload] = useState(false);
  const [postSelected, setPostSelected] = useState();

  const headers = {
    headers: {
      Authorization: getToken(),
    },
  };

  async function getComments(postId) {
    try {
      const PATH = BASE_URL + "/comments/" + postId
      const result = await axios.get(PATH, headers)
      return result
    } catch (error) {
      console.log(error)      
    }
  }

  const createComment = async (postId, body) => {
    try {
      const PATH = BASE_URL + "/comments/" + postId
      await axios.post(PATH, body, headers)
      setReload(!reload)
    } catch (error) {
      console.log(error)
    }
  }

  const likeDislikeComment = async (commentId, like) => {
    try {
      const PATH = BASE_URL + "/comments/" + commentId + "/like"
      await axios.put(PATH, {like}, headers)
      setIsLogged(true)
      setReload(!reload)
    } catch (error) {
      console.log(error)
    }
  }

  function modal(title, text, icon) {
    Swal.fire({ title, text, icon });
  }

  async function user(body, page) {
    const PATH = page.includes("signup")
      ? BASE_URL + "/users/signup"
      : BASE_URL + "/users/login";
    await axios
      .post(PATH, body)
      .then((response) => {
        removeToken()
        setToken(response.data.token);
        setIsLogged(true);
      })
      .catch((error) => {
        if (typeof error.response.data === "string") {
          modal("Inválido", error.response.data, "error");
        } else {
          modal("Erro", error.response.data[0].message, "error");
        }
      });
  }

  async function createPostAPI(body) {
    try {
      const PATH = BASE_URL + "/posts";
      await axios.post(PATH, body, headers);
      setIsLogged(true);
      setReload(!reload);
    } catch (error) {
      console.log(error);
      //criar o tratamento do erro
    }
  }

  async function getPosts() {
    try {
      const PATH = BASE_URL + "/posts";
      return await axios.get(PATH, headers);
    } catch (error) {
      console.log(error);
      //criar tratamento de erro
    }
  }

  async function likeDislikePost(like, id) {
    try {
      const PATH = BASE_URL + `/posts/${id}/like`;
      await axios.put(PATH, {like}, headers);
      setIsLogged(true);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  function logout(navigate, page) {
    if (page.includes("signup")) {
      removeToken();
    } else {
      removeToken();
      goToLogin(navigate);
    }
  }

  function getToken() {
    return localStorage.getItem("token");
  }
  function removeToken() {
    localStorage.removeItem("token");
  }
  function setToken(token) {
    localStorage.setItem("token", token);
  }

  const context = {
    isLogged,
    setIsLogged,
    user,
    setToken,
    getToken,
    removeToken,
    reload,
    setReload,
    createPostAPI,
    logout,
    getPosts,
    likeDislikePost,
    getComments,
    // getPostById,
    postSelected,
    setPostSelected,
    createComment,
    likeDislikeComment
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}
