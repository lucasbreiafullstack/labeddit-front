import axios from 'axios';
import { BASE_URL } from '../url/url';

export const deletePost = async (id, token, array, setArray) => {
    // Copiando o ID para uma variável local para clareza.
    const idToDelete = id;

    try {
        const response = await axios.delete(`${BASE_URL}/posts/${idToDelete}`, {
            headers: {
                Authorization: token
            }
        });

        // Verifique se a resposta da solicitação foi bem-sucedida.
        if (response) {
            // Filtra o array de postagens para remover a postagem excluída.
            const filteredArray = array.filter(post => post.id !== id);
            setArray(filteredArray);

            // Recarrega a página para refletir a alteração na lista de postagens.
            window.location.reload(true);
        }
    } catch (error) {
        // Em caso de erro, você pode lidar com o erro de outras maneiras, se necessário.
        // Por exemplo, registrar informações de erro ou fornecer feedback ao usuário.
        alert(error.message);
    }
};