import BlogListItem from "./BlogListItem";

function BlogList({blogs, blogsDispatch}) {
    return (
        <div className= "blog-list">
           {
            blogs.slice(0,100).map((blogsData) => <BlogListItem blog={blogsData}/>)        
            } 
        </div>
    )
}

export default BlogList;