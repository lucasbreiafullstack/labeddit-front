import { useNavigate } from "react-router-dom";
import * as s from "./styledHeader";
import { goToLogin, goToPosts } from "../../routes/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Header = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext)
  const page = window.location.href

  return (
    <>
      {/* Signup Page */}
      {page.includes("signup") && (
          <s.ContainerLogo>
            <s.ImgLogo
              src="https://uploaddeimagens.com.br/images/004/613/727/full/Group_3_%281%29.png?1695155531"
              alt="logo-labeddit"
            />
          <s.SubTitle onClick={() => {
            context.removeToken()
            goToLogin(navigate)
          }}>Entrar</s.SubTitle>
          </s.ContainerLogo>
      )}

      {/* Post Page */}
      {page.includes("posts") && (
          <s.ContainerLogo>
            <s.ImgLogo
              src="https://uploaddeimagens.com.br/images/004/613/727/full/Group_3_%281%29.png?1695155531"
              alt="logo-labeddit"
            />
          <s.SubTitle onClick={() => {
            context.removeToken()
            goToLogin(navigate)
          }}>Logout</s.SubTitle>
          </s.ContainerLogo>
      )}

      {/* Comment Page */}
      {page.includes("comments") && (
        
          <s.ContainerLogoComments>
            <s.ImgReturn
              onClick={() => goToPosts(navigate)}
              src="https://uploaddeimagens.com.br/images/004/617/271/full/Group_2.png?1695500039"
              alt="X"
            />

            <s.ImgLogo
              src="https://uploaddeimagens.com.br/images/004/613/727/full/Group_3_%281%29.png?1695155531"
              alt="logo-labeddit"
            />
            <s.SubTitle onClick={() => {
            context.removeToken()
            goToLogin(navigate)
          }}>Logout</s.SubTitle>
          </s.ContainerLogoComments>
        
      )}
    </>
  );
};
