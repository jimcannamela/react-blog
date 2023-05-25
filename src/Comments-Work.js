import {useReducer, useEffect, useState} from 'react';

const initialState = {
    comments:[]
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_COMMENTS":
        return {...state, blogs: action.payload};
        
        default:
        return state;
    }
};

function Comments({ post_id }) {

    const commentsUrl = 'https://sf-collective-api.herokuapp.com/comments';

    const [commentState, commentDispatch] = useReducer(reducer, initialState);

    const [hasCommentError, setHasCommentError] = useState(false);

    async function fetchComments() {
        const response = await fetch (`${commentsUrl}?post_id=${post_id}`);
        return response.json();
    }

    useEffect(() => {
        fetchComments()
        .then((commentData) => {
        const action = {
            type: "SET_COMMENTS",
            payload: commentData,
        }
        commentDispatch (action); })
        .catch((err) => {
        setHasError(true);
        })
    }, []);

}

export default Comments;