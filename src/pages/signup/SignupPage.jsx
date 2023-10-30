import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import * as s from "./styleSignup";
import { goToPosts } from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function SignupPage() {
  const navigate = useNavigate()
  const [form, onChange, resetForm] = useForm({ name: '', email: '', password: '' })

  const context = useContext(GlobalContext)

  async function sendFormSignup(e) {
    e.preventDefault()
    const page = window.location.href
    if (context.getToken()) context.logout(navigate, page)
    await context.user(form, page)
    resetForm()
    goToPosts(navigate)
  }

  return (
    <s.Container>
      <Header/>
      <s.Title>Olá, boas vindas ao LabEddit ;)</s.Title>

      <s.ContainerForm>
        <s.Form onSubmit={sendFormSignup}>
          <s.InputText
            type="text"
            placeholder="Apelido"
            name="name"
            id="name"
            value={form.name}
            onChange={onChange}
            required
          />
          <s.InputText
            type="email"
            placeholder="E-mail"
            name="email"
            id="email"
            value={form.email}
            onChange={onChange}
            required
          />
          <s.InputText
            type="password"
            placeholder="Senha"
            name="password"
            id="password"
            value={form.password}
            onChange={onChange}
            required
          />
         
          <s.ContainerTermContract>
            <s.TextContract>
              Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa  <span>Política de Privacidade</span>
            </s.TextContract>

            <s.InputCheck>
              <input
                type="checkbox"
                name="check"
                id="check"
                required
              />
              <label htmlFor="check">
                Eu concordo em receber emails sobre coisas legais no Labeddit.
              </label>
            </s.InputCheck>
          </s.ContainerTermContract>

          <s.BtnRegister onClick={() => goToPosts(navigate)}>Cadastrar</s.BtnRegister>
        </s.Form>
      </s.ContainerForm>
    </s.Container>
  );
}
