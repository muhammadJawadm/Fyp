import React, { useState } from 'react';
import './StockComments.css';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState('');
  const [replyComment, setReplyComment] = useState({});

  // Handle new comment submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentComment.trim()) {
      setComments([...comments, { id: Date.now(), text: currentComment, replies: [] }]);
      setCurrentComment('');
    }
  };

  // Handle reply submission
  const handleReplySubmit = (e, commentId, parentId = null) => {
    e.preventDefault();
    const replyText = replyComment[commentId]?.trim();
    if (replyText) {
      const updatedComments = comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                { id: Date.now(), text: replyText, replies: [], parentId: commentId }
              ],
            }
          : {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === parentId
                  ? {
                      ...reply,
                      replies: [
                        ...reply.replies,
                        { id: Date.now(), text: replyText, replies: [], parentId },
                      ],
                    }
                  : reply
              ),
            }
      );
      setComments(updatedComments);
      setReplyComment({ ...replyComment, [commentId]: '' });
    }
  };

  // Render reply form
  const renderReplyForm = (commentId) => (
    <form onSubmit={(e) => handleReplySubmit(e, commentId)} className="reply-form">
      <input
        type="text"
        placeholder="Write a reply..."
        value={replyComment[commentId] || ''}
        onChange={(e) =>
          setReplyComment({ ...replyComment, [commentId]: e.target.value })
        }
        className="reply-input"
      />
      <button type="submit" className="submit-btn">Reply</button>
    </form>
  );

  // Render comment or reply item
  const renderCommentItem = (comment, parentId = null) => (
    <div key={comment.id} className={`comment-item ${parentId ? 'reply-item' : ''}`}>
      <div className="comment-content">
        <strong>User Name</strong> {/* Replace with actual user name */}
        <p>{comment.text}</p>
        <div className="comment-actions">
          <i className="fa fa-thumbs-up"></i>
          <i className="fa fa-thumbs-down"></i>
          <i
            className="fa fa-reply"
            onClick={() => setReplyComment({ ...replyComment, [comment.id]: '' })}
          ></i>
          <i className="fa fa-share"></i>
        </div>
      </div>

      {replyComment[comment.id] !== undefined && renderReplyForm(comment.id)}

      <div className="replies-list">
        {comment.replies.map((reply) => renderCommentItem(reply, comment.id))}
      </div>
    </div>
  );

  return (
    <div className="comment-section">
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Write a comment..."
          value={currentComment}
          onChange={(e) => setCurrentComment(e.target.value)}
          className="comment-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <div className="comments-list-container">
        <div className="comments-list">
          {comments.map((comment) => renderCommentItem(comment))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
