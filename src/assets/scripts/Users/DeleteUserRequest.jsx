import axios from 'axios';
import { BASE_URL } from '../url/url';
import { goToLogin } from '../../../router/Coordinators';

export const deleteUser = async (id, token, setState, navigate) => {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${id}`, {
            headers: {
                Authorization: token
            }
        });

        // Verifica se a solicitação foi bem-sucedida.
        if (response) {
            // Remove o usuário do armazenamento local.
            localStorage.removeItem("user");
            // Atualiza o estado para indicar que o usuário foi excluído.
            setState("");
            // Redireciona o usuário para a página de login.
            goToLogin(navigate);
        }

    } catch (error) {
        // Lida com erros, por exemplo, exibindo uma mensagem de erro.
        alert(error.message);
    }
};