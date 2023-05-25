function CommentListItem({ comment }) {
  return (
    <div className="comment-list-item">
      <section>
        <h4 className="comment-list-item-author">{comment.author}</h4>
        <p className="comment-list-item-text">{comment.text}</p>
      </section>
    </div>
  )
}

export default CommentListItem;