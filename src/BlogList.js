import BlogListItem from "./BlogListItem";

function BlogList({posts, postDispatch}) {
    return (
        <div className= "blog-list">
           {
            posts.map((postsData) => <BlogListItem posts={postsData} dispatch={postDispatch}/>)        
            } 
        </div>
    )
}

export default BlogList;