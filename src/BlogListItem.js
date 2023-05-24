function BlogListItem({ blog, dispatch }) {

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
        <header>
          <p className="blog-list-item-title">{blog.title}</p>
        </header>
        <section>
          <h2 className="blog-list-item-author">{blog.author}</h2>
          <img src={blog.img_url} className="blog-list-item-avatar" alt="avatar"></img>
          <p className="blog-list-item-content">{blog.content}</p>
        </section>
      </div>
    )
  }
  
  export default BlogListItem;