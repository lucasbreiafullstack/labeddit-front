import { useContext, useState } from "react"
import Logo from "../../assets/logo-labeddit.svg"
import { 
    Divisor, 
    EmailSection, 
    ContainerForm, 
    ContainerLogin, 
    ContainerLogo, 
    LogoImg, 
    Input, 
    PasswordSection, 
    VisibilityBtn, 
    LoginBtn, 
    SignupBtn, 
    Subtitle, 
    ErrorMessage 
} from "./LoginPageStyle";
import useForm from "../../hooks/useForm";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToFeedPage, goToSignupPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();
    
    const { login, validateEmail, validatePassword } = context;

    const [showPassword, setShowPassword] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false)
    

    const [form, onChangeInput] = useForm({
        email: '',
        password: ''
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.password));

        try {
            const { token } = isEmailValid && isPasswordValid && await login({
                email: form.email,
                password: form.password
            });

            localStorage.setItem('token', token);
            goToFeedPage(navigate)
        } catch (error) {   
            //console.log(error.response.data)
            setErrorMessage(true)
        }
    };

    return(
        <ContainerLogin className="container-login">
            <ContainerLogo>
                <LogoImg src={Logo} alt='Logo Labeddit'/>
                <Subtitle>O projeto de rede social da Labenu</Subtitle>
            </ContainerLogo>
            
            <ContainerForm>
                <form onSubmit={onSubmit}>
                    <EmailSection>
                        <Input
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            value={form.email}
                            type="email"
                            onChange={onChangeInput}
                            required
                        />
                    </EmailSection>
                    
                    <PasswordSection>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Senha"
                            value={form.password}
                            type={showPassword? 'text' : 'password'}
                            onChange={onChangeInput}  
                            required
                        />

                        <VisibilityBtn onClick={() => setShowPassword(!showPassword)} >
                            {showPassword? 
                                <i className="fa-regular fa-eye-slash"></i> : 
                                <i className="fa-regular fa-eye"></i>
                            }
                        </VisibilityBtn>
                    </PasswordSection>

                    {errorMessage &&
                        <ErrorMessage>
                            <span className="material-symbols-outlined">
                                priority_high
                            </span>
                            <p>E-mail ou senha incorreto(a)</p>
                        </ErrorMessage> 
                    }

                    <LoginBtn type="submit">Continuar</LoginBtn>
                    
                    <Divisor />

                    <SignupBtn 
                        type="button" 
                        onClick={()=>goToSignupPage(navigate)}
                    >
                        Crie uma conta!
                    </SignupBtn>
                    
                </form>
            </ContainerForm>
        </ContainerLogin>
    )
}

export default LoginPage;