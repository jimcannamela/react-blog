import CommentListItem from "./CommentListItem";

function CommentList({ comments }) {
    return (
        <div className="comment-list">
           {
            comments.map((commentsData) => <CommentListItem comment={commentsData}/>)        
            } 
        </div>
    )
}

export default CommentList;