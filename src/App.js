import './App.css';
import {useReducer, useEffect, useState} from 'react';
import BlogList from './BlogList'

const initialState = {
  posts:[],
  selectedPosts:null,
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_POSTS":
     return {...state, posts: action.payload};
    
    default:
      return state;
  }
}

function App() {
  const postsUrl = 'https://sf-collective-api.herokuapp.com/posts';
  // const commentsUrl = 'https://sf-collective-api.herokuapp.com/comments';

  const [state, dispatch] =
    useReducer(reducer, initialState);
  
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  async function fetchPosts() {
    const response = await fetch (postsUrl);
    return response.json();
  }
  // async function fetchComments() {
  //   const response = await fetch (commentsUrl);
  //   return response.json();
  // }

  useEffect(() => {
    fetchPosts()
    .then((postsData) => {
    //  console.log(postsData);

      const action = {
      type: "SET_POSTS",
      payload: postsData,
    }
    dispatch (action)
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
      <main>
      { isLoading ? <div>Application Loading...</div> : null }
        { hasError ? <h1>Error!  Failed to load video data!</h1> : null}
        { !isLoading && !hasError ? 
          <>
            <BlogList posts={state.posts} dispatch={dispatch} />
          </>
          : null
        }
      </main>
    </div>
  );
}



export default App;
