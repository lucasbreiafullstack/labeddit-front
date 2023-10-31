import { useState } from "react";
import { goToLogin } from "../../router/Coordinators";
import { goToFeed } from "../../router/Coordinators";

// Define o estado inicial da aplicação
export const initialState = () => {
    // Define o estado do usuário
    const [user, setUser] = useState({
        id: "",
        username: "",
        email: "",
        role: "",
        token: "",
        isLogged: ""
    });

    // Define o estado do texto da área de entrada
    const [textArea, setTextArea] = useState({ post: "", comment: "" });

    // Define o estado das postagens
    const [posts, setPosts] = useState([]);

    // Define o estado dos comentários
    const [comments, setComments] = useState([]);

    // Define o estado para controlar o carregamento
    const [isLoading, setIsLoading] = useState(false);

    return [user, setUser, posts, setPosts, comments, setComments, textArea, setTextArea, isLoading, setIsLoading];
};

// Função para executar ação ao pressionar Enter
export const onEnter = (e, fn) => {
    if (e.key === 'Enter') {
        fn();
    }
};

// Define o estado de edição
export const useEditingContent = () => {
    const [editing, setEditing] = useState(false);
    const [content, setContent] = useState("");

    return [editing, setEditing, content, setContent];
};

// Obtém o estado do usuário do armazenamento local
export const getUserState = (setState) => {
    const getUser = localStorage.getItem("user");
    if (getUser) {
        const newUser = JSON.parse(getUser);
        setState(newUser);
    }
};

// Função para fazer logout do usuário
export const logout = (user, setState, navigate) => {
    localStorage.removeItem("user");
    setTimeout(() => {
        setState({ ...user, isLogged: "" });
    }, 1000);
    goToLogin(navigate);
};

// Inicia a edição de um post
export const startEdit = (request, post, content, token, array, setArray, setState) => {
    if (post.content !== "") {
        request(post.id, content, token, array, setArray);
        setState(true);
    }
};

// Faz uma postagem ou comentário
export const posting = (request, content, token, array, setArray, setState) => {
    request(content, token, array, setArray);
    setState({ post: "", comment: "" });
};

// Deleta um post
export const delPost = (request, id, token, array, setArray, navigate) => {
    request(id, token, array, setArray).then(() => goToFeed(navigate));
};

// Verifica se o email inserido corresponde ao email do usuário
export const checkData = (mail, userMail, setState) => {
    if (mail === userMail) {
        setState(1);
    } else {
        alert("Email inválido, insira o relativo à sua conta.");
    }
};

// Função para editar um usuário
export const edit = (request, id, token, form, setState) => {
    request(id, token, form, setState);
};