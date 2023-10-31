import axios from 'axios';
import { BASE_URL } from '../url/url';
import { goToFeed } from '../../../router/Coordinators';

export const LoginRequest = async (form, navigate, setState, isLoading) => {
    try {
        isLoading(true); // Define isLoading como verdadeiro para sinalizar o início da solicitação.
        const response = await axios.post(`${BASE_URL}/users/login`, {
            email: form.email,
            password: form.password
        });

        if (response) {
            // Se a resposta for bem-sucedida, cria um objeto de usuário com os dados da resposta.
            const user = {
                id: response.data.id,
                username: response.data.username,
                email: response.data.email,
                role: response.data.role,
                token: response.data.token,
                isLogged: true
            };

            setState(user); // Atualiza o estado de usuário com os dados do usuário.
            localStorage.setItem("user", JSON.stringify(user)); // Atualiza o armazenamento local com os dados do usuário.
            goToFeed(navigate); // Redireciona para a página de feed.
            isLoading(false); // Define isLoading como falso para indicar que a solicitação foi concluída.
        }
    } catch (error) {
        alert(error.message); // Em caso de erro, exibe uma mensagem de erro.
        isLoading(false); // Define isLoading como falso para indicar que a solicitação foi concluída.
    }
};