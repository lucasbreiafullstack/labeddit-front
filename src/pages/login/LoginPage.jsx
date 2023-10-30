import { useNavigate } from "react-router-dom";
import * as s from "./styledLogin";
import { goToPosts, goToSignup } from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form, onChange, resetForm] = useForm({ email: "", password: "" });

  const context = useContext(GlobalContext)

  async function sendFormLogin (e) {
    e.preventDefault();
    const page = window.location.href
    await context.user(form, page)
    resetForm();
    goToPosts(navigate);
  };
  
  return (
    <s.Container>
      <s.HeaderLogin>
        <s.ImgLabeddit
          src="https://uploaddeimagens.com.br/images/004/608/125/full/Group_1.png?1694777008"
          alt="LabEddit"
        />
        <s.TextHeader>O projeto de rede social da Labenu</s.TextHeader>
      </s.HeaderLogin>
      <s.ContainerContent>
        <s.Form onSubmit={sendFormLogin}>
          <s.InputText
            type="email"
            placeholder="E-mail"
            name="email"
            id="email"
            onChange={onChange}
            value={form.email}
            required
          />
          <s.InputText
            type="password"
            placeholder="Senha"
            name="password"
            id="senha"
            value={form.password}
            onChange={onChange}
            required
          />
          <s.BtnInput>Continuar</s.BtnInput>
          <hr />
        </s.Form>
        <s.BtnToGoToSignup onClick={() => goToSignup(navigate)}>
          Crie uma conta!
        </s.BtnToGoToSignup>
      </s.ContainerContent>
    </s.Container>
  );
};
