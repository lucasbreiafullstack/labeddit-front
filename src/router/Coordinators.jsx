export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToSignup = (navigate) => {
    navigate("/signup")
}

export const goToFeed = (navigate) => {
    navigate("/feed")
}

export const goToPost = (navigate, url) => {
    navigate(`/feed/post/${url}`)
}

export const goToSettings = (navigate) => {
    navigate("/settings")
}

export const goToDelete = (navigate) => {
    navigate("/delete")
}