import axios from 'axios';
import { BASE_URL } from '../url/url';

export const likeComment = async (id, token) => {
    try {
        const response = await axios.put(`${BASE_URL}/comments/${id}/like`, {
            like: true
        }, {
            headers: {
                Authorization: token
            }
        });

        // Verifique se a solicitação foi bem-sucedida e tome as medidas apropriadas, se necessário.
    } catch (error) {
        // Em caso de erro, manipule o erro, você pode registrar informações de erro no console.
        console.log(`${error.response.statusText} => ${error.response.data}`);
    }
}

export const dislikeComment = async (id, token) => {
    try {
        const response = await axios.put(`${BASE_URL}/comments/${id}/like`, {
            like: false
        }, {
            headers: {
                Authorization: token
            }
        });

        // Verifique se a solicitação foi bem-sucedida e tome as medidas apropriadas, se necessário.
    } catch (error) {
        // Em caso de erro, manipule o erro e alerte o usuário ou registre informações de erro.
        alert(error.message);
    }
};