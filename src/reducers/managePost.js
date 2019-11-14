
export default function managePost(
    state = {
        posts: [],
        user: null,
        error: false,
        page: 'feed-page',
        comment: '',
        postIndex: null,
        otherUser: null
    }
    , action) {
    switch (action.type) {
        case 'ADD_POST':

            return { ...state, posts: state.posts.concat(action.payload) };

        case 'GET_POSTS':

            return { ...state, posts: action.payload };

        case 'SET_USER':

            return { ...state, user: action.user };

        case 'SET_OTHER_USER':

            return { ...state, otherUser: action.otherUser };

        case 'SWITCH_PAGE':

            return { ...state, page: action.page };

        case 'SWITCH_PAGE2':

            return { ...state, page: action.page, postIndex: (action.postId - 1) };


        case 'ERROR':

            return { ...state, error: true };

        case 'LOGOUT':

            return { ...state, user: null };

        case 'HANDLE_COMMENT':

            return { ...state, comment: action.payload };

        case 'HANDLE_PROFILE_CHANGE':

            return {
                ...state, user: {
                    ...state.user,
                    [action.payload.name]: action.payload.value
                }
            };

        case 'HANDLE_PROFILE_EDIT_SUBMIT':

            return {
                ...state, user: {
                    ...state.user,
                    description: action.payload.value,
                    avatar: action.payload.avatar
                }
            };

        default:
            return state;
    }
}