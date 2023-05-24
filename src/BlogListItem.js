import BlogContent from "./BlogContent";

function BlogListItem({ blog }) {

    // function selectVideo() {
    //   const action = {
    //     type: "SET_SELECTED_VIDEO",
    //     payload: video
    //   }
    //   dispatch(action);
    // }
    return (
      <div className="blog-list-item">
         {/* onClick={selectVideo} > */}
        <section>
          <h3 className="blog-list-item-author">{blog.author}</h3>
          {/* <img src={blog.img_url} className="blog-list-item-avatar" alt="avatar"></img> */}
          <h4 className="blog-list-item-title">{blog.title}</h4>
          <div className= "blog-list-item-content">
            <BlogContent content={blog.content}/>
        </div>
          {/* <p className="blog-list-item-content">{blog.content}</p> */}
        </section>
      </div>
    )
  }
  
  export default BlogListItem;