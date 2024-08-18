import React, { useState } from 'react';
import axios from 'axios';
import './UploadNewsArticle.css';

const UploadNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setMessage('Title and content are required.');
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setMessage('User is not authenticated. Please log in.');
        return;
      }

      // Send data as JSON
      const response = await axios.post('http://localhost:3002/upload-news', {
        title,
        content,
        link: link || null  // Ensure link is either provided or null
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'  // Send JSON data
        }
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);

      if (error.response) {
        const { data } = error.response;
        if (data.errors) {
          // Format error messages from the server
          const errorMessages = data.errors.map(err => `${err.param}: ${err.msg}`).join(', ');
          setMessage(`Validation errors: ${errorMessages}`);
        } else if (data.error) {
          setMessage(data.error);
        } else {
          setMessage('An error occurred');
        }
      } else {
        setMessage('An error occurred');
      }
    }
  };

  return (
    <div className="upload-news-container">
      <h2>Upload News Article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
          />
        </div>
        <div>
          <label>Optional Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadNews;
