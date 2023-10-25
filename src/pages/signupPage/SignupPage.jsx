import { useContext, useState } from "react"
import Header from "../../components/header/Header"
import { Section, FormArticle, HeaderText, Input, VisibilityBtn, SignupBtn, Wrapper, ErrorMessage, PolicySection } from "./SignupPageStyle";
import useForm from "../../hooks/useForm";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../routes/coordinator";

export const SignupPage = () => {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();

    const { signup, validateName, validateEmail, validatePassword } = context;

    const [showPassword, setShowPassword] = useState(false);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [emailUnavailable, setEmailUnavailable] = useState(false);
    
    const [form, onChangeInput] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsNameValid(validateName(form.name));
        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.password));
        setShowErrorMessage(isPasswordValid && isNameValid);

        console.log(validatePassword(form.password))
        
        try {
            
            if(isPasswordValid !== null){
                const { token } = isNameValid && isEmailValid && await signup({
                    name: form.name,
                    email: form.email,
                    password: form.password
                });

                localStorage.setItem('token', token);
                goToFeedPage(navigate)
            }
        } catch (error) {
            //console.log(error.response.data)
            if(error.response.data == "email is already being used.") return setEmailUnavailable(true) 
        }
    };

    return(
        <>
            <Header/>
            <Wrapper>
                <HeaderText>
                    Olá, boas vindas ao LabEddit ;)
                </HeaderText>
                
                <FormArticle>
                    <form onSubmit={onSubmit}>
                        <Section>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Apelido"
                                style={{padding: '0 0 0 1em', fontSize: '1.8em'}}
                                value={form.name}
                                type="text"
                                onChange={onChangeInput}
                                required
                            />
                        </Section>
                        
                        <Section>
                            <Input
                                id="email"
                                name="email"
                                placeholder="E-mail" 
                                style={{padding: '0 0 0 1em', fontSize: '1.8em'}}
                                value={form.email}
                                type="email"
                                onChange={onChangeInput}
                                required
                            />
                        </Section>

                        {!isEmailValid &&
                            <ErrorMessage>
                                <span className="material-symbols-outlined" style={{color: 'red'}}>
                                    priority_high
                                </span>
                                <p>Email inválido</p>
                            </ErrorMessage> 
                        }

                        <Section>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Senha"
                                style={{padding: '0 0 0 1em', fontSize: '1.8em'}}
                                value={form.password}
                                type={showPassword? 'text' : 'password'}
                                onChange={onChangeInput}
                                required
                            />

                            <VisibilityBtn onClick={() => setShowPassword(!showPassword)}>
                                {showPassword?
                                    <i className="fa-regular fa-eye-slash"></i> : 
                                    <i className="fa-regular fa-eye"></i>
                                }
                            </VisibilityBtn>
                        </Section>
                        {!isNameValid && 
                            <ErrorMessage>
                                <span className="material-symbols-outlined" style={{color: 'red'}}>
                                    priority_high
                                </span>
                                <p>Apelido precisa ter mais do que dois caracteres</p>
                            </ErrorMessage> 
                        }
                        {!isPasswordValid &&
                            <ErrorMessage>
                                <span className="material-symbols-outlined" style={{color: 'red'}}>
                                    priority_high
                                </span>
                                <p>A senha deve ter de 6 a 10 caracteres, incluindo letras maiúsculas, minúsculas, caracteres numéricos e especiais.</p>
                            </ErrorMessage> 
                        }
                        {emailUnavailable &&
                            <ErrorMessage>
                                <span className="material-symbols-outlined" style={{color: 'red'}}>
                                    priority_high
                                </span>
                                <p>Esse email já está cadastrado.</p>
                            </ErrorMessage> 
                        }

                        <PolicySection $checkError={`${showErrorMessage}`}>
                            <p>Ao continuar, você concorda com o nosso <a href='#'>Contrato de usuário</a> e nossa <a href="#">Política de Privacidade</a></p>

                            <span>
                                <input
                                    type="checkbox"
                                    style={{scale: '2.5'}}
                                    onClick={() => setSignedAgreement(!signedAgreement)}
                                />
                                <p>
                                    Eu concordo em receber emails sobre coisas legais no Labeddit
                                </p>
                            </span>
                        </PolicySection>

                        <SignupBtn
                            type="submit"
                        >
                            Cadastrar
                        </SignupBtn>
                    </form>
                </FormArticle>
            </Wrapper>
        </>
    )
}

export default SignupPage