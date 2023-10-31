import axios from 'axios';
import { BASE_URL } from '../url/url';

export const deleteComment = async (id, token, array, setArray) => {
    try {
        const response = await axios.delete(`${BASE_URL}/comments/${id}`, {
            headers: {
                Authorization: token
            }
        })

        // Se a solicitação for bem-sucedida, remove o comentário do array
        if (response) {
            const filteredArray = array.filter(comment => comment.id !== id)
            setArray(filteredArray)
        }
    } catch (error) {
        // Manipula erros
        alert(error.message);
        // Outras ações de tratamento de erros podem ser adicionadas aqui, se necessário.
    }
}
