import './App.css';
import {useReducer, useEffect, useState} from 'react';
import BlogList from './BlogList'

const initialState = {
  blogs:[],
  selectedBlog:null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_POSTS":
     return {...state, blogs: action.payload};
    
    default:
      return state;
  }
};

function App() {
  const postsUrl = 'https://sf-collective-api.herokuapp.com/posts';
  // const commentsUrl = 'https://sf-collective-api.herokuapp.com/comments';

  const [state, blogDispatch] =
    useReducer(reducer, initialState);
  
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  async function fetchBlogs() {
    const response = await fetch (postsUrl);
    return response.json();
  };

  // async function fetchComments() {
  //   const response = await fetch (commentsUrl);
  //   return response.json();
  // }

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
