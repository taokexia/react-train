// action type
const INIT_COMMENTS = "init_comments"
const ADD_COMMENTS = "add_comments"
const DELETE_COMMENTS = "delete_comments"

export default function (state, action) {
    if(!state) {
        state = { comments: [] }
    }
    switch(action.type) {
        case INIT_COMMENTS: 
            return { comments: action.comments }
        case ADD_COMMENTS:
            return {
                comments: [...state.comments, action.comment]
            }
        case DELETE_COMMENTS:
            return {
                comments: [...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex+1)]
            }
        default:
            return state
    }
}

// action creater
export const initComments = (comments) => {
    return {type: INIT_COMMENTS, comments}
}

export const addComments = (comment) => {
    return {type: ADD_COMMENTS, comment}
}

export const deleteComments = (commentIndex) => {
    return {type: DELETE_COMMENTS, commentIndex}
}