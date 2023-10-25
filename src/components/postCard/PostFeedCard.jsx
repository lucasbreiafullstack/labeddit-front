import { Wrapper, Content, Creator, LikesDislikes, Comments, ActionSection, Img } from "./PostFeedCardStyled";
import likeArrow from "../../assets/likeArrow.svg";
import dislikeArrow from "../../assets/dislikeArrow.svg";
import commentBallon from "../../assets/commentBallon.svg"
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToCommentPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const PostFeedCard = ({post, reloadPosts, setReloadPosts}) => {
    const navigate = useNavigate();
    const context = useContext(GlobalContext);

    const { likedislikePost } = context;
    
    const [scaleLike, setScaleLike] = useState(false);
    const [scaleDislike, setScaleDislike] = useState(false);

    const likePost = () => {
        if(!scaleLike && !scaleDislike){ 
            setScaleLike(true); 

            const body = {
                like: true
            };

            likedislikePost(post.id, body)
            setReloadPosts(!reloadPosts)

        }else if(!scaleLike && scaleDislike){  
            setScaleLike(true); 
            setScaleDislike(false);

            const body = {
                like: true
            };

            likedislikePost(post.id, body)
            setReloadPosts(!reloadPosts)

        }else if(scaleLike && !scaleDislike){ 
            setScaleLike(false);  

            const body = {
                like: true
            };

            likedislikePost(post.id, body)
            setReloadPosts(!reloadPosts)
        }
    };

    const dislikePost = () => {
        if(!scaleDislike && !scaleLike){
            setScaleDislike(true);

            const body = {
                like: false
            };

            likedislikePost(post.id, body)
            setReloadPosts(!reloadPosts)

        }else if(scaleLike && !scaleDislike){
            setScaleLike(false);
            setScaleDislike(true);

            const body = {
                like: false
            };

            likedislikePost(post.id, body)
            setReloadPosts(!reloadPosts)

        }else if(!scaleLike && scaleDislike){
            setScaleDislike(false);

            const body = {
                like: false
            };

            likedislikePost(post.id, body)
            setReloadPosts(!reloadPosts)
        }
    };


    return(
        <Wrapper>
            <Creator>Enviado por: {post.creator.name}</Creator>

            <Content>
                <p>{post.content}</p>
            </Content>

            <ActionSection>
                <LikesDislikes>
                    <Img 
                        src={likeArrow} 
                        onClick={()=>likePost()} 
                        $scale={scaleLike}
                    />
                    <p>{post.likes-post.dislikes}</p>
                    <Img 
                        src={dislikeArrow} 
                        onClick={()=>dislikePost()} 
                        $scale={scaleDislike}
                    />
                </LikesDislikes> 

                <Comments onClick={()=>goToCommentPage(navigate, post.id)}>
                    <Img src={commentBallon}/>
                    {post.comments}

                </Comments>

            </ActionSection>
        </Wrapper>
    )
}

export default PostFeedCard