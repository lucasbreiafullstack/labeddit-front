export const goToLoginPage = (navigate) => {
    navigate('/')
};
export const goToSignupPage = (navigate) => {
    navigate('/signup')
};
export const goToFeedPage = (navigate) => {
    navigate('/feed')
};
export const goToCommentPage = (navigate, idPost) => {
    navigate(`/feed/${idPost}/comment`)
}