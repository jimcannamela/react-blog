import './App.css';
import {useReducer, useEffect, useState} from 'react';
import BlogList from './BlogList'

const initialState = {
  blogs:[],
};

const initialPostState = {
  post: {
  img_url: 'https://www.pngitem.com/pimgs/m/179-1798032_robot-face-cartoon-hd-png-download.png?size=512x512&set=set1',
  title: '',
  author: '',
  content: ''
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_POSTS":
     return {...state, blogs: action.payload};
    
    default:
      return state;
  }
};

function postReducer(postState, postAction) {
  switch (postAction.type) {
    case "SET_POST":
      return {...postState, post: postAction.payload};
    default:
      return postState;  
  }
}

function App() {

  const postsUrl = 'https://sf-collective-api.herokuapp.com/posts';

  const [state, blogDispatch] = useReducer(reducer, initialState);
  
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  async function fetchBlogs() {
    const response = await fetch (postsUrl, {method: 'GET'});
    return response.json();
  };

  async function postBlog() {
    const response = await fetch (postsUrl, {method: 'PUT'});
    return response.json();
  };

  useEffect(() => {
    fetchBlogs()
    .then((blogData) => {

      const action = {
      type: "SET_POSTS",
      payload: blogData,
    }
    blogDispatch (action)
    setIsLoading (false); })
    .catch((err) => {
      setIsLoading(false);
      setHasError(true);
    })
  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bloggit</h1>
        <button>Add Post</button>
        {/* - toggle similar to the read more logic?
            - open a form with text boxes for Author, title, content
            - new section? 
            - use default avatar for img_url
            - need a submit button */}
      </header>

      <section className="content-container">
      { isLoading ? <div>Application Loading...</div> : null }
        { hasError ? <h1>Error!  Failed to load posts data!</h1> : null}
        { !isLoading && !hasError ? 
          <>
            <BlogList blogs={state.blogs} blogDispatch={blogDispatch} />
          </>
          : null
        }
      </section>
    </div>
  );
}



export default App;
