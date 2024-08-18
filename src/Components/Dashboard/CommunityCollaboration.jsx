import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommunityCollaboration = () => {
  const [posts, setPosts] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [profile, setProfile] = useState(null);
  const userId = 'currentUser'; // Replace with logic to get the current user ID

  useEffect(() => {
    axios.get('/api/forum/posts')
      .then(response => {
        setPosts(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setPosts([]); // Set posts to an empty array in case of error
      });

    axios.get('/api/qa/questions')
      .then(response => {
        setQuestions(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setQuestions([]); // Set questions to an empty array in case of error
      });

    axios.get(`/api/users/${userId}`)
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        setProfile(null);
      });
  }, [userId]);

  const handlePostSubmit = () => {
    axios.post('/api/forum/posts', { content: newPost })
      .then(response => {
        setPosts([...posts, response.data]);
        setNewPost('');
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };

  const handleQuestionSubmit = () => {
    axios.post('/api/qa/questions', { content: newQuestion })
      .then(response => {
        setQuestions([...questions, response.data]);
        setNewQuestion('');
      })
      .catch(error => {
        console.error('Error asking question:', error);
      });
  };

  const handleVote = (postId, type) => {
    axios.post(`/api/forum/posts/${postId}/vote`, { type })
      .then(response => {
        setPosts(posts.map(post => (post.id === postId ? { ...post, votes: response.data.votes } : post)));
      })
      .catch(error => {
        console.error('Error voting post:', error);
      });
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className='card '>
      <h2>Community Collaboration</h2>

      <section>
        <h3>Discussion Forum</h3>
        <div>
          <input
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your insights..."
          />
          <button onClick={handlePostSubmit}>Post</button>
        </div>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <p>{post.content}</p>
              <small>Posted by: {post.username}</small>
              <div>
                <button onClick={() => handleVote(post.id, 'upvote')}>Upvote</button>
                <button onClick={() => handleVote(post.id, 'downvote')}>Downvote</button>
                <span>{post.votes}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Q&A Section</h3>
        <div>
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Ask a question..."
          />
          <button onClick={handleQuestionSubmit}>Ask</button>
        </div>
        <div>
          {questions.map((question) => (
            <div key={question.id}>
              <p>{question.content}</p>
              <small>Asked by: {question.username}</small>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>User Profile</h3>
        <div>
          <h4>{profile.username}'s Profile</h4>
          <p>Expertise: {profile.expertise}</p>
          <p>Interests: {profile.interests}</p>
          <p>Investment Goals: {profile.goals}</p>
        </div>
      </section>
    </div>
  );
};

export default CommunityCollaboration;
