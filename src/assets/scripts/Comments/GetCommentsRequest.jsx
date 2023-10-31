import axios from 'axios';
import { BASE_URL } from '../url/url';

export const getComments = async (content, token, setState) => {
    try {
        let response;
        if (content) {
            // Se houver conteúdo, faça uma solicitação GET com parâmetros de consulta
            response = await axios.get(`${BASE_URL}/comments/`, {
                params: {
                    content: content
                },
                headers: {
                    Authorization: token
                }
            });
        } else {
            // Se não houver conteúdo, faça uma solicitação GET sem parâmetros de consulta
            response = await axios.get(`${BASE_URL}/comments/`, {
                headers: {
                    Authorization: token
                }
            });
        }

        // Se a solicitação for bem-sucedida, você pode atualizar o estado (setState) com os dados da resposta
        if (response) {
            setState(response.data);
        }
    } catch (error) {
        // Manipula erros
        alert(error.message);
        // Outras ações de tratamento de erros podem ser adicionadas aqui, se necessário.
    }
};