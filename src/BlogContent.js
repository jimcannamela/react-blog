import {useState} from 'react';

function BlogContent(content) {
    const text = content;
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

// function Content() {
//     return (
//         <div className="blog-content">
//             <p className="blog-list-item-content">{text}</p>
//         </div>
//     )
// }
export default BlogContent;