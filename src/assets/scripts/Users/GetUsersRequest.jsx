import axios from 'axios';
import { BASE_URL } from '../url/url';

export const GetUsers = async (username, token, state, setState) => {
    try {
        let response;

        if (username) {
            // Se um nome de usuário for fornecido, faz uma solicitação GET com parâmetros de consulta para filtrar os usuários.
            response = await axios.get(`${BASE_URL}/users/`, {
                params: {
                    username: username
                },
                headers: {
                    Authorization: token
                }
            });
        } else {
            // Se nenhum nome de usuário for fornecido, faz uma solicitação GET sem parâmetros de consulta para obter todos os usuários.
            response = await axios.get(`${BASE_URL}/users/`, {
                headers: {
                    Authorization: token
                }
            });
        }

        if (response) {
            // Atualiza o estado de usuários com os dados da resposta.
            setState(response.data);

            // Atualiza o armazenamento local com o estado atual.
            localStorage.setItem("user", JSON.stringify(state));
        }
    } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro.
        alert(error.message);
    }
};