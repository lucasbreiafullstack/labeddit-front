import { useState } from "react";

export default function useForm(initialState) {
    const [form, setForm] = useState(initialState)

    const onChangeInput = (e) => {
        const {value, name} = e.target;
        setForm({...form, [name]: value})
    };

    const clearInputs = () => {
        setForm(initialState)
    };

    return  [form, onChangeInput, clearInputs] 
}

//45 - autenticacao-em-react-template
// 77 - deplpoy-template-frontend
//45.1 - autenticacao-em-react-exercicios
//49 - revisao-react-frontend