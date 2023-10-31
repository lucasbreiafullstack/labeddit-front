import axios from 'axios';
import { BASE_URL } from '../url/url';

export const likePost = async (id, token) => {
    try {
        const response = await axios.put(`${BASE_URL}/posts/${id}/like`, {
            like: true
        }, {
            headers: {
                Authorization: token
            }
        });

        // Trata a resposta, se necessário.

    } catch (error) {
        // Lida com erros, por exemplo, exibindo uma mensagem de erro.
        alert(error.message);
    }
}

export const dislikePost = async (id, token) => {
    try {
        const response = await axios.put(`${BASE_URL}/posts/${id}/like`, {
            like: false
        }, {
            headers: {
                Authorization: token
            }
        });

        // Trata a resposta, se necessário.

    } catch (error) {
        // Lida com erros, por exemplo, exibindo uma mensagem de erro.
        alert(error.message);
    }
};