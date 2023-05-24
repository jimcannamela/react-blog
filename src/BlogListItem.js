// import BlogContent from "./BlogContent";
import { useState } from "react";

function BlogListItem({ blog }) {

    function ReadMore({children}) {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
    
        function toggleReadMore() {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
              {isReadMore ? text.slice(0, 150) : text}
              <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...read more" : " show less"}
              </span>
            </p>
          );
    };
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
            <ReadMore>{blog.content}</ReadMore>
          </div>
          {/* <p className="blog-list-item-content">{blog.content}</p> */}
        </section>
      </div>
    )
  }
  
  export default BlogListItem;