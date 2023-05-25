import CommentList from "./CommentList";
import {useReducer, useEffect, useState} from 'react';

const initialState = {
  comments:[]
};

function commentReducer(state, action) {
  switch (action.type) {
      case "SET_COMMENTS":
      return {...state, comments: action.payload};
      
      default:
      return state;
  }
};

function BlogListItem({ blog }) {

  const commentsUrl = 'https://sf-collective-api.herokuapp.com/comments';

  const [commentState, commentDispatch] = useReducer(commentReducer, initialState);

  async function fetchComments() {
    const response = await fetch (`${commentsUrl}?post_id=${blog.id}`);
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
    // setHasCommentError(true);
    })
  }, []);

  const text = blog.content;
  console.log(text.slice(0,10));
  const [isReadMore, setIsReadMore] = useState(true);
    
  function toggleReadMore() {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="blog-list-item" key={blog.id}>
      <section>
        <h3 className="blog-list-item-author">{blog.author}</h3>
        <img src={blog.img_url} className="blog-list-item-avatar" alt="avatar"></img>
        <h4 className="blog-list-item-title">{blog.title}</h4>
        <div className= "blog-list-item-content">
          {isReadMore ? text.slice(0,150) : text} 
          {isReadMore ? <></> :
          <>
            <CommentList comments={commentState.comments} />
          </>
          }
          <span onClick={toggleReadMore} className="read-or-hide">
            <p>{isReadMore ? "...read more" : " show less"}</p>
          </span>
        </div>
      </section>
    </div>
  )
  }
  
  export default BlogListItem;