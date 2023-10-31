import { DesktopMenu } from "./desktopMenu";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../router/Coordinators";
import { logout } from "../../assets/scripts/Functions";
import DesktopLogo from "../../assets/images/desktoplogo.png";

export const DesktopHeader = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = props.content;

  const handleLogoClick = () => {
    // Redirecionar para a página de feed ao clicar no logotipo
    goToFeed(navigate);
  };

  const handleLoginClick = () => {
    // Definir um atraso antes de redirecionar para a página de login
    // para dar tempo de animações ou transições
    setTimeout(() => {
      props.function(navigate);
    }, 1000);
  };

  return (
    <header className="bg-gray-300 w-[100vw] h-[5vh] justify-between p-4 items-center hidden md:flex lg:flex">
      <img
        src={DesktopLogo}
        onClick={handleLogoClick}
        className="cursor-pointer relative lg:w-[10vw] md:w-[15vw] p-5 left-[4vw]"
        alt="Labeddit"
      />

      {user.isLogged ? (
        <DesktopMenu
          username={user.username}
          logout={() => logout(user, setUser, navigate)}
        />
      ) : (
        <span onClick={handleLoginClick} className="header-text">
          Entrar
        </span>
      )}
    </header>
  );
};

export default DesktopHeader;