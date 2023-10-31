import axios from 'axios';
import { BASE_URL } from '../url/url';

export const editPost = async (id, content, token, setState) => {
    try {
        const response = await axios.put(`${BASE_URL}/posts/${id}`, {
            content: content
        }, {
            headers: {
                Authorization: token
            }
        });

        // Verifique se a resposta da solicitação foi bem-sucedida.
        if (response) {
            // Define o estado para `false` para indicar que a edição foi concluída.
            setState(false);
            
            // Recarrega a página para refletir a alteração na postagem.
            window.location.reload(true);
        }
    } catch (error) {
        // Em caso de erro, você pode lidar com o erro de outras maneiras, se necessário.
        // Por exemplo, registrar informações de erro ou fornecer feedback ao usuário.
        alert(error.message);
    }
};