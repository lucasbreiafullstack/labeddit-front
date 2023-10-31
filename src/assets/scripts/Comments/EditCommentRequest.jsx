import axios from 'axios';
import { BASE_URL } from '../url/url';

export const editComment = async (id, content, token, setState) => {
    try {
        const response = await axios.put(`${BASE_URL}/comments/${id}`, {
            content: content
        }, {
            headers: {
                Authorization: token
            }
        })

        // Se a solicitação for bem-sucedida, você pode atualizar o estado (setState)
        if (response) {
            setState(false)
        }
    } catch (error) {
        // Manipula erros
        alert(error.message);
        // Outras ações de tratamento de erros podem ser adicionadas aqui, se necessário.
    }
};