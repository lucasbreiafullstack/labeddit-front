import React from "react";
import * as LuIcons from "react-icons/lu";
import * as GoIcons from "react-icons/go";
import { deleteComment } from "../../assets/scripts/Comments/DeleteCommentRequest";
import { likeComment, dislikeComment } from "../../assets/scripts/Comments/LikeOrDislikeCommenttRequest";

const Comment = (props) => {
  const { comment, user, comments, setComments } = props;
  const isUserAdmin = user.role === "ADMIN";
  const isUserCreator = user.id === comment.creator.id;

  const handleDeleteComment = () => {
    deleteComment(comment.id, user.token, comments, setComments);
  };

  const handleLike = () => {
    likeComment(comment.id, user.token);
  };

  const handleDislike = () => {
    dislikeComment(comment.id, user.token);
  };

  return (
    <div className="box">
      <div className="flex justify-between">
        <span className="text-[#6F6F6F] text-[12px]">
          Enviado por: {comment.creator.username}
          {comment.updatedAt ? <span className="italic"> (editado)</span> : ""}
        </span>

        {isUserAdmin || isUserCreator ? (
          <GoIcons.GoTrash
            onClick={handleDeleteComment}
            className="icon text-[14px] relative top-[.2vh]"
          />
        ) : (
          ""
        )}
      </div>

      <p className="mt-[1vh] text-[18px]">{comment.content}</p>

      <div className=" mt-[2vh] flex gap-[5vw]">
        <div className="icons-case lg:gap-[1vw]">
          <button onClick={handleLike}>
            <LuIcons.LuArrowBigUp className="icon" />
          </button>
          <span className="text-[12px]">{comment.likes}</span>

          <button onClick={handleDislike}>
            <LuIcons.LuArrowBigDown className="icon" />
          </button>
          <span className="text-[12px]">{comment.dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export const CommentsCase = (props) => {
  const { user, comments, setComments, postId } = props;
  const reversedComments = [...comments].reverse();

  return (
    <>
      <div className="post-container lg:hidden">
        {reversedComments.map((comment, index) => (
          <div
            key={index}
            className="w-[85vw] lg:w-[40vw] relative lg:left-[1.5vw]"
          >
            {postId === comment.postId ? (
              <Comment
                key={index}
                comment={comment}
                user={user}
                comments={comments}
                setComments={setComments}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <div
        className="hidden mt-[1vh] items-center gap-[1.5vh] 
          bg-[#EBEBEB] m-auto p-2 lg:flex lg:flex-col w-[37vw] relative left-[.5vw]"
      >
        {comments.map((comment, index) => (
          <div
            key={index}
            className="w-[98vw] lg:w-[40vw] relative lg:left-[1.5vw]"
          >
            {postId === comment.postId ? (
              <Comment
                key={index}
                comment={comment}
                user={user}
                comments={comments}
                setComments={setComments}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentsCase;