import { useContext } from "react";
import * as s from "./styledCardCommentView";
import { GlobalContext } from "../../../../context/GlobalContext";

// Componente para exibir um único comentário
export const CardViewComments = ({ comment }) => {
  // Obtemos o contexto global do aplicativo
  const context = useContext(GlobalContext);

  // Manipulador de clique para "curtir" um comentário
  const handleLikeComment = async () => {
    await context.likeDislikeComment(comment.id, true);
  };

  // Manipulador de clique para "descurtir" um comentário
  const handleDislikeComment = async () => {
    await context.likeDislikeComment(comment.id, false);
  };

  return (
    <s.ContainerComment>
      {/* Nome do criador do comentário */}
      <s.UserName>Enviado por: {comment.creator.name}</s.UserName>

      {/* Conteúdo do comentário */}
      <s.ContentComment>{comment.content}</s.ContentComment>

      {/* Componentes para "curtir" e "descurtir" o comentário */}
      <s.LikeDislike>
        {/* Botão de "curtir" */}
        <s.Like onClick={handleLikeComment}>
          <img
            src={
              comment.liked === "like"
                ? "/like_dislike/up.png"
                : "/like_dislike/like.png"
            }
            alt="like"
          />
        </s.Like>
        {/* Exibição do número de curtidas - descurtidas */}
        <p>{comment.likes - comment.dislikes}</p>

        {/* Botão de "descurtir" */}
        <s.Dislike onClick={handleDislikeComment}>
          <img
            src={
              comment.liked === "dislike"
                ? "/like_dislike/down.png"
                : "/like_dislike/dislike.png"
            }
            alt="dislike"
          />
        </s.Dislike>
      </s.LikeDislike>
    </s.ContainerComment>
  );
};