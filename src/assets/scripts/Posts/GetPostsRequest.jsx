import axios from 'axios';
import { BASE_URL } from '../url/url';

export const getPosts = async (content, token, setState) => {
    try {
        let response;
        if (content) {
            // Faz uma solicitação GET para buscar postagens com um conteúdo específico.
            response = await axios.get(`${BASE_URL}/posts/`, {
                params: { content: content },
                headers: {
                    Authorization: token
                }
            });
        } else {
            // Faz uma solicitação GET para buscar todas as postagens.
            response = await axios.get(`${BASE_URL}/posts/`, {
                headers: {
                    Authorization: token
                }
            });
        }

        // Verifique se a resposta da solicitação foi bem-sucedida.
        if (response) {
            // Define o estado com os dados das postagens recebidas na resposta.
            setState(response.data);
        }
    } catch (error) {
        // Em caso de erro, você pode lidar com o erro de outras maneiras, se necessário.
        // Por exemplo, registrar informações de erro ou fornecer feedback ao usuário.
        alert(error.message);
    }
};