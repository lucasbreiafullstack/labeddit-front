import { useContext } from "react";
import { useForm } from "../../../../hooks/useForm";
import * as s from "./styledCardCreateComment";
import { GlobalContext } from "../../../../context/GlobalContext";

export const CardCreateComment = ({ postId }) => {
  const [form, onChange, resetForm] = useForm({ content: '' })
  const context = useContext(GlobalContext)

  const sendComment = async (e) => {
    e.preventDefault()
    await context.createComment(postId, form)
    resetForm()
  }

  return (
    <s.FormComment onSubmit={sendComment}>
      <s.ContainerMessageComment>
        <s.TextareaComment
          name="content"
          value={form.content}
          onChange={onChange}
          id="comment"
          placeholder="Adicionar comentário"
          min="1"
          required
        ></s.TextareaComment>
        <s.BtnComment>Responder</s.BtnComment>
        <hr />
      </s.ContainerMessageComment>
    </s.FormComment>
  );
};
