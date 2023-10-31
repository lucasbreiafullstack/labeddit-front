import axios from 'axios';
import { BASE_URL } from '../url/url';

export const createComment = async (content, postId, token, array, setArray) => {
    try {
        const response = await axios.post(`${BASE_URL}/comments/`, {
            postId: postId,
            content: content
        }, {
            headers: {
                Authorization: token
            }
        })

        // Se a solicitação for bem-sucedida, adiciona a resposta ao array
        if (response) {
            setArray([...array, response.data])
        }
    } catch (error) {
        // Manipula erros
        if (!content) {
            alert("Escreva alguma coisa no campo de postagem!")
        }
        // Outras ações de tratamento de erros podem ser adicionadas aqui, se necessário.
    }
}