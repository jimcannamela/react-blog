import BlogListItem from "./BlogListItem";

function BlogList({blogs, blogsDispatch}) {
    return (
        <div className= "blog-list">
           {
            blogs.slice(0,10).map((blogsData) => <BlogListItem blog={blogsData}/>)        
            } 
        </div>
    )
}

export default BlogList;