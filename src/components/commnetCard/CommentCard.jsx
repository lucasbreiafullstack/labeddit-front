import { Wrapper, Content, Creator, LikesDislikes, ActionSection, Img } from "./CommentCardStyle";
import likeArrow from "../../assets/likeArrow.svg";
import dislikeArrow from "../../assets/dislikeArrow.svg";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const CommentCard = ({comment, reloadComments, setReloadComments, idPost, invalidComment, setInvalidComment}) => {
    const context = useContext(GlobalContext);

    const { likeDislikeComment } = context;
    
    const [scaleLike, setScaleLike] = useState(false);
    const [scaleDislike, setScaleDislike] = useState(false);
 
    const likePost = () => {
        if(!scaleLike && !scaleDislike){ 
            setScaleLike(true); 

            const body = {
                like: true
            };

            likeDislikeComment(idPost, comment.id, body);
            setReloadComments(!reloadComments);
            invalidComment? setInvalidComment(false) : null;

        }else if(!scaleLike && scaleDislike){  
            setScaleLike(true); 
            setScaleDislike(false);

            const body = {
                like: true
            };

            likeDislikeComment(idPost, comment.id, body);
            setReloadComments(!reloadComments);
            invalidComment? setInvalidComment(false) : null;

        }else if(scaleLike && !scaleDislike){ 
            setScaleLike(false);  

            const body = {
                like: true
            };

            likeDislikeComment(idPost, comment.id, body);
            setReloadComments(!reloadComments);
            invalidComment? setInvalidComment(false) : null;
        }
    };

    const dislikePost = () => {
        if(!scaleDislike && !scaleLike){
            setScaleDislike(true);

            const body = {
                like: false
            };

            likeDislikeComment(idPost, comment.id, body); 
            setReloadComments(!reloadComments);
            invalidComment? setInvalidComment(false) : null;

        }else if(scaleLike && !scaleDislike){
            setScaleLike(false);
            setScaleDislike(true);
 
            const body = {
                like: false
            };

            likeDislikeComment(idPost, comment.id, body);
            setReloadComments(!reloadComments);
            invalidComment? setInvalidComment(false) : null;


        }else if(!scaleLike && scaleDislike){
            setScaleDislike(false);

            const body = {
                like: false
            };

            likeDislikeComment(idPost, comment.id, body);
            setReloadComments(!reloadComments);
            invalidComment? setInvalidComment(false) : null;
        }
    }; 


    return(
        <Wrapper>
            <Creator>Enviado por: {comment.creator.name}</Creator>

            <Content>
                <p>{comment.content}</p>
            </Content>

            <ActionSection>
                <LikesDislikes>
                    <Img 
                        src={likeArrow} 
                        onClick={()=>likePost()} 
                        $scale={scaleLike}
                    />
                    <p>{comment.likes-comment.dislikes}</p>
                    <Img 
                        src={dislikeArrow} 
                        onClick={()=>dislikePost()} 
                        $scale={scaleDislike}
                    />
                </LikesDislikes> 

            </ActionSection>
        </Wrapper>
    )
}
export default CommentCard