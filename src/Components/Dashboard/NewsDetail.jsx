import React, { useState, useEffect } from 'react';
import './NewsDetail.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faReply, faShareSquare } from '@fortawesome/free-solid-svg-icons';

const NewsDetail = () => {
  const { id } = useParams(); // Get the article ID from the URL parameters
  const [article, setArticle] = useState(null);
  const [username, setUsername] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyText, setReplyText] = useState('');
  const [activeReply, setActiveReply] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/news/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article details:', error);
      }
    };

    fetchArticleDetails();
  }, [id]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          throw new Error('Token not found. Please log in.');
        }

        const response = await axios.get('http://localhost:3002/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        if (response.data && response.data.username) {
          setUsername(response.data.username);
        } else {
          console.warn('Username not found in response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching user details:', error.response ? error.response.data : error.message);
      }
    };

    fetchUserDetails();
  }, []);

  useEffect(() => {
    const fetchCommentsDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/Comments/${id}`);
        setComments(response.data.map(comment => ({
          ...comment,
          replies: comment.replies || [] // Ensure replies is always an array
        })));
      } catch (error) {
        console.error('Error fetching Comments details:', error);
      }
    };

    fetchCommentsDetails();
  }, [id]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (newComment.trim()) {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setMessage('User is not authenticated. Please log in.');
          return;
        }
  
        // Post the new comment to the server
        const response = await axios.post(
          'http://localhost:3002/Comments',
          {
            newComment, // assuming your backend expects this as the comment content
            id, // assuming your backend needs the article ID
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Send JSON data
            },
          }
        );
  
        // Create a new comment object based on the server response
        const newCommentData = {
          id: response.data.commentId, // Assuming the response contains the new comment's ID
          username: username, // Use the current user's username
          content: newComment, // The new comment content
          likes_count: 0, // Initial likes count
          dislikes_count: 0, // Initial dislikes count
          replies: [], // Initialize with an empty replies array
        };
  
        // Update the comments state with the new comment
        setComments((prevComments) => [...prevComments, newCommentData]);
  
        // Clear the comment input and display success message
        setNewComment('');
        setMessage(response.data.message || 'Comment added successfully!');
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        setMessage('An error occurred while adding the comment.');
      }
    } else {
      setMessage('Comments are required.');
    }
  };
  

  const handleReplySubmit = (event, commentId) => {
    event.preventDefault();
    if (replyText.trim()) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              { id: comment.replies?.length + 1, author: username, text: replyText }, // Use optional chaining
            ],
          };
        }
        return comment;
      });
      setComments(updatedComments);
      setReplyText('');
      setActiveReply(null); // Close the reply box after submitting
    }
  };

  const handleLike = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleDislike = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, dislikes: comment.dislikes + 1 };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news-card">
      <h1 className="news-heading">{article.title}</h1>

      <div className="news-meta">
        <img src="/path/to/icon.png" alt="News Source" className="news-icon" />
        <span className="news-time">Posted on: {new Date(article.created_at).toLocaleDateString()}</span>
      </div>

      {article.content_picture && (
        <img src={article.content_picture} alt={article.title} className="news-image" />
      )}

      <div className="news-detail">
        <p>{article.content}</p>
      </div>

      <div className="comments-section">
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <span className="comment-author">{comment.username}:</span>
            <span className="comment-text">{comment.content}</span>

            <div className="comment-actions">
              <span onClick={() => handleLike(comment.id)} className="action-icon">
                <FontAwesomeIcon icon={faThumbsUp} /> {comment.likes_count}
              </span>
              <span onClick={() => handleDislike(comment.id)} className="action-icon">
                <FontAwesomeIcon icon={faThumbsDown} /> {comment.dislikes_count}
              </span>
              <span
                onClick={() => setActiveReply(activeReply === comment.id ? null : comment.id)}
                className="action-icon"
              >
                <FontAwesomeIcon icon={faReply} /> Reply
              </span>
              <span className="action-icon">
                <FontAwesomeIcon icon={faShareSquare} /> Share
              </span>
            </div>

            {comment.replies.length > 0 && (
              <div className="replies">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="reply">
                    <span className="comment-author">{reply.author}:</span>
                    <span className="comment-text">{reply.text}</span>
                  </div>
                ))}
              </div>
            )}

            {activeReply === comment.id && (
              <form onSubmit={(event) => handleReplySubmit(event, comment.id)} className="reply-form">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Reply to this comment"
                  rows="2"
                  className="comment-box"
                />
                <button type="submit">Submit Reply</button>
              </form>
            )}
          </div>
        ))}

        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment"
            rows="4"
            className="comment-box"
          />
          <button type="submit">Submit</button>
        </form>
        {message && <div className="message">{message}</div>} {/* Display message */}
      </div>
      <Link to="/UploadNews">
        <button>Create</button>
      </Link>
    </div>
  );
};

export default NewsDetail;
