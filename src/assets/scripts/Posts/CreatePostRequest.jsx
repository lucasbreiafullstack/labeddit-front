import axios from 'axios';
import { BASE_URL } from '../url/url';

export const createPost = async (content, token, array, setArray) => {
    try {
        const response = await axios.post(`${BASE_URL}/posts/`,
            {
                content: content
            },
            {
                headers: {
                    Authorization: token
                }
            });

        // Verifique se a resposta da solicitação foi bem-sucedida.
        if (response) {
            // Atualize o array de postagens com a nova postagem recebida da resposta.
            setArray([...array, response.data]);
        }
    } catch (error) {
        if (!content) {
            // Exiba um alerta se o conteúdo estiver vazio.
            alert("Escreva alguma coisa no campo de postagem!");
        } else {
            // Em caso de erro, você pode lidar com o erro de outras maneiras, se necessário.
            // Por exemplo, registrar informações de erro ou fornecer feedback ao usuário.
            console.error(error);
        }
    }
};