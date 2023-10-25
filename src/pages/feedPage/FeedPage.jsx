import { useContext, useEffect, useState } from "react"
import Header from "../../components/header/Header"
import { GlobalContext } from "../../contexts/GlobalContext";
import PostFeedCard from "../../components/postCard/PostFeedCard";
import { FormArticle, Divisor, Input, PostBtn, Wrapper, PostsArticle } from "./FeedPageStyle";
import useForm from "../../hooks/useForm";
import SimpleBackdrop from "../../components/loadingScreen/SimpleBackdrop";

export const FeedPage = () => {
    const context = useContext(GlobalContext);

    const { getPosts, createPost } = context;
    const [postList, setPostList] = useState([]);
    const [reloadPosts, setReloadPosts] = useState(false);
    const [callLoading, setCallLoading] = useState(true);

    useEffect(()=>{
        getPosts()
        .then((data) => {
            setPostList(data);
            setCallLoading(false)
        })
        .catch((error) => {
            //console.log(error);
        })
    },[reloadPosts]);

    const [form, onChangeInput, clearInputs] = useForm({
        post: ''
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await createPost({
                content: form.post
            });

            clearInputs();
            setReloadPosts(!reloadPosts)
        } catch (error) {
            //console.log(error.response)
        }
    }
     
    return(
        <>
            <Header/>
            <Wrapper>
                <FormArticle>
                    <form onSubmit={onSubmit}>
                        <section>
                            <Input
                                id="post"
                                name="post"
                                placeholder="Escreva seu post..."
                                type="text"
                                value={form.post}
                                onChange={onChangeInput}
                                style={{fontSize: '2em', fontFamily: 'IBM Plex Sans', color: '#6F6F6F', fontWeight: '400', lineHeight: '2em'}}
                            />
                        </section>

                        <PostBtn
                            type="submit"
                        >
                            Postar
                        </PostBtn>

                    </form>
                </FormArticle>

                <Divisor></Divisor>

                <PostsArticle>
                    {callLoading? 
                        <SimpleBackdrop/> 
                        : postList.map((post, index)=>{
                            return(
                                <PostFeedCard
                                    key={index}
                                    post={post}
                                    reloadPosts={reloadPosts}
                                    setReloadPosts={setReloadPosts}
                                />
                            )
                        })
                    }
                </PostsArticle>
            </Wrapper>
        </>
    )
}

export default FeedPage