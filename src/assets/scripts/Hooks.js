import { useState } from "react";

// Hook personalizado para formulário de login
export const useLoginForm = () => {
    // Define o estado inicial do formulário
    const [form, setForm] = useState({ email: "", password: "" });

    // Função para atualizar o estado com base nos eventos do formulário
    const changeForm = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    return [form, changeForm];
};

// Hook personalizado para formulário de cadastro
export const useSignupForm = () => {
    // Define o estado inicial do formulário
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    // Função para atualizar o estado com base nos eventos do formulário
    const changeForm = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    return [form, changeForm];
};

// Hook personalizado para alternar a visibilidade da senha
export const usePassword = () => {
    // Define o estado inicial para o tipo de senha
    const [type, setType] = useState("password");

    // Função para alternar entre senha e texto visível
    const changeType = () => {
        type === "password" ? setType("text") : setType("password");
    };

    return [type, changeType];
};