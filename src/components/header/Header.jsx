import { useNavigate } from "react-router-dom"
import headerLogo from "../../assets/logo-header.svg" 
import closeIconImg from "../../assets/closeIcon.svg"
import { Btn, CloseIconImg, HeaderWrapper, LogoImg, SecondaryContainer } from "./HeaderStyle"
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"

export const Header = ({ closeIcon }) => {
    const navigate = useNavigate();

    const logoutFunction = () => {
        localStorage.removeItem('token')
        goToLoginPage(navigate)
    }

    const chooseButton = () => {
        if(location.pathname === '/signup'){
            return(
                <Btn
                    onClick={()=>goToLoginPage(navigate)}
                >Entrar</Btn>
            )
        }else{
            return(
                <Btn
                    onClick={()=>logoutFunction()}
                >Logout</Btn>
            )
        }
    }
    return(
        <HeaderWrapper>
            <SecondaryContainer>
                {closeIcon &&
                    <CloseIconImg 
                        src={closeIconImg} 
                        alt="close" 
                        onClick={()=>goToFeedPage(navigate)}
                    /> 
                }
                <LogoImg src={headerLogo} alt="Labeddit logo"/>

                {chooseButton()}
            </SecondaryContainer>
            
        </HeaderWrapper>
    )
}

export default Header