import axios from 'axios';
import { BASE_URL } from '../url/url';

export const editUser = async (id, token, form) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${id}`, {
            // Envia os dados a serem atualizados no usuário.
            username: form.username,
            email: form.email,
            password: form.password
        }, {
            headers: {
                Authorization: token
            }
        });

        if (response) {
            // Se a solicitação for bem-sucedida, atualize as informações do usuário no armazenamento local.
            const user = {
                id: response.data.id,
                username: response.data.username,
                email: response.data.email,
                role: response.data.role,
                token: token,
                isLogged: true
            };
            localStorage.setItem("user", JSON.stringify(user));

            // Exibe uma mensagem de sucesso para o usuário.
            alert(`${response.data.username}, dado(s) alterado(s) com sucesso!`);

            // Recarrega a página para refletir as atualizações.
            window.location.reload(true);
        }
    } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro e informa que não foi possível alterar os dados.
        alert(`Não foi possível alterar seus dados! Tente novamente.`);
        alert(error.message);
    }
};